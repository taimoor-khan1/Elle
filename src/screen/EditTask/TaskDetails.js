import {Icon} from 'native-base';
import React, {useState} from 'react';
import {StyleSheet, Text, View, Modal} from 'react-native';

import {
  BackArrow,
  BGView,
  ButtonRadius,
  MyTouchableOpacity,
  Ripple,
  Row,
} from '../../components';
import {COLORS, FONTFAMILY, FONTS, SIZES, STYLES, width} from '../../constants';
import {SubCatagory} from './SubCatagory';
import {Reminder} from './Reminder';

export default TaskDetails = props => {
  const [tabvisible, Settagvisible] = useState(false);
  const [showsubcatagory, Setshowsubcatagory] = useState(false);
  const [showReminder, SetshowReminder] = useState(false);

  const tags = () => {
    Settagvisible(true);
  };
  const ReminderOn = () => {
    SetshowReminder(true);
  };
  return (
    <BGView>
      <View style={{flex: 1, margin: SIZES.fifteen}}>
        <Text
          style={[
            FONTS.mediumFont14,
            {
              color: COLORS.white,
            },
          ]}>
          Send
        </Text>
        <Ripple
          style={{
            borderWidth: 1,
            borderStyle: 'dashed',
            borderRadius: SIZES.fifteen,
            borderColor: COLORS.brownGrey,
            alignItems: 'center',
            padding: SIZES.fifteen,
            marginVertical: SIZES.fifteen,
          }}
          onPress={tags}>
          <Text
            style={[
              FONTS.mediumFont14,
              {
                color: COLORS.brownGrey,
              },
            ]}>
            Add Tag
          </Text>
        </Ripple>
        <Text
          style={[
            FONTS.mediumFont14,
            {
              color: COLORS.white,
              marginVertical: SIZES.fifteen,
            },
          ]}>
          Reminder me later
        </Text>
        <Ripple
          style={{
            borderStyle: 'solid',
            borderRadius: SIZES.fifteen,
            backgroundColor: COLORS.gunMetal,
            marginVertical: SIZES.fifteen,
          }}
          onPress={ReminderOn}>
          <Row style={{alignItems: 'center', justifyContent: 'space-between'}}>
            <Text
              style={[
                FONTS.mediumFont12,
                {
                  color: COLORS.white,
                  marginHorizontal: SIZES.fifteen,
                  marginVertical: SIZES.fifteen,
                },
              ]}>
              Set time
            </Text>
            <Icon
              type={FONTFAMILY.AntDesign}
              name={'right'}
              style={{
                color: COLORS.white,
                fontSize: 22,
                marginVertical: SIZES.fifteen,
              }}
            />
          </Row>
        </Ripple>

        <Row style={{alignItems: 'center', justifyContent: 'center'}}>
          <View style={{flex: 1, marginEnd: SIZES.five}}>
            <Text
              style={[
                FONTS.mediumFont12,
                {
                  color: COLORS.white,
                  marginVertical: SIZES.fifteen,
                },
              ]}>
              List
            </Text>
            <Ripple
              style={{
                borderStyle: 'solid',
                borderRadius: SIZES.fifteen,
                backgroundColor: COLORS.gunMetal,
                marginVertical: SIZES.fifteen,
              }}>
              <Row
                style={{
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  paddingHorizontal: SIZES.ten,
                  height: SIZES.twentyFive * 1.8,
                }}>
                <Text
                  style={[
                    FONTS.mediumFont12,
                    {
                      color: COLORS.white,
                    },
                  ]}>
                  Personal
                </Text>
                <Icon
                  type={FONTFAMILY.AntDesign}
                  name={'down'}
                  style={{
                    color: COLORS.white,
                    fontSize: SIZES.twenty,
                    marginVertical: SIZES.fifteen,
                  }}
                />
              </Row>
            </Ripple>
          </View>

          <View style={{flex: 1, marginEnd: SIZES.five}}>
            <Text
              style={[
                FONTS.mediumFont14,
                {
                  color: COLORS.white,
                  marginVertical: SIZES.fifteen,
                },
              ]}>
              Owner
            </Text>
            <Ripple
              style={{
                marginVertical: SIZES.fifteen,
                borderStyle: 'solid',
                borderRadius: SIZES.fifteen,
                backgroundColor: COLORS.gunMetal,
                paddingHorizontal: SIZES.ten,
                height: SIZES.twentyFive * 1.8,
              }}>
              <Text
                style={[
                  FONTS.mediumFont12,
                  {
                    color: COLORS.white,
                    marginVertical: SIZES.fifteen,
                  },
                ]}>
                Assigned to me
              </Text>
            </Ripple>
          </View>
        </Row>
        <Text
          style={[
            FONTS.mediumFont14,
            {
              color: COLORS.white,
              marginVertical: SIZES.fifteen,
            },
          ]}>
          Attachment
        </Text>
        <Ripple
          style={{
            borderWidth: 1,
            borderStyle: 'dashed',
            borderRadius: SIZES.fifteen,
            borderColor: COLORS.brownGrey,
            alignItems: 'center',
            padding: SIZES.fifteen,
            marginVertical: SIZES.fifteen,
          }}>
          <Text
            style={[
              FONTS.mediumFont14,
              {
                color: COLORS.brownGrey,
              },
            ]}>
            Attachment
          </Text>
        </Ripple>

        <Text
          style={[
            FONTS.mediumFont14,
            {
              color: COLORS.white,
              marginVertical: SIZES.fifteen,
            },
          ]}>
          Created
        </Text>
        <ButtonRadius label="Done" onPress={() => props.navigation.goBack()} />

        <Modal
          animationType="slide"
          transparent={true}
          visible={tabvisible}
          statusBarTranslucent>
          <View
            style={{
              flex: 1,
              backgroundColor: COLORS.brownGrey + '65',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <View
              style={[
                STYLES.shadow,
                {
                  backgroundColor: COLORS.LightBlack,
                  padding: SIZES.twenty,
                  width: width * 0.95,
                  borderRadius: SIZES.fifteen,
                },
              ]}>
              <Row
                style={{
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginVertical: SIZES.fifteen,
                  borderRadius: SIZES.fifteen,
                }}>
                <Text style={[FONTS.mediumFont14, , {color: COLORS.white}]}>
                  Choose an Option
                </Text>
                <MyTouchableOpacity
                  style={{
                    backgroundColor: COLORS.primary,
                    paddingHorizontal: SIZES.fifteen,
                    paddingVertical: SIZES.five,
                    borderRadius: SIZES.ten,
                  }}
                  onPress={() => {
                    Settagvisible(false);
                    Setshowsubcatagory(true);
                  }}>
                  <Text
                    style={[
                      FONTS.mediumFont14,
                      {
                        color: COLORS.white,
                      },
                    ]}>
                    Next
                  </Text>
                </MyTouchableOpacity>
              </Row>
              <MyTouchableOpacity
                style={[styles.tagsbutton, {backgroundColor: COLORS.gold}]}
                onPress={() => {}}>
                <Text
                  style={[
                    FONTS.mediumFont14,
                    {
                      color: COLORS.white,
                    },
                  ]}>
                  Priority
                </Text>
              </MyTouchableOpacity>
              <MyTouchableOpacity
                style={[styles.tagsbutton, {backgroundColor: COLORS.Skyblue}]}
                onPress={() => {}}>
                <Text
                  style={[
                    FONTS.mediumFont14,
                    {
                      color: COLORS.white,
                    },
                  ]}>
                  Important
                </Text>
              </MyTouchableOpacity>
              <MyTouchableOpacity
                style={[styles.tagsbutton, {backgroundColor: COLORS.red}]}
                onPress={() => {}}>
                <Text
                  style={[
                    FONTS.mediumFont14,
                    {
                      color: COLORS.white,
                    },
                  ]}>
                  Deadline
                </Text>
              </MyTouchableOpacity>
              <MyTouchableOpacity
                style={[styles.tagsbutton, {backgroundColor: COLORS.brownGrey}]}
                onPress={() => {}}>
                <Text
                  style={[
                    FONTS.mediumFont14,
                    {
                      color: COLORS.white,
                    },
                  ]}>
                  In-Progress
                </Text>
              </MyTouchableOpacity>
              <MyTouchableOpacity
                style={[styles.tagsbutton, {backgroundColor: COLORS.darkblue}]}
                onPress={() => {}}>
                <Text
                  style={[
                    FONTS.mediumFont14,
                    {
                      color: COLORS.white,
                    },
                  ]}>
                  In-Track
                </Text>
              </MyTouchableOpacity>
              <MyTouchableOpacity
                style={[
                  styles.tagsbutton,
                  {backgroundColor: COLORS.purplishRed},
                ]}
                onPress={() => {}}>
                <Text
                  style={[
                    FONTS.mediumFont14,
                    {
                      color: COLORS.white,
                    },
                  ]}>
                  Work
                </Text>
              </MyTouchableOpacity>
              <MyTouchableOpacity
                style={[styles.tagsbutton, {backgroundColor: COLORS.seaGreen}]}
                onPress={() => {}}>
                <Text
                  style={[
                    FONTS.mediumFont14,
                    {
                      color: COLORS.white,
                    },
                  ]}>
                  Not Cirtical
                </Text>
              </MyTouchableOpacity>
              <MyTouchableOpacity
                style={[styles.tagsbutton, {backgroundColor: COLORS.orange}]}
                onPress={() => {}}>
                <Text
                  style={[
                    FONTS.mediumFont14,
                    {
                      color: COLORS.white,
                    },
                  ]}>
                  Medium Priority
                </Text>
              </MyTouchableOpacity>
            </View>
          </View>
        </Modal>
        <SubCatagory
          visible={showsubcatagory}
          onpress={() => Setshowsubcatagory(false)}
        />
        <Reminder
          visible={showReminder}
          onpress={() => SetshowReminder(false)}
        />
      </View>
    </BGView>
  );
};

const styles = StyleSheet.create({
  tagsbutton: {
    marginVertical: SIZES.ten,

    paddingHorizontal: SIZES.fifteen,
    paddingVertical: SIZES.fifteen,
    borderRadius: SIZES.twenty,
  },
});
