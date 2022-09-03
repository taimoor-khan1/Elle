import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {BGView, MyTouchableOpacity, Row, UserHeader} from '../../components';
import HeaderOne from '../../components/HeaderCenterText';
import {
  COLORS,
  FONTFAMILY,
  FONTS,
  SCREENS,
  SIZES,
  STYLES,
} from '../../constants';
import {Icon} from 'native-base';

export default function Settings(props) {
  const DATA = [
    {
      Name: 'Account',
      screen: SCREENS.Profile,
      Icon: 'user',
      type: FONTFAMILY.AntDesign,
    },

    {
      Name: 'Notifications',
      screen: SCREENS.NotificationSetting,
      Icon: 'ios-notifications-outline',
    },
    {
      Name: 'Support',
      screen: SCREENS.Support,
      Icon: 'questioncircleo',
      type: FONTFAMILY.AntDesign,
    },
    {
      Name: 'About App',
      screen: SCREENS.AboutApp,
      Icon: 'information-circle-outline',
    },
  ];

  const navigateToNextScreen = screenName => {
    props.navigation.navigate(screenName);
  };

  const renderdataItem = ({item, index}) => {
    return (
      <MyTouchableOpacity
        activeOpacity={1}
        style={[
          {
            marginTop: index === 0 ? SIZES.ten : 0,
            backgroundColor: COLORS.transparent,
            paddingVertical: SIZES.fifteen * 1.8,
            borderRadius: SIZES.ten,
          },
        ]}
        onPress={() => {
          navigateToNextScreen(item.screen);
        }}>
        <Row style={{alignItems: 'center'}}>
          <Icon
            name={item.Icon}
            type={item?.type}
            style={{
              color: 'white',
              fontSize: SIZES.twenty,
              paddingHorizontal: SIZES.ten,
              fontSize: SIZES.h18 * 1.5,
            }}
          />
          <Text style={[FONTS.mediumFont14, {color: COLORS.white}]}>
            {item.Name}
          </Text>
        </Row>
      </MyTouchableOpacity>
    );
  };

  return (
    <BGView>
      <View
        style={{
          flex: 1,
          margin: SIZES.fifteen,
          marginTop: SIZES.twentyFive * 1.5,
        }}>
        <HeaderOne title={'Settings'} backArrow />
        <View style={{marginTop: SIZES.twentyFive}}>
          <UserHeader
            imageStyle={{
              height: SIZES.twentyFive * 3.5,
              width: SIZES.twentyFive * 3.5,
              borderRadius: SIZES.twentyFive * 3.5,
              borderWidth: 1.5,
              borderColor: COLORS.primary,
            }}
            nameColor={COLORS.purplishRed}
            nameSize={SIZES.body18}
            isSettingsScreen
          />
          <View style={[STYLES.horLine, {marginVertical: SIZES.twentyFive}]} />

          <View style={{marginTop: SIZES.ten}}>
            <FlatList
              data={DATA}
              renderItem={renderdataItem}
              keyExtractor={item => item.id}
            />
          </View>
        </View>
      </View>
    </BGView>
  );
}

const styles = StyleSheet.create({});
