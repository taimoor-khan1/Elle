import React, {useState, createRef} from 'react';
import {
  FlatList,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {getStatusBarHeight} from 'react-native-status-bar-height';
import {BGView, ButtonRadius, EditText, Ripple, Row} from '../../components';
import {COLORS, FONTS, SCREENS, SIZES, width} from '../../constants';
import {CommonActions} from '@react-navigation/native';

export default function SelectCategories(props) {
  const catRef = createRef(null);
  const [index, setIndex] = useState(0);

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
          width: width - SIZES.fifteen * 2,
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
      <View
        style={{
          height: Platform.OS === 'android' ? getStatusBarHeight() + 15 : 0,
        }}
      />
      <View style={{flex: 1, margin: SIZES.fifteen}}>
        <Text
          style={[
            FONTS.boldFont20,
            {
              color: COLORS.white,
              alignSelf: 'flex-start',
            },
          ]}>
          Select Categories
        </Text>
        <Text
          style={[
            FONTS.lightFont12,
            {
              color: COLORS.brownGrey,
              alignSelf: 'flex-start',
            },
          ]}>
          Add what would you like to track?
        </Text>
        <View style={{marginTop: SIZES.twenty}}>
          <ScrollView
            // ref={catRef}
            ref={node => {
              this.scrollRef = node;
            }}
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
          {/* <FlatList
            ref={catRef}
            data={CATEGORIES}
            horizontal
            keyExtractor={item => item.id}
            renderItem={renderCategories}
            showsHorizontalScrollIndicator={false}
            // snapToInterval={width - SIZES.fifteen * 1.7}

            bounces={false}
            overScrollMode={'never'}
            scrollEnabled={true}
            onMomentumScrollEnd={e => {
              let pageNumber = Math.min(
                Math.max(
                  Math.floor(e.nativeEvent.contentOffset.x / width + 0.5) + 1,
                  0,
                ),
                CATEGORIES.length,
              );
              console.log('onMomentum : ', pageNumber);

              //   setIndex(pageNumber);
            }}
            onScrollEndDrag={e => {
              let pageNumber = Math.min(
                Math.max(
                  Math.floor(e.nativeEvent.contentOffset.x / width + 0.5) + 1,
                  0,
                ),
                CATEGORIES.length,
              );
              console.log('onScrollEndDrag : ', pageNumber);
            }}
            onScroll={e => {
              let pageNumber = Math.min(
                Math.max(
                  Math.floor(e.nativeEvent.contentOffset.x / width + 0.5) + 1,
                  0,
                ),
                CATEGORIES.length,
              );
              console.log('onScroll : ', pageNumber);
            }}
          /> */}
        </View>

        <ScrollView
          showsVerticalScrollIndicator={false}
          overScrollMode={'never'}
          bounces={false}>
          <View style={{marginTop: SIZES.fifteen}}>
            <View style={{marginTop: SIZES.fifteen}}>
              <Text
                style={[
                  FONTS.mediumFont10,
                  {color: COLORS.brownGrey, marginBottom: SIZES.five},
                ]}>
                Task 1
              </Text>
              <EditText placeholder={'Type Field 1'} />
            </View>
            <View style={{marginTop: SIZES.fifteen}}>
              <Text
                style={[
                  FONTS.mediumFont10,
                  {color: COLORS.brownGrey, marginBottom: SIZES.five},
                ]}>
                Task 2
              </Text>
              <EditText placeholder={'Type Field 2'} />
            </View>
            <View style={{marginTop: SIZES.fifteen}}>
              <Text
                style={[
                  FONTS.mediumFont10,
                  {color: COLORS.brownGrey, marginBottom: SIZES.five},
                ]}>
                Task 3
              </Text>
              <EditText placeholder={'Type Field 3'} />
            </View>
            <View style={{marginTop: SIZES.fifteen}}>
              <Text
                style={[
                  FONTS.mediumFont10,
                  {color: COLORS.brownGrey, marginBottom: SIZES.five},
                ]}>
                Task 4
              </Text>
              <EditText placeholder={'Type Field 4'} />
            </View>
            <View style={{marginTop: SIZES.fifteen}}>
              <Text
                style={[
                  FONTS.mediumFont10,
                  {color: COLORS.brownGrey, marginBottom: SIZES.five},
                ]}>
                Task 5
              </Text>
              <EditText placeholder={'Type Field 5'} />
            </View>
          </View>

          <Row
            style={{
              alignItems: 'center',
              justifyContent: 'space-between',
              marginTop: SIZES.twenty,
            }}>
            <ButtonRadius
              style={{flex: 1, marginRight: SIZES.five}}
              label="Skip"
              onPress={() => props.navigation.replace(SCREENS.GeneralForm)}
            />
            <ButtonRadius
              style={{flex: 1, marginLeft: SIZES.five}}
              showArrow
              label="Continue"
              onPress={() => {
                // props.navigation.dispatch(
                //   CommonActions.reset({
                //     index: 0,
                //     routes: [{name: SCREENS.BottomBar}],
                //   }),
                // );
                props.navigation.replace(SCREENS.GeneralForm);
              }}
            />
          </Row>
        </ScrollView>
      </View>
    </BGView>
  );
}

const styles = StyleSheet.create({
  itemInvisible: {
    backgroundColor: 'transparent',
  },
  category: {
    paddingVertical: SIZES.fifteen,
    paddingHorizontal: SIZES.twenty * 1.5,
    marginRight: SIZES.ten,

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
