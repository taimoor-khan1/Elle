import React, {useState} from 'react';
import {Platform, StyleSheet, Text, View, Modal} from 'react-native';
import {Icon} from 'native-base';
import {
  BGView,
  ButtonRadius,
  DateTimePicker,
  MyTouchableOpacity,
  Row,
} from '../../components';
import {COLORS, FONTFAMILY, FONTS, SIZES, width} from '../../constants';
// import DateTimePickerModal from 'react-native-modal-datetime-picker';
import moment from 'moment';
export const Activity = () => {
  const [visibleDateModal, setvisibleDateModal] = useState(false);
  const [visibleModal, setVisibleModal] = useState(false);
  const [selectDateTime, setSelectDateTime] = useState(null);
  console.log(selectDateTime);
  function datepick(date) {
    // // setvisibleDateModal(false);
    setSelectDateTime(date);
    // setTimeout(() => {
    //   setVisibleModal(!visibleModal);
    // }, 500);
  }

  return (
    <BGView>
      <View style={{flex: 1, margin: SIZES.fifteen, alignItems: 'center'}}>
        {selectDateTime === null ? (
          <>
            <Text
              style={[
                FONTS.boldFont16,
                {
                  color: COLORS.white,
                  marginTop: SIZES.twenty,
                  paddingVertical: SIZES.ten,
                },
              ]}>
              Work Together
            </Text>
            <Text
              style={[
                FONTS.lightFont14,
                {
                  color: COLORS.brownGrey,
                  alignItems: 'center',
                  textAlign: 'center',
                },
              ]}>
              Invite other members to assign tasks & share details.
            </Text>
          </>
        ) : (
          <>
            <View
              style={{
                backgroundColor: COLORS.almostBlack,
                padding: SIZES.fifteen,
                width: width * 0.8,
                borderRadius: SIZES.twenty,
              }}>
              <Text
                style={[
                  FONTS.mediumFont14,
                  {
                    color: COLORS.brownGrey,
                  },
                ]}>
                Selected Time
              </Text>
              <Row
                style={{
                  justifyContent: 'space-between',
                  marginVertical: SIZES.twenty,
                  paddingHorizontal: SIZES.twentyFive,
                }}>
                <View>
                  <Text
                    style={[
                      FONTS.mediumFont14,
                      {
                        color: COLORS.brownGrey,
                      },
                    ]}>
                    Date
                  </Text>
                  <Text
                    style={[
                      FONTS.mediumFont14,
                      {
                        marginVertical: SIZES.fifteen,
                        color: COLORS.white,
                      },
                    ]}>
                    {moment(selectDateTime).format('ddd, MMM Do')}
                  </Text>
                </View>
                <View>
                  <Text
                    style={[
                      FONTS.mediumFont14,
                      {
                        color: COLORS.brownGrey,
                      },
                    ]}>
                    Time
                  </Text>
                  <Text
                    style={[
                      FONTS.mediumFont14,
                      {
                        marginVertical: SIZES.fifteen,
                        color: COLORS.white,
                      },
                    ]}>
                    {moment(selectDateTime).format('hh :mm a')}
                  </Text>
                </View>
              </Row>
            </View>
          </>
        )}

        <ButtonRadius
          label="Invite Members"
          onPress={() => setvisibleDateModal(true)}
          style={{position: 'absolute', bottom: SIZES.twentyFive}}
        />
      </View>

      {/* Select date Modal*/}
      {/* <DateTimePickerModal
        isVisible={visibleDateModal}
        mode="datetime"
        onConfirm={date => {
          datepick(date);
        }}
        onCancel={() => setvisibleDateModal(false)}
      /> */}

      {/* <Modal visible={visibleDateModal} transparent={true}>
        <MyTouchableOpacity
          onPress={() => {
            setvisibleDateModal(false);
          }}
          style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
          <DateTimePicker
            mode="datetime"
            value={selectDateTime}
            onChangeValue={date => datepick(date)}
          />
        </MyTouchableOpacity>
      </Modal> */}

      {/* Confirmation modals */}
      <Modal visible={visibleDateModal} transparent={true}>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: `${COLORS.black}80`,
            flex: 1,
          }}>
          <View
            style={{
              backgroundColor: COLORS.almostBlack,
              padding: SIZES.fifteen,
              // width: width * 0.8,
              borderRadius: SIZES.twenty,
            }}>
            <Text
              style={[
                FONTS.mediumFont14,
                {
                  color: COLORS.brownGrey,
                },
              ]}>
              Time set
            </Text>

            <View style={{marginVertical: SIZES.twenty}}>
              <DateTimePicker
                mode="datetime"
                value={selectDateTime || new Date()}
                onChangeValue={date => datepick(date)}
              />
            </View>

            <Row style={{alignItems: 'center', justifyContent: 'flex-end'}}>
              <MyTouchableOpacity
                onPress={() => setvisibleDateModal(false)}
                style={{
                  paddingVertical: SIZES.five,
                  paddingHorizontal: SIZES.ten,
                  borderRadius: SIZES.ten,
                  marginRight: SIZES.twenty,
                }}>
                <Text style={[FONTS.mediumFont12, {color: COLORS.brownGrey}]}>
                  cancel
                </Text>
              </MyTouchableOpacity>
              <MyTouchableOpacity
                onPress={() => setvisibleDateModal(false)}
                style={{
                  paddingVertical: SIZES.five,
                  paddingHorizontal: SIZES.ten,
                  backgroundColor: COLORS.primary,
                  borderRadius: SIZES.ten,
                  marginRight: SIZES.twenty,
                }}>
                <Text style={[FONTS.mediumFont12, {color: COLORS.white}]}>
                  Save
                </Text>
              </MyTouchableOpacity>
            </Row>
          </View>
        </View>
      </Modal>
    </BGView>
  );
};
