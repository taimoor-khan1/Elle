import React, {useState} from 'react';
import {View, TextInput, StyleSheet, Text} from 'react-native';
import CountryPicker from 'react-native-country-picker-modal';
import {COLORS} from '../constants';
import {FONTFAMILY, FONTS, height, SIZES, width} from '../constants/theme';
import {Icon} from 'native-base';
import {MyTouchableOpacity, Row} from '.';

export default function CountryCodeEditText(props) {
  const [borderColor, setBorderColor] = useState(color.border);
  const [countryCode, setCountryCode] = useState('+1');
  const [isCountryCodePickerVisible, setisCountryCodePickerVisible] =
    useState(false);
  const toggleIsCountryCodePickerVisible = () => {
    setisCountryCodePickerVisible(!isCountryCodePickerVisible);
  };

  const onSelect = country => {
    let code = !country.callingCode[0].includes('+')
      ? `+${country.callingCode[0]}`
      : country.callingCode[0];
    setCountryCode(code);
    props.countryCode(code);
  };

  return (
    <Row
      style={[styles.textInputView, {borderColor: borderColor}, props.style]}>
      <MyTouchableOpacity
        activeOpacity={0.8}
        onPress={() => toggleIsCountryCodePickerVisible()}
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <CountryPicker
          onSelect={onSelect}
          countryCode={countryCode}
          visible={isCountryCodePickerVisible}
          withCallingCode
          withFlagButton={false}
          theme={{
            fontFamily: FONTFAMILY.Regular,
            resizeMode: 'contain',
          }}
        />
        <Text
          style={[
            FONTS.mediumFont14,
            {
              color: borderColor === color.dark ? color.dark : color.border,
            },
          ]}>
          {countryCode}
        </Text>
        <Icon
          type={FONTFAMILY.Ionicons}
          name={'chevron-down'}
          style={{
            color: color.dark,
            fontSize: 20,
            marginLeft: SIZES.five,
          }}
        />
      </MyTouchableOpacity>
      <TextInput
        {...props}
        secureTextEntry={false}
        selectionColor={color.dark + '80'}
        placeholderTextColor={color.border}
        onFocus={() => {
          setBorderColor(color.dark);
        }}
        onBlur={() => {
          setBorderColor(color.border);
        }}
        style={[FONTS.mediumFont14, styles.textInput]}
      />
    </Row>
  );
}

const color = {
  primary: COLORS.primary,
  dark: COLORS.darkBlue,
  black: COLORS.black,
  border: '#C8C3C3',
  placeholderColor: '#4A4A4A',
};

const styles = StyleSheet.create({
  textInputView: {
    width: '100%',
    justifyContent: 'center',
    borderWidth: 0.85,
    paddingHorizontal: SIZES.fifteen,
    height: 55,
    borderRadius: Math.sqrt(width ** 0.6 + height ** 0.6),
  },
  textInput: {
    flex: 1,
    color: color.dark,
  },
});
