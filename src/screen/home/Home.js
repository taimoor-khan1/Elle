import React, {useEffect, useState} from 'react';
import {Icon} from 'native-base';
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Platform,
  ImageBackground,
} from 'react-native';
import moment from 'moment';
import {useNavigation} from '@react-navigation/native';
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
  width,
} from '../../constants';
import {getStatusBarHeight} from 'react-native-status-bar-height';

export default function Home() {
  const [showEmptyTasks, setShowEmptyTasks] = useState(true);
  const navigation = useNavigation();
  const images = [IMAGES.Homebox, IMAGES.Homebox, IMAGES.Homebox];

  useEffect(() => {
    setTimeout(() => {
      setShowEmptyTasks(false);
    }, 2500);
  }, []);

  const renderTaskItem = ({item}) => (
    <Ripple
      style={{borderRadius: 0}}
      onPress={() => {
        navigation.navigate(SCREENS.Todaystask);
        // console.log(navigation);
      }}>
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

  const NoTasksView = () => (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <MyTouchableOpacity style={{marginTop: -SIZES.twentyFive * 3}}>
        <Image
          source={IMAGES.AddTask}
          style={{
            height: SIZES.twentyFiveWidth * 4,
            width: width / 1.5,
          }}
          resizeMode={'contain'}
        />
      </MyTouchableOpacity>
      <Text
        style={[
          FONTS.boldFont16,
          {color: COLORS.white, marginTop: SIZES.twenty},
        ]}>
        No Tasks here yet
      </Text>
      <Text
        style={[
          FONTS.lightFont10,
          {color: COLORS.brownGrey, marginTop: SIZES.ten},
        ]}>
        Start adding by tapping the '+' button
      </Text>
    </View>
  );

  const TasksView = () => (
    <ScrollView
      showsVerticalScrollIndicator={false}
      bounces={false}
      overScrollMode={'never'}
      contentContainerStyle={{
        padding: SIZES.ten,
        paddingBottom: height * 0.15,
      }}>
      <Text
        style={[
          FONTS.boldFont16,
          {color: COLORS.white, marginTop: SIZES.twenty},
        ]}>
        My Task
      </Text>
      <Text style={[FONTS.lightFont10, {color: COLORS.brownGrey}]}>
        10 task today
      </Text>

      <View
        style={{
          width: '100%',
          height: width * 0.5,
          marginVertical: SIZES.twenty,
        }}>
        <Image
          source={IMAGES.Homebox}
          resizeMode={'contain'}
          style={{
            width: '100%',
            height: width * 0.5,
          }}
        />
        <View
          style={{
            position: 'absolute',
            left: width * 0.1,
            top: width * 0.02,
          }}>
          <Text style={[FONTS.boldFont24, {color: COLORS.white}]}>
            {moment().format('llll').split(',')[1].trim().split(' ').join(', ')}
          </Text>
          <Text
            style={[
              FONTS.mediumFont10,
              {color: COLORS.white, marginTop: SIZES.ten},
            ]}>
            {moment().format('LLLL').split(',')[0]}
          </Text>
        </View>
      </View>

      <View
        style={{
          width: width * 0.38,
          position: 'absolute',
          top: width * 0.37,
          right: width * 0.08,
        }}>
        <Row style={{alignItems: 'flex-start'}}>
          <View
            style={{
              height: SIZES.ten,
              width: SIZES.ten,
              backgroundColor: COLORS.darkblue,
              marginTop: SIZES.five,
              borderRadius: SIZES.fifty,
            }}
          />
          <Text
            numberOfLines={2}
            ellipsizeMode="tail"
            style={[
              FONTS.mediumFont12,
              {color: COLORS.white, marginLeft: SIZES.fifteen},
            ]}>
            You have rent bill due today!
          </Text>
        </Row>

        <Row style={{alignItems: 'flex-start', marginTop: SIZES.twenty}}>
          <View
            style={{
              height: SIZES.ten,
              width: SIZES.ten,
              backgroundColor: COLORS.red,
              marginTop: SIZES.five,
              borderRadius: SIZES.fifty,
            }}
          />
          <Text
            numberOfLines={2}
            ellipsizeMode="tail"
            style={[
              FONTS.mediumFont12,
              {color: COLORS.white, marginLeft: SIZES.fifteen},
            ]}>
            It's Anna's birthday today. Give her gift.
          </Text>
        </Row>
      </View>

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
    </ScrollView>
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

        {showEmptyTasks ? <NoTasksView /> : <TasksView />}
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
  slider: {
    position: 'absolute',
    alignSelf: 'center',
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
