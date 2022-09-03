import React, {useEffect, useState} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import axios from 'axios';
import {COLORS, SCREENS, CONSTANTS, SIZES, FONTS} from '../../constants/index';
import utils from '../../utils';
import {CommonActions} from '@react-navigation/native';
import {BGView, ButtonRadius, EditText, BackArrow} from '../../components';

const ResetPassword = props => {
  const [password, setPassword] = useState('');
  const [showLoader, setShowLoader] = useState(false);
  const [errorVisibility, setErrorVisibility] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  // useEffect to show error modal which depends on errorMsg
  useEffect(() => {
    if (errorMsg !== '') {
      setErrorVisibility(true);
    }
  }, [errorMsg]);

  // reset password method api call
  const resetPassword = () => {
    if (password.length < 6) {
      setErrorMsg('Password should not be less than 6 digits');
      return;
    }

    const onSuccess = ({data}) => {
      setShowLoader(false);
      props.navigation.dispatch(resetAction);
    };

    const onFailure = error => {
      setShowLoader(false);
      let msg = utils.showResponseError(error);
      setErrorMsg(JSON.stringify(msg));
    };

    let postData = {
      email: props.route.params.email,
      password: password,
      password_confirmation: password,
    };

    setShowLoader(true);

    axios
      .post(
        `${CONSTANTS.API_CALLS.BASE_URL}${CONSTANTS.API_CALLS.RESET_PASSWORD}`,
        postData,
      )
      .then(onSuccess)
      .catch(onFailure);
  };

  return (
    <BGView style={{flex: 1}}>
      <View style={[styles.authTopRoundCorner, {marginTop: 30}]}>
        <BackArrow onPress={() => props.navigation.goBack()} />
        <Text
          style={[
            FONTS.boldFont20,
            {
              color: COLORS.white,
              alignSelf: 'flex-start',
              marginTop: SIZES.twenty,
            },
          ]}>
          Reset Password
        </Text>
        <Text
          style={[
            FONTS.mediumFont14,
            {fontSize: 14, color: COLORS.brownGrey, marginTop: SIZES.ten},
          ]}>
          Enter your desired password to continue
        </Text>
        <View
          style={{
            flexDirection: 'row',
            marginTop: 50,
            alignItems: 'center',
            opacity: 0.0,
          }}>
          <View style={[styles.horinzontalLine, {flex: 1}]} />
          <Text
            style={[
              FONTS.mediumFont12,
              {
                color: COLORS.veryLightPink,
                flex: 1,
                textAlign: 'center',
              },
            ]}>
            Or Email
          </Text>
          <View style={[styles.horinzontalLine, {flex: 1}]} />
        </View>
        <View style={{marginTop: 30}}>
          <EditText
            placeholder={'Password'}
            secureTextEntry
            isEditable={true}
            value={password}
            onChangeText={text => {
              setPassword(text);
            }}
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
              // resetPassword();
              props.navigation.dispatch(
                CommonActions.reset({
                  index: 0,
                  routes: [{name: SCREENS.Login}],
                }),
              );
            }}
          />
        </View>
      </View>
    </BGView>
  );
};

export default ResetPassword;

const styles = StyleSheet.create({
  authLogo: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  sectionHeading: {
    color: COLORS.white,
    fontSize: 20,
    textAlign: 'center',
  },
  authTopRoundCorner: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  horinzontalLine: {
    width: '100%',
    height: 0.5,
    backgroundColor: COLORS.veryLightPink,
  },
});
