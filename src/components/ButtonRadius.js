/* @flow weak */
import React, {useCallback} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import HapticFeedback from 'react-native-haptic-feedback';
import {COLORS, FONTFAMILY, SIZES, FONTS, STYLES, width} from '../constants';
import {Icon} from 'native-base';
import {Ripple} from '.';
import Row from './Row';

export default function ButtonRadius({label, onPress, style, showArrow}) {
  return (
    <Ripple style={[styles.button, style]} onPress={onPress}>
      <View
        style={{
          justifyContent: 'center',
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text
            style={[
              FONTS.boldFont18,
              {
                color: COLORS.white,
                textAlign: 'center',
              },
            ]}>
            {label}
          </Text>
          {showArrow && (
            <Icon
              type={FONTFAMILY.AntDesign}
              name="arrowright"
              style={{
                fontSize: SIZES.twenty,
                color: COLORS.white,
                position: 'absolute',
                right: SIZES.ten,
              }}
            />
          )}
        </View>
      </View>
    </Ripple>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: COLORS.primary,
    height: 60,
    width: '100%',
    justifyContent: 'center',
  },
});
