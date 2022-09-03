import React from 'react';
import {Animated, StyleSheet, Text, View} from 'react-native';

export default function SlideUpView(props) {
  const animated = new Animated.Value(1000);
  const duration = 350;

  React.useEffect(() => {
    Animated.timing(animated, {
      toValue: 0,
      duration: duration,
      useNativeDriver: true,
    }).start();
  }, [props]);

  return (
    <Animated.View style={[{flex: 1, transform: [{translateY: animated}]}]}>
      {props.children}
    </Animated.View>
  );
}

const styles = StyleSheet.create({});
