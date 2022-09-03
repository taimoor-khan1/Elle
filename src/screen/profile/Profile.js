import {useHeaderHeight} from '@react-navigation/stack';
import {Icon} from 'native-base';
import React from 'react';
import {
  FlatList,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
  Image,
} from 'react-native';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';

import {getStatusBarHeight} from 'react-native-status-bar-height';
import {NavigationActions} from 'react-navigation';
import {
  BGView,
  ButtonRadius,
  Card,
  CircularImage,
  EditText,
  HeaderCenterText,
  MyTouchableOpacity,
  Ripple,
  Row,
  UserHeader,
  _TabBar,
} from '../../components';
import {
  COLORS,
  FONTFAMILY,
  FONTS,
  IMAGES,
  SCREENS,
  SIZES,
} from '../../constants';

export default function Profile(props) {
  const renderScene = SceneMap({
    first: PersonalInfo,
    second: () => <TaskView {...props} />,
  });

  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);

  const [routes] = React.useState([
    {key: 'first', title: 'Personal Info'},
    {key: 'second', title: 'Task'},
  ]);

  return (
    <BGView>
      <View
        style={{
          flex: 0,
          margin: SIZES.fifteen,
          marginBottom: 0,
        }}>
        <View
          style={{
            height: Platform.OS === 'android' ? getStatusBarHeight() + 15 : 0,
          }}
        />
        <HeaderCenterText
          title={'Profile'}
          backArrow
          rightIcon={() => (
            <MyTouchableOpacity
              onPress={() => props.navigation.navigate(SCREENS.EditProfile)}
              style={[{position: 'absolute', end: 0}]}>
              <Icon
                type={FONTFAMILY.MaterialCommunityIcons}
                name={'square-edit-outline'}
                style={{fontSize: SIZES.twentyFive, color: COLORS.white}}
              />
            </MyTouchableOpacity>
          )}
        />
      </View>
      <KeyboardAvoidingView
        {...(Platform.OS === 'ios' && {behavior: 'padding'})}
        keyboardVerticalOffset={useHeaderHeight()}
        style={{flex: 1}}>
        <Card
          style={{
            flex: 1,
            backgroundColor: COLORS.darkGrey,
            padding: SIZES.fifteen,
            borderTopRightRadius: 20,
            borderTopLeftRadius: 20,
            marginTop: SIZES.twentyFive * 1.5,
          }}>
          <UserHeader
            imageStyle={{
              height: SIZES.twenty * 4.5,
              width: SIZES.twenty * 4.5,
              borderRadius: SIZES.twenty * 4.5,
              borderWidth: 1.5,
              borderColor: COLORS.primary,
            }}
          />

          <View style={{marginVertical: SIZES.twentyFive * 1.5}}>
            <Row style={{alignItems: 'center', justifyContent: 'space-around'}}>
              <View>
                <Text style={[FONTS.mediumFont16, {color: COLORS.white}]}>
                  16
                </Text>
                <Text style={[FONTS.mediumFont10, {color: COLORS.brownGrey}]}>
                  Tasks Completed
                </Text>
              </View>
              <View>
                <Text style={[FONTS.mediumFont16, {color: COLORS.white}]}>
                  06
                </Text>
                <Text style={[FONTS.mediumFont10, {color: COLORS.brownGrey}]}>
                  Incompleted
                </Text>
              </View>
            </Row>
          </View>
          <TabView
            renderTabBar={_TabBar}
            navigationState={{index, routes}}
            renderScene={renderScene}
            onIndexChange={setIndex}
            initialLayout={{width: layout.width}}
          />
        </Card>
      </KeyboardAvoidingView>
    </BGView>
  );
}

const PersonalInfo = () => {
  const DetailView = ({heading, value}) => {
    return (
      <Row
        style={{
          alignItems: 'center',
          justifyContent: 'space-between',
          marginVertical: SIZES.twentyFive,
        }}>
        <Text style={[FONTS.mediumFont12, {color: COLORS.brownGrey}]}>
          {heading}
        </Text>
        <Text style={[FONTS.mediumFont12, {color: COLORS.white}]}>{value}</Text>
      </Row>
    );
  };

  return (
    <View style={{paddingTop: SIZES.twentyFive * 1.5}}>
      <DetailView heading={'Full Name'} value={'Rakib Adams'} />
      <DetailView heading={'Email Address'} value={'Rakib@elle.com'} />
      <DetailView heading={'Phone No.'} value={'+1 (923) 2110 567 190'} />
    </View>
  );
};

const TaskView = props => {
  const renderTaskItem = ({item}) => (
    <Ripple
      style={{borderRadius: 0}}
      onPress={() => {
        props.navigation.navigate(SCREENS.Todaystask);
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
  return (
    <View style={{marginTop: SIZES.twenty}}>
      <FlatList
        data={DATA}
        showsVerticalScrollIndicator={false}
        renderItem={renderTaskItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

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
