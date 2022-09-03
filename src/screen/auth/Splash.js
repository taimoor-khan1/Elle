import React from 'react';
import {StyleSheet, Text, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {COLORS, FONTS, IMAGES, SCREENS, SIZES} from '../../constants';
import {BGView, MyTouchableOpacity} from '../../components';

export default function Splash() {
  const navigation = useNavigation();

  return (
    <BGView style={{padding: SIZES.fifteen}}>
      <Image
        source={IMAGES.Logo}
        resizeMode={'contain'}
        style={{
          height: SIZES.twentyFive * 6,
          width: SIZES.twentyFive * 7,
          alignSelf: 'flex-end',
          marginTop: SIZES.twentyFive,
        }}
      />
      <Text
        style={[
          FONTS.boldFont26,
          {color: COLORS.white, marginTop: SIZES.twenty},
        ]}>
        All{'\n'}Reminders{'\n'}In One{'\n'}Place
      </Text>
      <Text
        style={[
          FONTS.lightFont12,
          {color: COLORS.brownGrey, marginTop: SIZES.twenty},
        ]}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </Text>
      <MyTouchableOpacity
        style={{
          marginTop: SIZES.twentyFive,
          alignSelf: 'center',
        }}
        onPress={() => navigation.replace(SCREENS.Login)}>
        <Image
          source={IMAGES.SplashGo}
          resizeMode={'contain'}
          style={{height: SIZES.twentyFive * 4, width: SIZES.twentyFive * 4}}
        />
      </MyTouchableOpacity>
    </BGView>
  );
}

const styles = StyleSheet.create({});
