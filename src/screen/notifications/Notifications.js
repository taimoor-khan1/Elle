import React from 'react';
import {StyleSheet, View} from 'react-native';
import {getStatusBarHeight} from 'react-native-status-bar-height';
import {BGView, HeaderCenterText, SwipingList} from '../../components';
import {SIZES} from '../../constants';

export default function Notifications() {
  return (
    <BGView>
      <View
        style={{
          flex: 1,
          margin: SIZES.fifteen,
        }}>
        <View
          style={{
            height: Platform.OS === 'android' ? getStatusBarHeight() + 15 : 0,
          }}
        />
        <HeaderCenterText title={'Notifications'} backArrow />
        <View style={{flex: 1, marginTop: SIZES.twenty}}>
          <SwipingList />
        </View>
      </View>
    </BGView>
  );
}

const styles = StyleSheet.create({});
