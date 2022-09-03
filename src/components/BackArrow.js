import React from 'react';
import {StyleSheet} from 'react-native';
import {Icon} from 'native-base';
import {useNavigation} from '@react-navigation/native';
import {MyTouchableOpacity} from '.';
import {COLORS, FONTFAMILY, SIZES} from '../constants';

export default function BackArrow(props) {
  const color = {
    white: COLORS.white,
    dark: COLORS.dark,
  };

  const styles = StyleSheet.create({
    circularBG: {
      height: SIZES.fifty * 0.65,
      width: SIZES.fifty * 0.65,
      borderRadius: SIZES.fifty,
      alignItems: 'center',
      justifyContent: 'center',
      borderWidth: 0.5,
      borderColor: props.dark ? color.dark : color.white,
    },
  });

  const navigation = useNavigation();
  return (
    <MyTouchableOpacity
      onPress={() => navigation.goBack()}
      style={[styles.circularBG, props.style]}>
      <Icon
        type={FONTFAMILY.Entypo}
        name={'chevron-left'}
        style={{
          fontSize: SIZES.twentyFive * 0.9,
          color: props.dark ? color.dark : color.white,
        }}
      />
    </MyTouchableOpacity>
  );
}
