import React, {useEffect} from 'react';
import {Icon} from 'native-base';
import {useNavigation} from '@react-navigation/native';
import {
  FlatList,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
} from 'react-native';
import {Calendar as RnCalendar} from 'react-native-calendars';
import {
  BGView,
  MyTouchableOpacity,
  Ripple,
  Row,
  UserHeader,
} from '../../components';
import {
  COLORS,
  FONTFAMILY,
  FONTS,
  height,
  IMAGES,
  SCREENS,
  SIZES,
} from '../../constants';
import {getStatusBarHeight} from 'react-native-status-bar-height';

export default function Calendar() {
  const navigation = useNavigation();
  // console.log('getUTCMonth ', new Date().getMonth());

  const renderCalendarHeader = date => {
    let myDate = date.toDateString().substring(4, 10).split(' ').join(', ');
    return (
      <View>
        <Text style={[FONTS.mediumFont18, {color: COLORS.white}]}>
          {myDate}
        </Text>
      </View>
    );
  };

  const renderTaskItem = ({item}) => (
    <Ripple
      style={{borderRadius: 0}}
      onPress={() => navigation.navigate(SCREENS.Todaystask)}>
      <Row style={styles.item}>
        <Image source={item.image} style={styles.itemImage} />
        <View
          style={{
            flex: 1,
            marginLeft: SIZES.fifteen,
          }}>
          <Text style={[FONTS.mediumFont14, {color: COLORS.white}]}>
            {item.name}
          </Text>
          <Text
            style={[
              FONTS.lightFont10,
              {color: COLORS.brownGrey, marginTop: SIZES.ten},
            ]}>
            {item.description}
          </Text>
        </View>
        <MyTouchableOpacity>
          <Icon
            name={'more-v-a'}
            type={FONTFAMILY.Fontisto}
            style={{fontSize: SIZES.twentyFive, color: COLORS.brownGrey}}
          />
        </MyTouchableOpacity>
      </Row>
    </Ripple>
  );

  // task View
  const TasksView = () => (
    <View style={{flex: 1}}>
      <Row style={{alignItems: 'center', justifyContent: 'space-between'}}>
        <View>
          <Text
            style={[
              FONTS.boldFont16,
              {color: COLORS.white, marginTop: SIZES.twenty},
            ]}>
            Ongoing Reminders
          </Text>
          <Text style={[FONTS.lightFont10, {color: COLORS.brownGrey}]}>
            10 task today
          </Text>
        </View>
        <MyTouchableOpacity>
          <Text style={[FONTS.mediumFont12, {color: COLORS.brownGrey}]}>
            See All
          </Text>
        </MyTouchableOpacity>
      </Row>

      <View style={{marginTop: SIZES.twenty}}>
        <FlatList
          data={DATA}
          showsVerticalScrollIndicator={false}
          renderItem={renderTaskItem}
          keyExtractor={item => item.id}
        />
      </View>
    </View>
  );

  const CalendarView = () => (
    <View style={{marginVertical: SIZES.fifteen}}>
      <Text style={[FONTS.mediumFont16, {color: COLORS.white}]}>My Task</Text>
      <Text style={[FONTS.mediumFont10, {color: COLORS.brownGrey}]}>
        10 task today
      </Text>
      <View style={{marginTop: SIZES.ten}}>
        <RnCalendar
          markingType={'multi-dot'}
          ar
          markedDates={markedDates}
          renderHeader={renderCalendarHeader}
          hideExtraDays
          shouldRasterizeIOS
          theme={{
            backgroundColor: COLORS.transparent,
            calendarBackground: COLORS.transparent,
            dayTextColor: COLORS.white,
            textDisabledColor: '#d9e1e8',
            dotColor: COLORS.primary,
            selectedDotColor: COLORS.primary,
            arrowColor: COLORS.brownGrey,
            disabledArrowColor: '#d9e1e8',
            textDayFontFamily: FONTFAMILY.Medium,
            textMonthFontFamily: FONTFAMILY.Medium,
            dotStyle: {
              fontSize: SIZES.twentyFive,
              margin: 1,
              height: SIZES.five * 1.35,
              width: SIZES.five * 1.35,
              borderRadius: SIZES.five * 1.35,
            },
            monthTextColor: COLORS.white,
            textDayHeaderFontFamily: FONTFAMILY.Bold,
            textDayFontSize: SIZES.fifteen,
            textMonthFontSize: SIZES.twentyFive,
            textDayHeaderFontSize: SIZES.fifteen,
            headerText: [FONTS.mediumFont14, {color: COLORS.white}],
            selectedDayBackgroundColor: COLORS.primary,
            arrowStyle: {
              height: SIZES.twentyFive * 1.75,
              width: SIZES.twentyFive * 1.75,
              borderRadius: SIZES.twentyFive * 1.75,
              borderWidth: 1,
              borderColor: COLORS.white,
              alignItems: 'center',
              justifyContent: 'center',
            },
            textDayStyle: {
              alignItems: 'center',
              alignItems: 'center',
              justifyContent: 'center',
            },
          }}
        />
      </View>
    </View>
  );

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
        <UserHeader onPress={() => navigation.navigate(SCREENS.Profile)} />
        <View style={{height: SIZES.twenty}} />
        <ScrollView
          showsVerticalScrollIndicator={false}
          bounces={false}
          overScrollMode={'never'}
          contentContainerStyle={{
            paddingBottom: height * 0.15,
          }}>
          <CalendarView />
          <TasksView />
        </ScrollView>
      </View>
    </BGView>
  );
}

