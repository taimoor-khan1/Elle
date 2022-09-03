import React from 'react';
import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import {COLORS, FONTS, IMAGES, SIZES, width} from '../constants';
import {BackArrow, Row} from '.';

export default function HeaderCenteredTextWithBG(props) {
  return (
    <ImageBackground
      source={IMAGES.HeaderBanner}
      resizeMode={'stretch'}
      style={{
        width: width,
        height: SIZES.twentyFive * 5,
        justifyContent: 'center',
      }}>
      <Row style={{alignItems: 'center'}}>
        <Text
          style={[
            FONTS.boldFont18,
            {
              color: COLORS.secondary,
              flex: 1,
              textAlign: 'center',
            },
          ]}>
          {props.heading}
        </Text>
        <BackArrow style={{position: 'absolute', left: SIZES.fifteen}} />
      </Row>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({});
