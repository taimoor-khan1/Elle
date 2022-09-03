import React, {useEffect, useState} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import axios from 'axios';
import {
  COLORS,
  SCREENS,
  CONSTANTS,
  SIZES,
  FONTS,
  FONTFAMILY,
} from '../../constants/index';
import utils from '../../utils';
import {BackArrow, BGView, ButtonRadius, EditText} from '../../components';

const ForgetPassword = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [showLoader, setShowLoader] = useState(false);
  const [errorVisibility, setErrorVisibility] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  // useEffect to show error modal which depends on errorMsg
  useEffect(() => {
    if (errorMsg !== '') {
      setErrorVisibility(true);
    }
  }, [errorMsg]);

  // forget password send otp method api call
  const forgotPassword = () => {
    if (!utils.validateEmail(email)) {
      setErrorMsg('Invalid Email');
      return;
    }

    const onSuccess = ({data}) => {
      // console.log('forgotPassword ============= success ========= ', data.data);

      setShowLoader(false);
      navigation.navigate(SCREENS.Verification, {
        email: email,
        from: CONSTANTS.DESTINATIONS.FORGOT_PASSWORD,
      });
    };

    const onFailure = error => {
      setShowLoader(false);
      let msg = utils.showResponseError(error);
      setErrorMsg(JSON.stringify(msg));
    };

    var postData = null;
    postData = {
      email: email,
    };

    setShowLoader(true);
    axios
      .get(
        `${CONSTANTS.API_CALLS.BASE_URL}${CONSTANTS.API_CALLS.FORGOT_PASSWORD}`,
        {params: postData},
      )
      .then(onSuccess)
      .catch(onFailure);
  };

  return (
    <BGView>
      <View
        style={[
          styles.authTopRoundCorner,
          {marginTop: SIZES.twentyFive * 1.3},
        ]}>
        <BackArrow onPress={() => navigation.goBack()} />
        <Text
          style={[
            styles.sectionHeading,
            {
              color: COLORS.white,
              alignSelf: 'flex-start',
              marginTop: SIZES.twenty,
            },
          ]}>
          Forgot Password?
        </Text>
        <Text
          style={[FONTS.mediumFont12, {fontSize: 14, color: COLORS.brownGrey}]}>
          Enter your email & we will send you a {'\n'}verification code
        </Text>
        <View
          style={{
            flexDirection: 'row',
            marginTop: SIZES.fifty,
            alignItems: 'center',
            opacity: 0.0,
          }}>
          <View style={[styles.horinzontalLine, {flex: 1}]} />
          <Text
            style={{
              color: COLORS.veryLightPink,
              flex: 1,
              textAlign: 'center',
            }}>
            Or Email
          </Text>
          <View style={[styles.horinzontalLine, {flex: 1}]} />
        </View>
        <View style={{marginTop: SIZES.twentyFive}}>
          <EditText
            keyboardType="email-address"
            placeholder={'Email Address'}
            secureTextEntry={false}
            isEditable={true}
            value={email}
            onChangeText={text => {
              setEmail(text);
            }}
          />
        </View>
        <View
          style={{
            marginVertical: 50,
          }}>
          <ButtonRadius
            label="Continue"
            isBrightButton={true}
            onPress={() => {
              navigation.navigate(SCREENS.Verification, {
                email: email,
                from: CONSTANTS.DESTINATIONS.FORGOT_PASSWORD,
              });
              // forgotPassword();
            }}
          />
        </View>
      </View>
    </BGView>
  );
};

export default ForgetPassword;

const styles = StyleSheet.create({
  authLogo: {
    width: SIZES.fifty * 2,
    height: SIZES.fifty * 2,
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  sectionHeading: {
    color: COLORS.white,
    fontSize: SIZES.twenty,
    textAlign: 'center',
    fontFamily: FONTFAMILY.Medium,
  },
  authTopRoundCorner: {
    flex: 1,
    paddingHorizontal: SIZES.twenty,
    paddingTop: SIZES.twenty,
  },
  horinzontalLine: {
    width: '100%',
    height: 0.5,
    backgroundColor: COLORS.veryLightPink,
  },
});
