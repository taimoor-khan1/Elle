import React from 'react';
import {RefreshControl, Alert} from 'react-native';
import {SCREENS} from '../constants';

class utils {
  confirmAlert(title, msg, callback) {
    Alert.alert(
      title,
      msg,
      [
        {text: 'NO', onPress: () => callback('error')},
        {text: 'YES', onPress: () => callback('success')},
      ],
      {cancelable: false},
    );
  }

  isEmpty(obj) {
    for (var key in obj) {
      if (obj.hasOwnProperty(key)) return false;
    }
    return true;
  }

  validateEmail(str) {
    var pattern =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    return pattern.test(str);
  }

  isEmptyOrSpaces(str) {
    return str === null || str.match(/^ *$/) !== null;
  }

  _refreshControl(refhresList, isRef = false) {
    return (
      <RefreshControl
        refreshing={isRef}
        onRefresh={refhresList}
        title={'Pull to Refresh'}
        tintColor={'blue'}
        colors={['white']}
        progressBackgroundColor={'blue'}
      />
    );
  }

  serializeObj(obj) {
    var str = [];
    for (var p in obj)
      if (obj[p] != '') {
        str.push(encodeURIComponent(p) + '=' + encodeURIComponent(obj[p]));
      }
    return str.join('&');
  }

  showResponseError(error, navigation) {
    console.log(error);
    console.log(error.response);
    let errorCode = JSON.stringify(error.response.status);
    console.log(errorCode);
    if (errorCode === '400') {
      let errorData = error.response.data;
      navigation.navigate(SCREENS.ErrorModal, {
        msg: errorData.message,
      });
    } else if (errorCode === '405') {
      navigation.navigate(SCREENS.ErrorModal, {
        msg: 'API method not allowed!',
      });
    } else {
      let errorResData = JSON.parse(error.response.request._response).message;
      for (const [, value] of Object.entries(errorResData)) {
        navigation.navigate(SCREENS.ErrorModal, {
          msg: value[0],
        });
        break;
      }
    }
  }
}

export default new utils();
