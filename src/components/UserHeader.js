import React from 'react';
import moment from 'moment';
import {StyleSheet, Text, View} from 'react-native';
import {Row, CircularImage} from '.';
import {COLORS, FONTFAMILY, FONTS, SCREENS, SIZES, width} from '../constants';
import {Icon} from 'native-base';
import MyTouchableOpacity from './MyTouchableOpacity';
import {useNavigation} from '@react-navigation/native';

export default function UserHeader({
  imageStyle,
  nameColor,
  nameSize,
  isSettingsScreen,
  edit,
  onPress,
}) {
  const naviagtion = useNavigation();
  return (
    <Row>
      <MyTouchableOpacity
        disabled={onPress === undefined}
        onPress={() => onPress?.()}>
        <CircularImage
          uri={
            'https://preview.keenthemes.com/metronic-v4/theme/assets/pages/media/profile/profile_user.jpg'
          }
          imageStyle={imageStyle}
        />
      </MyTouchableOpacity>
      {edit && (
        <View>
          <MyTouchableOpacity
            style={{
              padding: SIZES.five * 1.3,
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: SIZES.fifty * 2,
              backgroundColor: COLORS.primary,
              position: 'absolute',
              end: -SIZES.ten,
              bottom: -SIZES.ten,
            }}>
            <Icon
              type={FONTFAMILY.Ionicons}
              name={'ios-camera-outline'}
              style={{fontSize: SIZES.twentyFive, color: COLORS.white}}
            />
          </MyTouchableOpacity>
        </View>
      )}
      <View style={{marginLeft: SIZES.ten, justifyContent: 'center'}}>
        <Text
          style={[
            FONTS.mediumFont14,
            {color: nameColor ? nameColor : COLORS.white},

            nameSize && {fontSize: nameSize},
          ]}>
          Rakib
        </Text>
        <Text
          numberOfLines={2}
          style={[
            FONTS.lightFont10,
            {color: COLORS.brownGrey, maxWidth: width / 3},
          ]}>
          {isSettingsScreen
            ? 'Personal info'
            : moment().format('dddd, MMMM Do YYYY').split(',').pop().trim()}
        </Text>
      </View>
    </Row>
  );
}

const styles = StyleSheet.create({});
