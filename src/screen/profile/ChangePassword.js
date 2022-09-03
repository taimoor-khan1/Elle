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

export default function ChangePassword(props) {
  return (
    <BGView>
      <View
        style={{
          flex: 0,
          margin: SIZES.fifteen,
          marginBottom: 0,
        }}>
        <HeaderCenterText title={'Change Password'} backArrow />
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
          />
          <View style={{marginTop: SIZES.fifteen * 1.5}}>
            <View style={{marginTop: SIZES.fifteen}}>
              <Text
                style={[
                  FONTS.mediumFont14,
                  {color: COLORS.brownGrey, marginBottom: SIZES.five},
                ]}>
                Current Password
              </Text>
              <EditText
                placeholder={'Current Password'}
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
                New Password
              </Text>
              <EditText
                placeholder={'New Password'}
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
                Confirm New Number
              </Text>
              <EditText
                placeholder={'Confirm New Number'}
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
