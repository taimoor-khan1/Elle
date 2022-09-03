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
  EditText,
  HeaderCenterText,
  Ripple,
  Row,
} from '../../components';
import {COLORS, FONTFAMILY, FONTS, SIZES, STYLES} from '../../constants';

import {MyTextInput} from '../../components/MyTextInput';

export function SubCatagory({visible, onpress}) {
  return (
    <View>
      <Modal
        animationType="fade"
        animated
        transparent={true}
        visible={visible}
        statusBarTranslucent>
        <View
          style={{
            flex: 1,
            backgroundColor: COLORS.brownGrey + '65',
            justifyContent: 'center',
          }}>
          <View
            style={[
              STYLES.shadow,
              {
                backgroundColor: COLORS.LightBlack,
                padding: SIZES.twenty * 2,
                borderRadius: SIZES.fifteen,
                margin: SIZES.fifteen,
              },
            ]}>
            <Text
              style={[
                FONTS.mediumFont14,
                ,
                {color: COLORS.white, marginVertical: SIZES.fifteen},
              ]}>
              Add a Sub-catagory
            </Text>

            <EditText placeholder={'type here...'} />

            <TouchableOpacity
              style={[
                styles.tagsbutton,
                {
                  backgroundColor: COLORS.primary,
                  alignItems: 'center',
                  marginVertical: SIZES.fifteen,
                },
              ]}
              onPress={onpress}>
              <Text
                style={[
                  FONTS.mediumFont14,
                  {
                    color: COLORS.white,
                  },
                ]}>
                Continue
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}
const styles = StyleSheet.create({
  tagsbutton: {
    paddingHorizontal: SIZES.fifteen,
    paddingVertical: SIZES.fifteen,
    borderRadius: SIZES.twenty,
  },
});
