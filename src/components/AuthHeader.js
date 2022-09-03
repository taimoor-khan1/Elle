import React from 'react';
import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import {COLORS, FONTS, IMAGES, SIZES, width} from '../constants';
import {BackArrow} from '.';

export default function AuthHeader(props) {
  return (
    <ImageBackground
      source={IMAGES.HeaderBanner}
      resizeMode={'stretch'}
      style={{
        width: width,
        height: SIZES.twentyFive * 8,
        justifyContent: 'center',
        paddingLeft: SIZES.fifteen,
      }}>
      {props.showBackArrow && <BackArrow />}
      <Text style={[FONTS.boldFont18, {color: COLORS.secondary}]}>
        {props.heading}
      </Text>
      <Text style={[FONTS.mediumFont10, {color: '#94A2AA'}]}>
        {props.description}
      </Text>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({});
