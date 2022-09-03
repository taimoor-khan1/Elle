import React, {useRef} from 'react';
import {useFocusEffect} from '@react-navigation/native';
import {Text, View, Animated} from 'react-native';
import {COLORS} from '../constants';

export default function FadeInView(props) {
  const fadeAnim = useRef(new Animated.Value(0)).current; // Initial value for opacity: 0

  useFocusEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 800,
      useNativeDriver: true,
    }).start();
    return () => {
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 500,
        useNativeDriver: true,
      }).start();
    };
  });

  return (
    <Animated.View // Special animatable View.
      style={[
        {
          flex: 1,
          opacity: fadeAnim, // Bind opacity to animated value
          backgroundColor: COLORS.dark,
        },
        props.style,
      ]}>
      {props.children}
    </Animated.View>
  );
}
