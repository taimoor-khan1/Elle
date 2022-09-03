import React from 'react';
import { Dimensions, Image, StyleSheet, Text, View ,Alert} from 'react-native';
import {
  PanGestureHandler,
  PanGestureHandlerGestureEvent,
  PanGestureHandlerProps,
} from 'react-native-gesture-handler';
import Animated, {
  runOnJS,
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import {Icon}  from 'native-base';
import { COLORS, FONTFAMILY, FONTS, SIZES, width } from '../../constants';

interface ListItemProps
  extends Pick<PanGestureHandlerProps, 'simultaneousHandlers'> {
  task: any;
  onDismiss?: (task:any) => void;
}

const LIST_ITEM_HEIGHT = 70;

const { width: SCREEN_WIDTH } = Dimensions.get('window');
const TRANSLATE_X_THRESHOLD = -SCREEN_WIDTH * 0.3;

const ListItem: React.FC<ListItemProps> = ({
  task,
  onDismiss,
  simultaneousHandlers,
}) => {
  const translateX = useSharedValue(0);
  const itemHeight = useSharedValue(LIST_ITEM_HEIGHT);
  const marginVertical = useSharedValue(SIZES.five);
  const opacity = useSharedValue(1);

  const handleRemove =()=>{
    Alert.alert("Confimation","Are you sure you want to remove this notification ?", [
      {
        text: "No",
        onPress: () =>  translateX.value = withTiming(0),
        style: "cancel"
      },
      { text: "Yes", onPress: () => {
        setTimeout(()=>{

          const shouldBeDismissed = translateX.value < TRANSLATE_X_THRESHOLD;
          if (shouldBeDismissed) {
            translateX.value = withTiming(-SCREEN_WIDTH);
            itemHeight.value = withTiming(0);
            marginVertical.value = withTiming(0);
            opacity.value = withTiming(0, undefined, (isFinished) => {
              if (isFinished && onDismiss) {
                runOnJS(onDismiss)(task);
              }
            });
          } else {
            translateX.value = withTiming(0);
          }
        },250)

      }     
    },
    
    ]
    )
  }
  const panGesture = useAnimatedGestureHandler<PanGestureHandlerGestureEvent>({
    onStart:()=>{
    },
    onActive: (event) => {
      translateX.value = event.translationX;

    },
    onEnd: () => {
      const shouldBeDismissed = translateX.value < TRANSLATE_X_THRESHOLD;
      if (shouldBeDismissed) {
        runOnJS(handleRemove)(task)
      } else {
        translateX.value = withTiming(0);
      }

      
    },
  });

  const rStyle = useAnimatedStyle(() => ({
    transform: [
      {
        translateX: translateX.value,
      },
    ],
  }));

  const rIconContainerStyle = useAnimatedStyle(() => {
    const opacity = withTiming(
      translateX.value < TRANSLATE_X_THRESHOLD ? 1 : 0
    );
    const backgroundColor = withTiming(
      translateX.value < TRANSLATE_X_THRESHOLD ? COLORS.primary : COLORS.primary
    );
    return { opacity ,backgroundColor};
  });

  const rTaskContainerStyle = useAnimatedStyle(() => {
    return {
      height: itemHeight.value,
      marginVertical: marginVertical.value,
      opacity: opacity.value,
    };
  });

  return (
    <Animated.View style={[styles.taskContainer, rTaskContainerStyle]}>
      <Animated.View style={[styles.iconContainer, rIconContainerStyle]}>
        <Icon
          name={'trash-alt'}
          type={FONTFAMILY.FontAwesome+'5'}
          style={{
            fontSize:LIST_ITEM_HEIGHT * 0.4,
            color:COLORS.white,
          }}
        />
      </Animated.View>
      <PanGestureHandler
        simultaneousHandlers={simultaneousHandlers}
        onGestureEvent={panGesture}
      >
        <Animated.View style={[styles.task, rStyle]}>
        <Image
              source={{
                uri: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80',
              }}
              style={{
                height: SIZES.fifteen * 4,
                width: SIZES.fifteen * 4,
                borderRadius: width,
              }}
              resizeMode="contain"
            />
            <View style={{flex:1, marginStart:SIZES.ten}}> 

          <Text style={[FONTS.mediumFont14, {color: COLORS.white}]}>{task.name}</Text>
          <Text style={[FONTS.mediumFont10,{color:COLORS.brownGrey,marginTop:SIZES.five}]} numberOfLines={1}>{task.details}</Text>
            </View>
        </Animated.View>
      </PanGestureHandler>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  taskContainer: {
    width: '100%',
    alignItems: 'center',
    // backgroundColor: 'red',
  },
  task: {
    height: LIST_ITEM_HEIGHT,
    flexDirection:'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.secondary,
    borderRadius: SIZES.ten,
  },
  iconContainer: {
    height: LIST_ITEM_HEIGHT,
    width: LIST_ITEM_HEIGHT,
    position: 'absolute',
    right: SIZES.fifteen,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius:SIZES.fifteen,
  },
});

export default ListItem;