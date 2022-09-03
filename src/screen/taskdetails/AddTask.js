import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  FlatList,
} from 'react-native';
import React, {useState, createRef} from 'react';
import {BGView, MyTouchableOpacity, Ripple, Row} from '../../components';
import {COLORS, FONTS, SCREENS, SIZES, width} from '../../constants';

export default function AddTask(props) {
  const {navigation} = props;
  const [name, setName] = useState('');

  const formatData = (data, numColumns) => {
    const numberOfFullRows = Math.floor(data.length / numColumns);

    let numberOfElementsLastRow = data.length - numberOfFullRows * numColumns;
    while (
      numberOfElementsLastRow !== numColumns &&
      numberOfElementsLastRow !== 0
    ) {
      data.push({key: `blank-${numberOfElementsLastRow}`, empty: true});
      numberOfElementsLastRow++;
    }

    return data;
  };

  const renderSubCategories = ({item}) => {
    if (item.empty) {
      return <View style={[styles.item, styles.itemInvisible]} />;
    }

    return (
      <Ripple style={[styles.subCategory, {}]}>
        <Text style={[FONTS.mediumFont10, {color: COLORS.white}]}>
          {item.name}
        </Text>
      </Ripple>
    );
  };

  const RenderCategories = ({item}) => {
    return (
      <View
        style={{
          flex: 1,
          width: width - SIZES.fifteen * 2.2,
          marginLeft: SIZES.five,
          margin: 1,
        }}>
        <View style={[styles.category, {backgroundColor: item.bgColor}]}>
          <Text style={[FONTS.mediumFont12, {color: COLORS.white}]}>
            {item.title}
          </Text>
        </View>
        <View style={{marginTop: SIZES.ten}}>
          <FlatList
            numColumns={3}
            data={formatData(item.subCategories, 3)}
            renderItem={renderSubCategories}
          />
        </View>
      </View>
    );
  };

  return (
    <BGView>
      <View style={{flex: 1, margin: SIZES.fifteen}}>
        {/* header */}
        <Row
          style={{
            borderBottomWidth: 2,
            paddingVertical: SIZES.ten,
            borderColor: COLORS.white,
            justifyContent: 'space-between',
          }}>
          <Text style={[FONTS.mediumFont12, {color: COLORS.brownGrey}]}>
            See All
          </Text>
          <Row style={{alignItems: 'center'}}>
            <MyTouchableOpacity
              style={{
                paddingVertical: SIZES.five,
                paddingHorizontal: SIZES.ten,

                borderRadius: SIZES.ten,
              }}>
              <Text style={[FONTS.mediumFont12, {color: COLORS.brownGrey}]}>
                cancel
              </Text>
            </MyTouchableOpacity>
            <MyTouchableOpacity
              onPress={() => navigation.navigate(SCREENS.Edittask)}
              style={{
                paddingVertical: SIZES.five,
                paddingHorizontal: SIZES.ten,
                backgroundColor: COLORS.primary,
                borderRadius: SIZES.ten,
              }}>
              <Text style={[FONTS.mediumFont12, {color: COLORS.brownGrey}]}>
                Save
              </Text>
            </MyTouchableOpacity>
          </Row>
        </Row>

        {/* Title Text */}
        <View>
          <Text
            style={[
              FONTS.boldFont20,
              {color: COLORS.white, paddingVertical: SIZES.twenty},
            ]}>
            Task Name
          </Text>
          <TextInput
            placeholder="Type a name"
            placeholderTextColor={COLORS.brownGrey}
            value={name}
            style={{fontSize: SIZES.fifteen}}
            onChangeText={text => setName(text)}
          />
        </View>

        {/* Select Category */}
        <View>
          <Text
            style={[
              FONTS.boldFont20,
              {color: COLORS.white, paddingVertical: SIZES.twenty},
            ]}>
            Select Category
          </Text>

          <View style={{marginTop: SIZES.twenty}}>
            <ScrollView
              // ref={node => {
              //   scrollRef = node;
              // }}
              horizontal
              bounces={false}
              onScrollEndDrag={e => {
                var index = e.nativeEvent.contentOffset.x / width;
              }}
              snapToInterval={width - SIZES.fifteen * 1.7}
              overScrollMode={'never'}
              showsHorizontalScrollIndicator={false}>
              {CATEGORIES.map((item, index) => {
                return <RenderCategories item={item} />;
              })}
            </ScrollView>
          </View>
        </View>

        {/* Colors */}
        <View>
          <Text
            style={[
              FONTS.boldFont20,
              {color: COLORS.white, paddingVertical: SIZES.twenty},
            ]}>
            Colors
          </Text>
          <View style={{marginBottom: SIZES.fifteen}}>
            <FlatList
              contentContainerStyle={{
                // justifyContent: 'center',
                // alignContent: 'center',
                alignItems: 'center',
                flexGrow: 1,
              }}
              numColumns={5}
              data={colordata}
              keyExtractor={item => item.id}
              renderItem={({item}) => (
                <MyTouchableOpacity
                  style={{
                    width: width * 0.12,
                    height: width * 0.12,
                    borderRadius: SIZES.twentyFive * 2,
                    marginRight: width * 0.06,
                    marginBottom: SIZES.fifteen,
                    backgroundColor: item.color,
                  }}
                />
              )}
            />
          </View>
        </View>
      </View>
    </BGView>
  );
}
const colordata = [
  {
    id: '1',
    color: '#ee5a29',
  },
  {
    id: '2',

    color: '#000000',
  },
  {
    id: '3',

    color: '#ffffff',
  },
  {
    id: '4',

    color: '#0037c1',
  },
  {
    id: '5',

    color: '#767577',
  },
  {
    id: '6',

    color: '#FFD700',
  },
  {
    id: '7',

    color: '#4e1789',
  },
  {
    id: '8',

    color: '#871af6',
  },
  {
    id: '9',

    color: '#5d536a',
  },
  {
    id: '10',

    color: '#1eaf08',
  },
  {
    id: '11',

    color: '#eeeeee',
  },
  {
    id: '12',

    color: '#4a4b4d',
  },

  {
    id: '13',

    color: '#ffeef2',
  },

  {
    id: '14',

    color: '#8a7e9a',
  },
  {
    id: '15',
    color: '#ee5a29',
  },
];

