import React from 'react';
import {Platform, StyleSheet, Text, View, Image} from 'react-native';
import {Icon} from 'native-base';
import {CommonActions, useNavigation} from '@react-navigation/native';
import {
  COLORS,
  FONTFAMILY,
  FONTS,
  IMAGES,
  SCREENS,
  SIZES,
  STYLES,
} from '../../constants';
import {
  AuthHeader,
  BGView,
  ButtonRadius,
  Card,
  EditText,
  FadeInView,
  MyTouchableOpacity,
  Ripple,
  Row,
} from '../../components';

const color = {
  facebook: '#0037C1',
  google: '#FF3524',
  apple: '#171413',
};

export default function Login() {
  const navigation = useNavigation();

  const navigateToNextScreen = screenName => {
    navigation.navigate(screenName);
  };

  return (
    <BGView>
      <View style={[{flex: 1, margin: SIZES.fifteen}]}>
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
          Login
        </Text>

        <View style={{marginTop: 30}}>
          <EditText
            keyboardType="email-address"
            placeholder={'Email Address'}
            onChangeText={text => {}}
          />
        </View>
        <View style={{marginTop: SIZES.twenty}}>
          <EditText
            keyboardType="default"
            placeholder={'Password'}
            password
            onChangeText={text => {}}
          />
        </View>
        <View
          style={{
            marginVertical: SIZES.twentyFive,
            alignItems: 'center',
          }}>
          <MyTouchableOpacity
            style={{
              color: COLORS.veryLightPink,
            }}
            onPress={() => navigateToNextScreen(SCREENS.ForgotPassword)}>
            <Text
              style={[
                FONTS.mediumFont12,
                {
                  color: COLORS.brownGrey,
                },
              ]}>
              Forgot Password?
            </Text>
          </MyTouchableOpacity>
        </View>
        <ButtonRadius
          label="Login"
          onPress={() => {
            navigateToNextScreen(SCREENS.BottomBar);
          }}
        />
        <View
          style={{
            flexDirection: 'row',
            marginTop: SIZES.twenty,
            alignItems: 'center',
          }}>
          <View style={[STYLES.horLine, {flex: 1}]} />
          <Text
            style={[
              FONTS.lightFont10,
              {
                color: COLORS.brownGrey,
                flex: 1,
                textAlign: 'center',
              },
            ]}>
            Or Continue with
          </Text>
          <View style={[STYLES.horLine, {flex: 1}]} />
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: SIZES.twentyFive * 1.5,
          }}>
          {Platform.OS === 'ios' ? (
            <Ripple
              style={{
                paddingHorizontal: SIZES.fifteen,
                borderRadius: SIZES.fifty * 2,
                height: 60,
                backgroundColor: '#262a34',
              }}>
              <Row
                onPress={() => {}}
                style={{
                  height: '100%',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Image
                  source={IMAGES.LogoApple}
                  style={{
                    height: SIZES.twentyFive,
                    width: SIZES.twentyFive,
                    tintColor: COLORS.white,
                  }}
                  resizeMode={'contain'}
                />
                <Text
                  style={[
                    FONTS.lightFont12,
                    {
                      color: COLORS.white,
                      marginStart: 5,
                    },
                  ]}>
                  Continue With
                </Text>
              </Row>
            </Ripple>
          ) : null}

          <Ripple
            style={{
              borderRadius: 60,
              height: 60,
              width: 60,
              marginStart: 10,
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '#eb4335',
            }}>
            <Image
              source={IMAGES.LogoGoogle}
              style={{tintColor: COLORS.white, height: 25, width: 25}}
            />
          </Ripple>

          <Ripple
            style={{
              borderRadius: 60,
              height: 60,
              width: 60,
              marginStart: 10,
              backgroundColor: '#3c5a9a',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Image
              source={IMAGES.LogoFacebook}
              style={{tintColor: COLORS.white, height: 25, width: 25}}
            />
          </Ripple>
        </View>
        <View style={{marginTop: SIZES.twentyFive * 1.5, alignItems: 'center'}}>
          <MyTouchableOpacity
            style={{flexDirection: 'row'}}
            onPress={() => navigation.navigate(SCREENS.SignUp)}>
            <Text style={[FONTS.lightFont12, {color: COLORS.brownGrey}]}>
              Don't have any account?
            </Text>
            <Text
              style={[
                FONTS.boldFont14,
                {color: COLORS.primary, marginStart: 3},
              ]}>
              Sign Up
            </Text>
          </MyTouchableOpacity>
        </View>
      </View>
    </BGView>
  );
}

const styles = StyleSheet.create({
  socialButton: {
    flex: 1,
    height: 55,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
