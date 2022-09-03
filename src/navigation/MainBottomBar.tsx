import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Platform,
  Image,
  Dimensions,
} from 'react-native';
import HapticFeedback from 'react-native-haptic-feedback';
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
  withSpring,
} from 'react-native-reanimated';

import {
  GestureHandlerRootView,
  PanGestureHandler,
  PanGestureHandlerGestureEvent,
} from 'react-native-gesture-handler';

import {useCallback} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  COLORS,
  FONTFAMILY,
  FONTS,
  height,
  IMAGES,
  SCREENS,
  SIZES,
  STYLES,
  width,
} from '../constants';
import {Icon} from 'native-base';
import MyTouchableOpacity from '../components/MyTouchableOpacity';
import Home from '../screen/home/Home';
import Calendar from '../screen/calendar/Calendar';
import Notifications from '../screen/notifications/Notifications';
import More from '../screen/more/More';
import {BGView, Ripple, UserHeader} from '../components';
import AddTask from '../screen/taskdetails/AddTask';

const Tab = createBottomTabNavigator();
const areEqual = (prevProps, nextProps) => true;

const MainBottomBar = React.memo(
  ({route, navigation, drawerAnimation, onMorePress}) => {
    const vibrateOnTouch = () => {
      HapticFeedback.trigger('effectClick');
    };

    const CustomIcon = ({isFocused, type, icon, unSelectedIcon}) => {
      return (
        <View
          style={{
            padding: SIZES.ten - 2,
          }}>
          <Icon
            name={icon}
            type={type}
            style={{
              color: isFocused ? '#ff0066' : COLORS.brownGrey,
              fontSize: SIZES.twentyFiveWidth * 0.75,
              fontWeight: '700',
            }}
          />
        </View>
      );
    };

    const CenterCustomIcon = () => (
      <Image
        source={IMAGES.BottomBarCenterButton}
        resizeMode={'contain'}
        style={{
          height: SIZES.twentyFiveWidth * 2,
          width: SIZES.twentyFiveWidth * 2,
          position: 'absolute',
          top: -SIZES.twenty,
        }}
      />
    );

    return (
      <Tab.Navigator
        initialRouteName={SCREENS.Home}
        tabBarOptions={{
          showLabel: false,
          style: [
            STYLES.shadow,
            {
              position: 'absolute',
              bottom: 0,
              width: width,
              height: SIZES.twenty * 4,
              borderTopLeftRadius: SIZES.ten * 1.9,
              borderTopRightRadius: SIZES.ten * 1.9,
              backgroundColor: COLORS.almostBlack,
              borderTopWidth: 0,
            },
          ],
        }}>
        <Tab.Screen //1
          listeners={({navigation, route}) => ({
            tabPress: e => {
              vibrateOnTouch();
            },
          })}
          name={SCREENS.Home}
          component={Home}
          options={{
            tabBarIcon: ({color, focused}) => (
              <CustomIcon
                isFocused={focused}
                type={FONTFAMILY.Ionicons}
                icon={'home-outline'}
              />
            ),
          }}
        />
        <Tab.Screen //2
          listeners={({navigation, route}) => ({
            tabPress: e => {
              vibrateOnTouch();
            },
          })}
          name={SCREENS.Calendar}
          component={Calendar}
          options={{
            tabBarIcon: ({color, focused}) => (
              <CustomIcon
                isFocused={focused}
                type={FONTFAMILY.Ionicons}
                icon={'calendar-sharp'}
              />
            ),
          }}
        />
        <Tab.Screen //3
          // listeners={({navigation, route}) => ({
          //   tabPress: e => {
          //     // alert('tesst');
          //     e.preventDefault();
          //     vibrateOnTouch();
          //   },
          // })}
          name={'Plus'}
          component={AddTask}
          options={{
            tabBarIcon: ({color, focused}) => {
              return <CenterCustomIcon />;
            },
          }}
        />
        <Tab.Screen //4
          listeners={({navigation, route}) => ({
            tabPress: e => {
              vibrateOnTouch();
            },
          })}
          name={SCREENS.Notifications}
          component={Notifications}
          options={{
            tabBarIcon: ({color, focused}) => (
              <CustomIcon
                isFocused={focused}
                type={FONTFAMILY.Ionicons}
                icon={'notifications-outline'}
              />
            ),
          }}
        />

        <Tab.Screen //5
          listeners={({navigation, route}) => ({
            tabPress: e => {
              e.preventDefault();
              onMorePress();
              // vibrateOnTouch();
            },
          })}
          name={SCREENS.More}
          component={More}
          options={{
            tabBarIcon: ({color, focused}) => (
              <CustomIcon
                isFocused={focused}
                type={FONTFAMILY.Ionicons}
                icon={'menu-outline'}
              />
            ),
          }}
        />
      </Tab.Navigator>
    );
  },
  areEqual,
);

