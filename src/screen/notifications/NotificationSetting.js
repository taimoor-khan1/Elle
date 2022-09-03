import React, {useState} from 'react';
import {StyleSheet, Text, View, FlatList, Switch} from 'react-native';
import {
  STYLES,
  SIZES,
  FONTS,
  COLORS,
  width,
  FONTFAMILY,
} from './../../constants';

import {Icon} from 'native-base';
import {BGView, HeaderCenterText} from '../../components';

const data = [
  {
    id: '1',
    name: 'Lorem Ipsum',
    icon: 'mail',
    status: false,
    type: FONTFAMILY.AntDesign,
  },
  {
    id: '2',
    name: 'Adipsicing Eluit Sed',
    icon: 'phone',
    status: false,
    type: FONTFAMILY.AntDesign,
  },
  {
    id: '3',
    name: 'Consectatur Gem',
    icon: 'user',
    status: false,
    type: FONTFAMILY.Entypo,
  },
  {
    id: '4',
    name: 'Dicolora amit ',
    icon: 'history',
    type: FONTFAMILY.MaterialIcons,
    status: false,
  },
];

export default function NotificationSettings(props) {
  const [DATA, setDATA] = useState([...data]);

  const toggleSwitch = index => {
    const temp = [...DATA];
    temp[index].status = !temp[index].status;
    setDATA(temp);
  };

  const renderItem = ({item, index}) => {
    return (
      <View style={[styles.itemContainer, styles.shodow]}>
        <View style={styles.select}>
          <Icon
            name={item.icon}
            style={{color: COLORS.white}}
            type={item.type}
          />
        </View>
        <Text
          style={[
            FONTS.mediumFont14,
            {
              flex: 1,
              alignSelf: 'center',
              color: COLORS.white,
              paddingHorizontal: SIZES.twenty,
            },
          ]}>
          {item.name}
        </Text>

        <Switch
          trackColor={{false: COLORS.gray, true: COLORS.gunMetal}}
          thumbColor={item.status ? COLORS.primary : COLORS.white}
          onValueChange={() => toggleSwitch(index)}
          value={item.status}
        />
      </View>
    );
  };

  return (
    <BGView style={[STYLES.container, {padding: SIZES.twenty}]}>
      <HeaderCenterText title={'Notification Setting'} backArrow />

      <View style={{marginTop: SIZES.twenty}}>
        <FlatList
          data={data}
          renderItem={renderItem}
          key={item => item}
          contentContainerStyle={{
            paddingHorizontal: SIZES.fifteen,
            paddingTop: SIZES.twentyFive,
          }}
        />
      </View>
    </BGView>
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    paddingVertical: SIZES.ten,
    paddingHorizontal: SIZES.twenty,
    marginVertical: SIZES.fifteen,

    borderColor: COLORS.purple,
    borderRadius: SIZES.twentyFive * 2,
    backgroundColor: COLORS.charcoalGrey,

    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  select: {
    paddingVertical: SIZES.ten,
    paddingHorizontal: SIZES.ten,
    justifyContent: 'center',
    alignContent: 'center',
    borderRadius: SIZES.twenty * 2,
    backgroundColor: COLORS.gunMetal,
  },
  unSelect: {
    paddingVertical: SIZES.ten,
    paddingHorizontal: SIZES.ten,
    borderRadius: width,
    backgroundColor: COLORS.primary,
  },

  shodow: {
    shadowColor: COLORS.black,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    elevation: 9,
  },
});
