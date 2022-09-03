import React, {useEffect, useState} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import axios from 'axios';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import {
  COLORS,
  CONSTANTS,
  FONTFAMILY,
  FONTS,
  SCREENS,
  SIZES,
} from '../../constants';
import utils from '../../utils';
// import * as AuthActions from '../../store/action/Login';
// import {useDispatch} from 'react-redux';
import {BGView, ButtonRadius, BackArrow} from '../../components';
import {CommonActions} from '@react-navigation/native';

export default function Verification(props) {
  // const dispatcher = useDispatch();
  const [code, setcode] = useState();
  const [showLoader, setShowLoader] = useState(false);
  const [errorVisibility, setErrorVisibility] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  // useEffect to show error modal which depends on errorMsg
  useEffect(() => {
    if (errorMsg !== '') {
      setErrorVisibility(true);
    }
  }, [errorMsg]);

  // verify for sign up api call
  const verifyForSignUp = async () => {
    if (utils.isEmptyOrSpaces(code)) {
      setErrorMsg('Invalid Code');
      return;
    }

    setShowLoader(true);

    // verify otp & login api redux action
    await dispatcher(
      AuthActions.VerifyOtpAndLogin(
        props.route.params.email,
        code,
        response => {
          setShowLoader(false);

          if (response.success === 1) {
            props.navigation.navigate(SCREENS.HomeScreen);
          } else {
            setErrorMsg(JSON.stringify(response.error));
          }
        },
      ),
    );
  };

  // reset password api call
  const verifyForForgotPassword = async () => {
    if (utils.isEmptyOrSpaces(code)) {
      setErrorMsg('Invalid Code');
      return;
    }

    setShowLoader(true);

    const onSuccess = ({data}) => {
      setShowLoader(false);
      props.navigation.navigate(SCREENS.ResetPassword, {
        email: data.data.email,
      });
    };

    const onFailure = error => {
      setShowLoader(false);
      let msg = utils.showResponseError(error);
      setErrorMsg(JSON.stringify(msg));
    };

    var postData = {
      email: props.route.params.email,
      otp: code,
      redirectToPassword: true,
    };

    setShowLoader(true);
    axios
      .post(
        `${CONSTANTS.API_CALLS.BASE_URL}${CONSTANTS.API_CALLS.VERIFY_OTP}`,
        postData,
      )
      .then(onSuccess)
      .catch(onFailure);
  };

  return (
    <BGView>
      <View style={[styles.authTopRoundCorner, {marginTop: SIZES.twenty}]}>
        <BackArrow onPress={() => props.navigation.goBack()} />
        <Text
          style={[
            FONTS.boldFont18,
            {
              color: COLORS.white,
              alignSelf: 'flex-start',
              marginTop: SIZES.twenty,
            },
          ]}>
          Verification
        </Text>
        <Text
          style={[
            FONTS.mediumFont12,
            {
              fontSize: SIZES.fifteen,
              color: COLORS.brownGrey,
              marginTop: SIZES.ten,
            },
          ]}>
          Enter your verification code that we sent you a{'\n'}through your
          email
        </Text>

        <View style={{marginTop: SIZES.twentyFive}}>
          <OTPInputView
            style={[
              {
                width: '100%',
                height: SIZES.fifty * 1.5,
                marginTop: SIZES.twentyFive * 1.3,
              },
            ]}
            pinCount={4}
            code={code}
            onCodeChanged={code => {
              setcode(code);
            }}
            autoFocusOnLoad
            codeInputFieldStyle={styles.otp}
            codeInputHighlightStyle={[
              styles.otp,
              // {borderColor: COLORS.primary},
            ]}
            onCodeFilled={code => {}}
            secureTextEntry
            selectionColor={COLORS.primary}
          />
        </View>
        <View
          style={{
            marginVertical: SIZES.fifty,
          }}>
          <ButtonRadius
            label="Continue"
            isBrightButton={true}
            onPress={() => {
              if (props.route.params.from === CONSTANTS.DESTINATIONS.SIGN_UP) {
                // verifyForSignUp();
                props.navigation.navigate(SCREENS.SelectCategories, {
                  email: props.route.params.email,
                });
                //
              } else {
                props.navigation.navigate(SCREENS.ResetPassword, {
                  email: props.route.params.email,
                });
              }
            }}
          />
        </View>
      </View>
    </BGView>
  );
}

const styles = StyleSheet.create({
  sectionHeading: {
    color: COLORS.black,
    fontSize: SIZES.twenty,
  },
  text: {
    color: COLORS.black,
  },
  authTopRoundCorner: {
    flex: 1,
    paddingHorizontal: SIZES.twenty,
    paddingTop: SIZES.twenty,
  },
  otp: {
    borderRadius: SIZES.ten * 1.25,
    height: SIZES.twentyFive * 2.25,
    width: SIZES.twentyFive * 2.25,
    fontSize: SIZES.twenty,
    fontFamily: FONTFAMILY.Light,
    color: COLORS.white,
  },
});