const styles = StyleSheet.create({
  unselectedBottomBarIcon: {
    tintColor: COLORS.brownGrey,
    height: SIZES.twentyFive,
    width: SIZES.twentyFive,
  },
  selectedBottomBarIcon: {
    tintColor: COLORS.white,
    height: SIZES.twentyFive + 5,
    width: SIZES.twentyFive + 5,
  },
  TrapezoidStyle: {
    width: 52,
    height: 0,
    borderBottomColor: COLORS.primary,
    borderBottomWidth: 23,
    borderLeftWidth: 10.5,
    borderRightWidth: 10.5,
    borderRightColor: 'transparent',
    borderLeftColor: 'transparent',
  },
});

// export default BottomBar;

const {width: SCREEN_WIDTH} = Dimensions.get('window');

const THRESHOLD = SCREEN_WIDTH / 3;

export default function BottomBarApp(props) {
  const translateX = useSharedValue(0);
  const DrawerWidth = SCREEN_WIDTH / 2.15;
  const panGestureEvent = useAnimatedGestureHandler<
    PanGestureHandlerGestureEvent,
    {x: number}
  >({
    onStart: (_, context) => {
      context.x = translateX.value;
    },
    onActive: (event, context) => {
      // I forgot to wrap the translationX with Math.max in the video :/
      // It must be done in order to clamp the right axis scroll
      translateX.value = Math.max(event.translationX + context.x, 0);
    },
    onEnd: () => {
      if (translateX.value <= THRESHOLD) {
        translateX.value = withTiming(0);
      } else {
        translateX.value = withTiming(DrawerWidth);
      }
    },
  });

  const rStyle = useAnimatedStyle(() => {
    const rotate = interpolate(
      translateX.value,
      [0, DrawerWidth],
      [0, 3],
      Extrapolate.CLAMP,
    );

    const borderRadius = interpolate(
      translateX.value,
      [0, DrawerWidth],
      [0, 15],
      Extrapolate.CLAMP,
    );

    return {
      borderRadius,
      transform: [
        {perspective: 100},
        {
          translateX: translateX.value,
        },
        {
          rotateY: `-${rotate}deg`,
        },
      ],
    };
  }, []);

  const onPress = useCallback(() => {
    if (translateX.value > 0) {
      translateX.value = withTiming(0);
    } else {
      translateX.value = withTiming(DrawerWidth);
    }
  }, []);

  return (
    <View style={{flex: 1}}>
      <GestureHandlerRootView
        style={{flex: 1, backgroundColor: BACKGROUND_COLOR}}>
        <View
          style={{
            zIndex: -10000000,
            position: 'absolute',
            height: height,
            width: width,
          }}>
          <More {...props} onPress={onPress} onClosePress={() => onPress()} />
        </View>
        <PanGestureHandler
          enabled={false}
          // onGestureEvent={panGestureEvent}
        >
          <Animated.View style={[{backgroundColor: 'white', flex: 1}, rStyle]}>
            <MainBottomBar onMorePress={() => onPress()} />
          </Animated.View>
        </PanGestureHandler>
      </GestureHandlerRootView>
    </View>
  );
}

const BACKGROUND_COLOR = '#1e1e23';
const styless = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BACKGROUND_COLOR,
  },
  safe: {
    // workaround for the SafeAreaView in Android (use the react-native-safe-area-context package)
    marginTop: Platform.OS === 'android' ? 30 : 0,
  },
});
