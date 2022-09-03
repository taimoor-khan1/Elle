import {Icon} from 'native-base';
import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Alert,
  Modal,
  TouchableOpacity,
  TextInput,
} from 'react-native';

import {
  BGView,
  ButtonRadius,
  HeaderCenterText,
  Ripple,
  Row,
} from '../../components';
import {COLORS, FONTFAMILY, FONTS, SIZES, STYLES} from '../constants';

export const MyTextInput = ({value, onchangetext, style}) => {
  return (
    <View>
      <TextInput
        value={value}
        onChangeText={onchangetext}
        style={[styles.input, style]}
        placeholder="Type Here"
        placeholderTextColor="#ffffff"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    backgroundColor: COLORS.charcoalGrey,
    paddingHorizontal: SIZES.twenty,
    opacity: 0.5,
    marginHorizontal: SIZES.ten,
    marginVertical: SIZES.fifteen,
    borderRadius: SIZES.twenty * 2,
    borderColor: COLORS.brownGrey,
    borderWidth: 1,
    color: COLORS.white,
  },
});
