import React, {useEffect, useState} from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import HapticFeedback from 'react-native-haptic-feedback';
import {Icon} from 'native-base';
import {COLORS} from '../constants';
import {FONTS, height, SIZES, width} from '../constants/theme';
import {MyTouchableOpacity, Card} from '../components';

export default function EditText(props) {
  const [enableSecureEntry, setEnableSecureEntry] = useState(true);

  return (
    <View style={[styles.textInputView, {}, props.style]}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
          {props.hasIcon ? (
            <Icon
              type={props.type}
              name={props.name}
              style={{
                marginRight: SIZES.ten * 0.7,
                fontSize: SIZES.twenty * 1.1,
              }}
            />
          ) : null}
          <TextInput
            {...props}
            ref={props.ref}
            secureTextEntry={props.password ? enableSecureEntry : false}
            selectionColor={color.primary}
            placeholderTextColor={color.placeholderColor}
            onFocus={() => {}}
            onBlur={() => {}}
            style={[FONTS.mediumFont14, styles.textInput]}
          />
        </View>
        {props.password ? (
          <MyTouchableOpacity
            onPress={() => {
              HapticFeedback.trigger('effectClick');
              setEnableSecureEntry(!enableSecureEntry);
            }}>
            <Icon
              name={enableSecureEntry ? 'eye-slash' : 'eye'}
              type={'FontAwesome'}
              style={{
                fontSize: 20,
                color: color.placeholderColor,
                marginLeft: 5,
              }}
            />
          </MyTouchableOpacity>
        ) : null}
      </View>
    </View>
  );
}

const color = {
  white: COLORS.white,
  primary: COLORS.primary,
  dark: COLORS.dark,
  black: COLORS.black,
  placeholderColor: COLORS.brownGrey,
};

const styles = StyleSheet.create({
  textInputView: {
    width: '100%',
    justifyContent: 'center',
    paddingHorizontal: SIZES.twenty,
    height: 60,
    backgroundColor: color.dark,
    borderRadius: Math.sqrt(width + height),
  },
  textInput: {
    flex: 1,
    color: color.white,
  },
});
