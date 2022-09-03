import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {FONTS, IMAGES, SIZES} from '../../constants';
import {BGView} from '../../components';

export default function NoInternet(props) {
  return (
    <BGView>
      <View style={styles.noInternetView}>
        <Image source={IMAGES.noSignal} style={styles.imgStyle} />
        <Text style={FONTS.boldFont20}>No Internet</Text>
        <Text style={FONTS.boldFont20}>Connection Available</Text>
        <Text style={[FONTS.mediumFont14, styles.textStyle]}>
          Your device is not connected to internet. please make sure your
          connection is working.
        </Text>
      </View>
    </BGView>
  );
}

const styles = StyleSheet.create({
  noInternetView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: SIZES.twentyFive,
  },
});
