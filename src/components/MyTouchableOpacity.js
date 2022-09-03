import React, {useCallback} from 'react';
import {TouchableOpacity} from 'react-native';
import HapticFeedback from 'react-native-haptic-feedback';

export default function MyTouchableOpacity(props) {
  const mOnPress = useCallback(() => {
    HapticFeedback.trigger('effectClick');
    props.onPress?.();
  }, []);

  return (
    <TouchableOpacity activeOpacity={0.7} onPress={mOnPress} {...props}>
      {props.children}
    </TouchableOpacity>
  );
}
