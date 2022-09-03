import {CommonActions, useNavigation} from '@react-navigation/native';

import {Icon} from 'native-base';
import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {MyTouchableOpacity, Row, UserHeader} from '../../components';
import {COLORS, FONTS, SCREENS, SIZES, width} from '../../constants';

export default function More(props) {
  const navigation = useNavigation();
  const [nearBy, setnearBy] = React.useState({
    textColor: COLORS.white,
    bgColor: COLORS.transparent,
  });
  const [Chat, setChat] = React.useState({
    textColor: COLORS.white,
    bgColor: COLORS.transparent,
  });
  const [orderHistory, setorderHistory] = React.useState({
    textColor: COLORS.white,
    bgColor: COLORS.transparent,
  });
  const [Balance, setBalance] = React.useState({
    textColor: COLORS.white,
    bgColor: COLORS.transparent,
  });
  const [Help, setHelp] = React.useState({
    textColor: COLORS.white,
    bgColor: COLORS.transparent,
  });
  const [TermsCondition, setTermsCondition] = React.useState({
    textColor: COLORS.white,
    bgColor: COLORS.transparent,
  });
  const [Settings, setSettings] = React.useState({
    textColor: COLORS.white,
    bgColor: COLORS.transparent,
  });

  const [isLogoutModalVisible, setisLogoutModalVisible] = React.useState(false);

  const navigateToNextScreen = screenName => {
    props.navigation.navigate(screenName);
  };
  const [screenName, setScreenName] = React.useState('');
  const DATA = [
    {
      Name: 'Notifications',
      screen: SCREENS.Notifications,
      Icon: 'ios-notifications-outline',
    },
    {
      Name: 'Calendar',
      screen: SCREENS.Calendar,
      Icon: 'calendar-sharp',
    },
    {
      Name: 'Task View',
      screen: SCREENS.TaskDetails,
      Icon: 'list',
    },
    {
      Name: 'Terms & Condition',
      screen: SCREENS.TermsCondition,
      Icon: 'md-bookmark-outline',
    },
    {
      Name: 'Setting',
      screen: SCREENS.Settings,
      Icon: 'settings-outline',
    },
  ];

  const renderdataItem = ({item, index}) => {
    return (
      <MyTouchableOpacity
        activeOpacity={1}
        style={[
          {
            marginTop: index === 0 ? SIZES.ten : 0,
            backgroundColor:
              screenName === item.screen ? COLORS.primary : COLORS.transparent,
            paddingVertical: SIZES.fifteen * 1.8,
            borderRadius: SIZES.ten,
          },
        ]}
        onPress={() => {
          // console.log(item.Name);

          navigateToNextScreen(item.screen);
          setTimeout(() => {
            props.onPress();
          }, 350);
        }}>
        <Row style={{alignItems: 'center'}}>
          <Icon
            name={item.Icon}
            style={{
              color: 'white',
              fontSize: SIZES.twenty,
              paddingHorizontal: SIZES.ten,
              fontSize: SIZES.h16,
            }}
          />

          <Text style={[FONTS.mediumFont12, {color: nearBy.textColor}]}>
            {item.Name}
          </Text>
        </Row>
      </MyTouchableOpacity>
    );
  };

  const LogoutButton = () => (
    <MyTouchableOpacity
      activeOpacity={1}
      style={[
        {
          marginTop: SIZES.ten,
          backgroundColor: COLORS.transparent,
          paddingVertical: SIZES.fifteen * 1.8,
          borderRadius: SIZES.ten,
        },
      ]}
      onPress={() => {
        props.navigation.dispatch(
          CommonActions.reset({
            index: 0,
            routes: [{name: SCREENS.Login}],
          }),
        );
      }}>
      <Row style={{alignItems: 'center'}}>
        <Icon
          name={'power'}
          style={{
            color: 'white',
            fontSize: SIZES.twenty,
            paddingHorizontal: SIZES.ten,
            fontSize: SIZES.h16,
          }}
        />
        <Text style={[FONTS.mediumFont12, {color: nearBy.textColor}]}>
          Logout
        </Text>
      </Row>
    </MyTouchableOpacity>
  );

  return (
    // <BGView>
    <View
      style={{
        flex: 1,
        margin: SIZES.fifteen,
        marginTop: SIZES.fifty * 1.8,
      }}>
      <MyTouchableOpacity
        style={{
          bottom: 0,
          left: SIZES.fifteen,
          position: 'absolute',

          zIndex: 10000000,
        }}
        onPress={() => {
          props.onClosePress();
        }}>
        <Icon
          type={'MaterialCommunityIcons'}
          name="menu-open"
          style={{color: COLORS.white, fontSize: SIZES.twentyFive * 1.34}}
        />
      </MyTouchableOpacity>
      {/* props.onClosePress */}
      <UserHeader
        imageStyle={{
          height: SIZES.fifteen * 3.5,
          width: SIZES.fifteen * 3.5,
          borderRadius: SIZES.fifteen * 3.5,
          borderWidth: 1.5,
          borderColor: COLORS.primary,
        }}
        nameColor={COLORS.purplishRed}
        nameSize={SIZES.body18}
        onPress={() => navigation.navigate(SCREENS.Profile)}
      />

      <View style={{marginTop: SIZES.ten}}>
        <FlatList
          data={DATA}
          renderItem={renderdataItem}
          keyExtractor={item => item.id}
        />
      </View>
      <LogoutButton />
    </View>
    // </BGView>
  );
}

const styles = StyleSheet.create({});