const CATEGORIES = [
  {
    id: '0',
    title: 'Household',
    bgColor: '#00f6ff',
    subCategories: [
      {
        id: '0',
        name: 'Groceries',
      },
      {
        id: '1',
        name: 'Groceries',
      },
      {
        id: '2',
        name: 'Groceries',
      },
    ],
  },
  {
    id: '1',
    title: 'Finance',
    bgColor: '#00ff9f',
    subCategories: [
      {
        id: '0',
        name: 'Bills',
      },
      {
        id: '1',
        name: 'Bills',
      },
      {
        id: '2',
        name: 'Bills',
      },
    ],
  },
  {
    id: '2',
    title: 'Work',
    bgColor: '#ffc400',
    subCategories: [
      {
        id: '0',
        name: 'Meeting',
      },
      {
        id: '1',
        name: 'Meeting',
      },
      {
        id: '2',
        name: 'Meeting',
      },
    ],
  },
  {
    id: '3',
    title: 'Lifestyle',
    bgColor: '#ff0045',
    subCategories: [
      {
        id: '0',
        name: 'Health',
      },
      {
        id: '1',
        name: 'Health',
      },
      {
        id: '2',
        name: 'Health',
      },
    ],
  },
  {
    id: '4',
    title: 'Events',
    bgColor: '#ff3d00',
    subCategories: [
      {
        id: '0',
        name: 'Social',
      },
      {
        id: '1',
        name: 'Social',
      },
      {
        id: '2',
        name: 'Social',
      },
    ],
  },
  {
    id: '5',
    title: 'Travel',
    bgColor: '#0044ff',
    subCategories: [
      {
        id: '0',
        name: 'Packing',
      },
      {
        id: '1',
        name: 'Packing',
      },
      {
        id: '2',
        name: 'Packing',
      },
    ],
  },
];

const styles = StyleSheet.create({
  itemInvisible: {
    backgroundColor: 'transparent',
  },
  category: {
    paddingVertical: SIZES.fifteen,
    paddingHorizontal: SIZES.twenty * 1.5,
    marginRight: SIZES.fifteen,
    borderRadius: SIZES.fifty,
    alignSelf: 'baseline',
  },
  subCategory: {
    backgroundColor: COLORS.gunMetal,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    margin: 1,

    padding: SIZES.fifteen,
  },
});
