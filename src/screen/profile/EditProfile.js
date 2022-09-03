import {useHeaderHeight} from '@react-navigation/stack';
import {Icon} from 'native-base';
import React from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {getStatusBarHeight} from 'react-native-status-bar-height';
import {NavigationActions} from 'react-navigation';
import {
  BGView,
  ButtonRadius,
  Card,
  CircularImage,
  EditText,
  HeaderCenterText,
  MyTouchableOpacity,
  UserHeader,
} from '../../components';
import {COLORS, FONTFAMILY, FONTS, SCREENS, SIZES} from '../../constants';

export default function EditProfile(props) {
  return (
    <BGView>
      <View
        style={{
          flex: 0,
          margin: SIZES.fifteen,
          marginBottom: 0,
        }}>
        <View
          style={{
            height: Platform.OS === 'android' ? getStatusBarHeight() + 15 : 0,
          }}
        />
        <HeaderCenterText title={'Edit Profile'} backArrow />
      </View>
      <KeyboardAvoidingView
        {...(Platform.OS === 'ios' && {behavior: 'padding'})}
        keyboardVerticalOffset={useHeaderHeight()}
        style={{flex: 1}}>
        <Card
          style={{
            flex: 1,
            backgroundColor: COLORS.darkGrey,
            padding: SIZES.fifteen,
            borderTopRightRadius: 20,
            borderTopLeftRadius: 20,
            marginTop: SIZES.twentyFive * 1.5,
          }}>
          <UserHeader
            imageStyle={{
              height: SIZES.twenty * 4.5,
              width: SIZES.twenty * 4.5,
              borderRadius: SIZES.twenty * 4.5,
              borderWidth: 1.5,
              borderColor: COLORS.primary,
            }}
            edit
          />
          <View style={{marginTop: SIZES.fifteen * 1.5}}>
            <View style={{marginTop: SIZES.fifteen}}>
              <Text
                style={[
                  FONTS.mediumFont14,
                  {color: COLORS.brownGrey, marginBottom: SIZES.five},
                ]}>
                Fullname
              </Text>
              <EditText
                placeholder={'Fullname'}
                ref={r => {
                  this._textInputRef = r;
                }}
              />
            </View>
            <View style={{marginTop: SIZES.twentyFive * 1.3}}>
              <Text
                style={[
                  FONTS.mediumFont14,
                  {color: COLORS.brownGrey, marginBottom: SIZES.five},
                ]}>
                Phone Number
              </Text>
              <EditText
                placeholder={'Phone #'}
                ref={r => {
                  this._textInputRef = r;
                }}
              />
            </View>
          </View>
          <MyTouchableOpacity
            style={{alignSelf: 'center'}}
            onPress={() => {
              props.navigation.navigate(SCREENS.ChangePassword);
            }}>
            <Text
              style={[
                FONTS.mediumFont12,
                {
                  color: COLORS.primary,
                  marginVertical: SIZES.twentyFive * 1.5,
                  textAlign: 'center',
                },
              ]}>
              Change Password
            </Text>
          </MyTouchableOpacity>
          <ButtonRadius
            label={'Save'}
            style={{}}
            onPress={() => props.navigation.goBack()}
          />
        </Card>
      </KeyboardAvoidingView>
    </BGView>
  );
}

const styles = StyleSheet.create({});
