// import { StatusBar } from 'expo-status-bar';
import React, {useEffect} from 'react';
import {
  Dimensions,
  SafeAreaView,
  StyleSheet,
  View,
  Platform,
} from 'react-native';
import {
  GestureHandlerRootView,
  PanGestureHandler,
  PanGestureHandlerGestureEvent,
} from 'react-native-gesture-handler';
import {Provider as PaperProvider} from 'react-native-paper';
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import {Icon} from 'native-base';
import {useCallback} from 'react';
import More from './src/screen/more/More';
import MainNavigation from './src/navigation/MainNavigation';
import {COLORS, height, SIZES, width} from './src/constants';
import {getStatusBarHeight} from 'react-native-status-bar-height';

const {width: SCREEN_WIDTH} = Dimensions.get('window');

const THRESHOLD = SCREEN_WIDTH / 3;

export default function App(props) {
  const translateX = useSharedValue(0);

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
        translateX.value = withTiming(SCREEN_WIDTH / 2);
      }
    },
  });

  const rStyle = useAnimatedStyle(() => {
    const rotate = interpolate(
      translateX.value,
      [0, SCREEN_WIDTH / 2],
      [0, 3],
      Extrapolate.CLAMP,
    );

    const borderRadius = interpolate(
      translateX.value,
      [0, SCREEN_WIDTH / 2],
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
      translateX.value = withTiming(SCREEN_WIDTH / 2);
    }
  }, []);

  return (
    <View style={{flex: 1}}>
      <PaperProvider>
        <GestureHandlerRootView
          style={{flex: 1, backgroundColor: BACKGROUND_COLOR}}>
          <Icon
            type={'AntDesign'}
            name="closecircleo"
            style={{
              top: width * 0.15,
              left: SIZES.fifteen,
              position: 'absolute',
              color: COLORS.white,
              zIndex: 0,
              opacity: translateX.value > 0 ? 1 : 0,
              tranform: [{opacity: 0}],
            }}
            onPress={onPress}
          />
          <PanGestureHandler onGestureEvent={panGestureEvent}>
            <Animated.View
              style={[{backgroundColor: 'white', flex: 1}, rStyle]}>
              <MainNavigation onMorePress={onPress} />
            </Animated.View>
          </PanGestureHandler>
        </GestureHandlerRootView>
      </PaperProvider>
    </View>
  );
}

const BACKGROUND_COLOR = '#1e1e23';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BACKGROUND_COLOR,
  },
  safe: {
    // workaround for the SafeAreaView in Android (use the react-native-safe-area-context package)
    marginTop: Platform.OS === 'android' ? 30 : 0,
  },
});
