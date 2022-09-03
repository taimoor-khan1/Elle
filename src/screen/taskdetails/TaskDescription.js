import {Icon} from 'native-base';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {
  BGView,
  ButtonRadius,
  HeaderCenterText,
  Ripple,
  Row,
} from '../../components';
import {COLORS, FONTFAMILY, FONTS, SIZES} from '../../constants';

export default TaskDescription = () => {
  var today = new Date();
  var Currentdate =
    today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
  return (
    <BGView>
      <Text
        style={[
          FONTS.mediumFont14,
          {color: COLORS.white, marginLeft: SIZES.ten},
        ]}>
        Send
      </Text>
      <Text
        style={[
          FONTS.mediumFont14,
          {color: COLORS.white, marginLeft: SIZES.ten},
        ]}>
        Reminder me later
      </Text>
      <Row>
        <Text
          style={[
            FONTS.mediumFont14,
            {color: COLORS.white, marginLeft: SIZES.ten},
          ]}>
          List
        </Text>
        <Text
          style={[
            FONTS.mediumFont14,
            {color: COLORS.white, marginLeft: SIZES.ten},
          ]}>
          Owner
        </Text>
      </Row>
      <Text
        style={[
          FONTS.mediumFont14,
          {color: COLORS.white, marginLeft: SIZES.ten},
        ]}>
        Attachment
      </Text>
      <Text
        style={[
          FONTS.mediumFont14,
          {color: COLORS.white, marginLeft: SIZES.ten},
        ]}>
        Created {Currentdate}
      </Text>
    </BGView>
  );
};