const styles = StyleSheet.create({
  item: {
    marginVertical: SIZES.ten,
    alignItems: 'center',
  },
  itemImage: {
    height: SIZES.twentyFiveWidth * 2.3,
    width: SIZES.twentyFiveWidth * 2.3,
    borderRadius: SIZES.ten,
  },
});

const DATA = [
  {
    id: '0',
    name: 'Household',
    image: IMAGES.Household,
    description: 'Collect 10 packets of wedges from the grocery store',
  },
  {
    id: '1',
    name: 'Finance',
    image: IMAGES.Finance,
    description: 'Collect 10 packets of wedges from the grocery store',
  },
  {
    id: '2',
    name: 'Flights',
    image: IMAGES.Flights,
    description: 'Collect 10 packets of wedges from the grocery store',
  },
];

const markedDates = {
  [`${
    new Date().toLocaleDateString().split('/')[2].length === 2
      ? '20' + new Date().toLocaleDateString().split('/')[2]
      : new Date().toLocaleDateString().split('/')[2]
  }-${
    new Date().toLocaleDateString().split('/')[0].length === 2
      ? new Date().toLocaleDateString().split('/')[0]
      : '0' + new Date().toLocaleDateString().split('/')[0]
  }-${new Date().toLocaleDateString().split('/')[1]}`]: {
    color: COLORS.primary,
    selected: true,
  },
  '2022-04-15': {
    customContainerStyle: {backgroundColor: COLORS.transparent},
    dots: [
      {key: '1', color: COLORS.seaGreen},
      {key: '2', color: COLORS.orange},
      {key: '3', color: COLORS.gold},
    ],
  },
  [`2022-${
    new Date().getMonth().toString().length < 2
      ? '0' + new Date().getMonth()
      : new Date().getMonth()
  }-16`]: {
    marked: true,
    dotColor: COLORS.primary,
    customContainerStyle: {backgroundColor: COLORS.transparent},
  },
  [`2022-${
    new Date().getMonth().toString().length < 2
      ? '0' + new Date().getMonth()
      : new Date().getMonth()
  }-21`]: {
    textColor: 'white',
    customContainerStyle: {backgroundColor: COLORS.transparent},
  },
  [`2022-${
    new Date().getMonth().toString().length < 2
      ? '0' + new Date().getMonth()
      : new Date().getMonth()
  }-22`]: {
    textColor: 'white',
    customContainerStyle: {backgroundColor: COLORS.transparent},
  },
  [`2022-${
    new Date().getMonth().toString().length < 2
      ? '0' + new Date().getMonth()
      : new Date().getMonth()
  }-23`]: {
    dots: [
      {key: '1', color: COLORS.seaGreen},
      {key: '3', color: COLORS.gold},
    ],
  },
  [`2022-${
    new Date().getMonth().toString().length < 2
      ? '0' + new Date().getMonth()
      : new Date().getMonth()
  }-24`]: {
    customContainerStyle: {backgroundColor: COLORS.transparent},
    dots: [
      {key: '2', color: COLORS.red},
      {key: '3', color: COLORS.gold},
    ],
  },
  [`2022-${
    new Date().getMonth().toString().length < 2
      ? '0' + new Date().getMonth()
      : new Date().getMonth()
  }-25`]: {
    dots: [
      {key: '2', color: COLORS.orange},
      {key: '3', color: COLORS.gold},
      {key: '4', color: COLORS.red},
      {key: '5', color: COLORS.seaGreen},
      {key: '6', color: COLORS.neonRed},
    ],
  },
};
