import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {getStatusBarHeight} from 'react-native-status-bar-height';
import {FadeInView} from '.';
import {COLORS, STYLES} from '../constants';

export default function BGView(props) {
  return (
    <FadeInView style={STYLES.__container}>
      <LinearGradient
        start={{x: 0.2, y: 1}}
        end={{x: 1.25, y: 1}}
        colors={
          props.colors || [
            COLORS.charcoalGrey,
            COLORS.darkGrey,
            COLORS.almostBlack,
          ]
        }
        style={[{flex: 1}, props.style]}>
        <View style={{height: getStatusBarHeight()}} />
        {props.children}
      </LinearGradient>
    </FadeInView>
  );
}

const styles = StyleSheet.create({});
