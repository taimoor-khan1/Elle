import React, {useEffect, useState} from 'react';
import {Icon} from 'native-base';
import {View, Text, StyleSheet, ScrollView, Image} from 'react-native';
import axios from 'axios';
import {hideMessage, showMessage} from 'react-native-flash-message';
import {
  COLORS,
  FONTS,
  SCREENS,
  SIZES,
  CONSTANTS,
  IMAGES,
} from '../../constants/index';
import utils from '../../utils';
import {
  ButtonRadius,
  BackArrow,
  MyTouchableOpacity,
  EditText,
  BGView,
  Row,
} from '../../components';

const SignUp = ({navigation}) => {
  const [isTnCChecked, setisTnCChecked] = useState(false);
  const [is18PlusChecked, setis18PlusChecked] = useState(false);

  const navigateToNextScreen = screenName => {
    navigation.navigate(screenName);
  };

  const replaceWithNextScreen = screenName => {
    navigation.replace(screenName);
  };

  const _toggleIsTnCChecked = () => {
    setisTnCChecked(!isTnCChecked);
  };

  const _toggleIs18PlusChecked = () => {
    setis18PlusChecked(!is18PlusChecked);
  };

  return (
    <BGView>
      <ScrollView
        showsVerticalScrollIndicator={false}
        bounces={false}
        contentContainerStyle={{paddingBottom: SIZES.fifty}}>
        <View style={[styles.authTopRoundCorner]}>
          <BackArrow onPress={() => navigation.goBack()} />
          <Image
            source={IMAGES.LogoHorizontal}
            resizeMode={'contain'}
            style={{
              height: SIZES.twentyFive * 3,
              alignSelf: 'center',
              marginTop: SIZES.twenty,
            }}
          />
          <Text
            style={[
              FONTS.boldFont20,
              {
                color: COLORS.white,
                alignSelf: 'flex-start',
                marginTop: SIZES.twentyFive,
              },
            ]}>
            Sign Up
          </Text>

          <View style={{marginTop: SIZES.twenty * 1.5}}>
            <EditText
              keyboardType="default"
              placeholder={'Full Name'}
              secureTextEntry={false}
              isEditable={true}
            />
          </View>
          <View style={{marginTop: SIZES.twenty}}>
            <EditText
              keyboardType="email-address"
              placeholder={'Email Address'}
              secureTextEntry={false}
              isEditable={true}
            />
          </View>
          <View style={{marginTop: SIZES.twenty}}>
            <EditText
              keyboardType="default"
              placeholder={'Password'}
              password
            />
          </View>
          <View style={{marginTop: SIZES.twenty}}>
            <EditText
              keyboardType="default"
              placeholder={'Confirm Password'}
              password
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              marginVertical: SIZES.twentyFive * 2,
              alignItems: 'center',
            }}>
            <MyTouchableOpacity
              onPress={() => {
                _toggleIsTnCChecked();
              }}>
              <Icon
                name={
                  isTnCChecked ? 'ios-checkbox-outline' : 'ios-square-outline'
                }
                style={{
                  color: COLORS.white,
                }}
              />
            </MyTouchableOpacity>
            <Row>
              <Text
                style={[
                  FONTS.lightFont12,
                  {
                    color: COLORS.brownGrey,
                    marginStart: 5,
                  },
                ]}>
                I Agree to the{' '}
              </Text>
              <MyTouchableOpacity style={{}}>
                <Text style={[FONTS.lightFont14, {color: COLORS.primary}]}>
                  Terms & Conditions
                </Text>
              </MyTouchableOpacity>
              <Text
                style={[
                  FONTS.lightFont12,
                  {
                    color: COLORS.brownGrey,
                  },
                ]}>
                {' '}
                of{' '}
              </Text>
              <MyTouchableOpacity>
                <Text style={[FONTS.lightFont14, {color: COLORS.primary}]}>
                  Elle
                </Text>
              </MyTouchableOpacity>
            </Row>
          </View>
          <ButtonRadius
            label="Sign Up"
            onPress={() =>
              navigation.replace(SCREENS.Verification, {
                from: CONSTANTS.DESTINATIONS.SIGN_UP,
                email: 'abc@yopmail.com',
                // email: email,
              })
            }
            // onPress={() => navigation.replace(SCREENS.SelectCategories)}
          />
        </View>
      </ScrollView>
    </BGView>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  authLogo: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  sectionHeading: {
    color: COLORS.white,
    fontSize: SIZES.twenty,
    textAlign: 'center',
  },
  authTopRoundCorner: {
    flex: 1,
    paddingHorizontal: SIZES.fifteen,
    paddingTop: SIZES.twenty,
  },
  horinzontalLine: {
    width: '100%',
    height: 0.5,
    backgroundColor: COLORS.veryLightPink,
  },
});
