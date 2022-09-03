import {CommonActions} from '@react-navigation/native';
import {useHeaderHeight} from '@react-navigation/stack';
import React, {useRef} from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview';
import {BGView, ButtonRadius, EditText} from '../../components';
import {COLORS, FONTS, height, SCREENS, SIZES} from '../../constants';

export default function GeneralForm(props) {
  const _textInputRef = useRef();
  return (
    <BGView>
      <View
        style={{
          flex: 1,
          margin: SIZES.fifteen,
          marginTop: SIZES.twentyFive * 1.5,
          marginBottom: 0,
        }}>
        <KeyboardAvoidingView
          {...(Platform.OS === 'ios' && {behavior: 'padding'})}
          keyboardVerticalOffset={useHeaderHeight()}
          style={{flex: 1}}>
          <ScrollView
            showsVerticalScrollIndicator={false}
            overScrollMode={'never'}
            contentContainerStyle={{paddingBottom: height * 0.02}}
            bounces={false}>
            <Text style={[FONTS.boldFont20, {color: COLORS.white}]}>
              General Form
            </Text>
            <Text style={[FONTS.mediumFont10, {color: COLORS.brownGrey}]}>
              Add What would you like to track?
            </Text>
            <View style={{marginTop: SIZES.fifteen * 1.5}}>
              <View style={{marginTop: SIZES.fifteen}}>
                <Text
                  style={[
                    FONTS.mediumFont14,
                    {color: COLORS.brownGrey, marginBottom: SIZES.five},
                  ]}>
                  Q1
                </Text>
                <EditText
                  placeholder={'Type here....'}
                  ref={r => {
                    this._textInputRef = r;
                  }}
                />
              </View>
              <View style={{marginTop: SIZES.fifteen}}>
                <Text
                  style={[
                    FONTS.mediumFont14,
                    {color: COLORS.brownGrey, marginBottom: SIZES.five},
                  ]}>
                  Q2
                </Text>
                <EditText
                  placeholder={'Type here....'}
                  ref={r => {
                    this._textInputRef = r;
                  }}
                />
              </View>
              <View style={{marginTop: SIZES.fifteen}}>
                <Text
                  style={[
                    FONTS.mediumFont14,
                    {color: COLORS.brownGrey, marginBottom: SIZES.five},
                  ]}>
                  Q3
                </Text>
                <EditText
                  placeholder={'Type here....'}
                  ref={r => {
                    this._textInputRef = r;
                  }}
                />
              </View>
              <View style={{marginTop: SIZES.fifteen}}>
                <Text
                  style={[
                    FONTS.mediumFont14,
                    {color: COLORS.brownGrey, marginBottom: SIZES.five},
                  ]}>
                  Q4
                </Text>
                <EditText
                  placeholder={'Type here....'}
                  ref={r => {
                    this._textInputRef = r;
                  }}
                />
              </View>
            </View>
            <ButtonRadius
              label={'Continue'}
              style={{marginTop: SIZES.fifteen * 3}}
              onPress={() => {
                props.navigation.dispatch(
                  CommonActions.reset({
                    index: 0,
                    routes: [{name: SCREENS.BottomBar}],
                  }),
                );
              }}
            />
          </ScrollView>
        </KeyboardAvoidingView>
      </View>
    </BGView>
  );
}

const styles = StyleSheet.create({});
