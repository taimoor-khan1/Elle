import React from 'react';
import {Text, StyleSheet} from 'react-native';
import {COLORS, FONTS, SIZES} from '../constants';
import {BackArrow, Row} from '.';

const HeaderCenterText = props => (
  <Row
    style={{
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
      {props.title}
    </Text>
    {props.backArrow && <BackArrow style={{position: 'absolute', left: 0}} />}
    {props?.rightIcon?.()}
  </Row>
);

export default HeaderCenterText;

const styles = StyleSheet.create({
  circularBG: {
    padding: SIZES.ten,
    borderRadius: SIZES.fifty,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
