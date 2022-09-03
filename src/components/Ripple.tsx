import React, { useCallback } from 'react'
import { StyleProp, StyleSheet, Text, View, ViewStyle } from 'react-native'
import HapticFeedback from 'react-native-haptic-feedback';
import { TapGestureHandler, TapGestureHandlerGestureEvent } from 'react-native-gesture-handler'
import Animated, { runOnJS, useAnimatedGestureHandler, useAnimatedRef, useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated'
import { COLORS, height, SIZES, width } from '../constants'

interface RippleProps { 
    style?: StyleProp<ViewStyle>,
    onPress ?: () => void
}

const Ripple: React.FC<RippleProps> = ({style, onPress,disabled, children}) => {
const centerX = useSharedValue(0)
const centerY = useSharedValue(0)
const scale = useSharedValue(0)
const rippleOpacity = useSharedValue(1)

const mOnPress = useCallback(() => {
    HapticFeedback.trigger('effectClick');
    onPress?.();
    },
    []
)

const tapGestureEvent = useAnimatedGestureHandler<TapGestureHandlerGestureEvent>({
    onStart: (tapEvent) => {
        centerX.value = tapEvent.x
        centerY.value = tapEvent.y

        scale.value = 0
        rippleOpacity.value = 1
        scale.value = withTiming(1, {duration: 1000})
    },
    onActive: () => {
        if (onPress) runOnJS(mOnPress)()
    },
    onFinish: () => {
        rippleOpacity.value = withTiming(0)
    },
})

const mStyle = useAnimatedStyle(() => {
const width = 500
const height = 500
const borderRadius = Math.sqrt(width ** 1.5 + height **2)

const translateX = centerX.value - borderRadius
const translateY = centerY.value - borderRadius
 
    return {
        width: borderRadius * 2,
        height: borderRadius * 2,
        borderRadius: borderRadius,
        opacity: rippleOpacity.value,
        top: 0, 
        left: 0,
        backgroundColor: COLORS.black30Opacity,
        position: 'absolute',
        transform: [
            {translateX},
            {translateY},
            {
            scale: scale.value
        }]
    }
})

    return (
        <TapGestureHandler onGestureEvent={tapGestureEvent}>
            <Animated.View style={[{overflow: 'hidden', borderRadius: Math.sqrt(width + height)}, style]} >
        <View>{children}</View>
        <Animated.View style={mStyle} />
        </Animated.View>
        </TapGestureHandler>
    )
}

export default Ripple

const styles = StyleSheet.create({})
