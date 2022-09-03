import React from 'react';
import {COLORS, FONTS} from '../constants';
import {Text, View} from 'react-native';
import {TabBar, TabBarItem} from 'react-native-tab-view';

export default function _TabBar(props) {
  const color = {
    primary: COLORS.primary,
    white: COLORS.white,
    grey: COLORS.grey,
    transparent: COLORS.transparent,
  };
  return (
    <TabBar
      {...props}
      scrollEnabled={false}
      pressOpacity={1}
      indicatorStyle={{
        backgroundColor: color.primary,
        width: 100,
        left: '13%',
      }}
      style={{backgroundColor: color.transparent}}
      pressColor={color.transparent}
      renderTabBarItem={tabProps => <TabBarItem {...tabProps} />}
      activeColor={color.white}
      inactiveColor={color.white}
      labelStyle={FONTS.mediumFont14}
      renderLabel={({route, focused, _color}) => (
        <View style={{alignItems: 'center'}}>
          <Text
            style={[
              // focused ?
              FONTS.boldFont12,
              //  : FONTS.mediumFont10,
              {
                color: focused ? color.white : color.white,
              },
            ]}>
            {route.title}
          </Text>
        </View>
      )}
    />
  );
}
