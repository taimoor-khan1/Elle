import {Icon} from 'native-base';
import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Alert,
  Modal,
  TouchableOpacity,
  TextInput,
  Switch,
} from 'react-native';

import {
  BGView,
  ButtonRadius,
  HeaderCenterText,
  Ripple,
  Row,
} from '../../components';
import {COLORS, FONTFAMILY, FONTS, SIZES, STYLES} from '../../constants';

import {MyTextInput} from '../../components/MyTextInput';

export function Reminder({visible, onpress}) {
  const [isEnabled, setIsEnabled] = useState(false);
  const [reminderType, setReminderType] = useState('oneTime');
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  function ontimeshow() {
    return (
      <View>
        <Row style={{justifyContent: 'space-between'}}>
          <TouchableOpacity style={styles.timecycle}>
            <Text
              style={[
                FONTS.mediumFont12,
                {
                  color: COLORS.white,
                },
              ]}>
              Today
            </Text>
            <Text
              style={[
                FONTS.lightFont08,
                {
                  color: COLORS.white,
                },
              ]}>
              fri ,30 AM
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.timecycle}>
            <Text
              style={[
                FONTS.mediumFont12,
                {
                  color: COLORS.white,
                },
              ]}>
              Tomorrow
            </Text>
            <Text
              style={[
                FONTS.lightFont08,
                {
                  color: COLORS.white,
                },
              ]}>
              Aug 2, 2021
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.timecycle}>
            <Text
              style={[
                FONTS.mediumFont12,
                {
                  color: COLORS.white,
                },
              ]}>
              Custom
            </Text>
          </TouchableOpacity>
        </Row>
      </View>
    );
  }
  function repeatShow() {
    return (
      <View>
        <Row style={{alignItems: 'center', justifyContent: 'space-around'}}>
          <TouchableOpacity style={styles.daycycle}>
            <Text
              style={[
                FONTS.mediumFont08,
                {
                  color: COLORS.white,
                },
              ]}>
              Daily
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.daycycle}>
            <Text
              style={[
                FONTS.mediumFont08,
                {
                  color: COLORS.white,
                },
              ]}>
              Weekly
            </Text>
          </TouchableOpacity>
        </Row>
        <Row style={{alignItems: 'center', justifyContent: 'space-around'}}>
          <TouchableOpacity style={styles.daycycle}>
            <Text
              style={[
                FONTS.mediumFont08,
                {
                  color: COLORS.white,
                },
              ]}>
              Monthly
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.daycycle}>
            <Text
              style={[
                FONTS.mediumFont08,
                {
                  color: COLORS.white,
                },
              ]}>
              Yearly
            </Text>
          </TouchableOpacity>
        </Row>
        <View
          style={{
            backgroundColor: COLORS.dark,
            padding: SIZES.fifteen,
          }}>
          <Text
            style={[
              FONTS.mediumFont12,
              {
                color: COLORS.brownGrey,
              },
            ]}>
            Repeat every
          </Text>
          <Text
            style={[
              FONTS.mediumFont12,
              {
                color: COLORS.brownGrey,
                marginTop: SIZES.ten,
              },
            ]}>
            Task never Ends
          </Text>
        </View>
      </View>
    );
  }

  return (
    <View>
      <Modal
        animationType="fade"
        transparent={true}
        visible={visible}
        statusBarTranslucent>
        <View
          style={{
            flex: 1,
            backgroundColor: COLORS.brownGrey + '65',
            padding: SIZES.ten,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <View
            style={[
              STYLES.shadow,
              {
                backgroundColor: COLORS.LightBlack,
                padding: SIZES.twenty,
                borderRadius: SIZES.fifteen,
              },
            ]}>
            <Row style={{justifyContent: 'space-between'}}>
              <Text style={[FONTS.mediumFont12, , {color: COLORS.white}]}>
                Add a reminder
              </Text>
              <Switch
                trackColor={{false: '#767577', true: '#2d3540'}}
                thumbColor={isEnabled ? '#73064a' : '#f4f3f4'}
                ios_backgroundColor="#3e3e3e"
                shouldRasterizeIOS
                onValueChange={toggleSwitch}
                value={isEnabled}
              />
            </Row>
            <Row
              style={{
                justifyContent: 'space-between',
                marginVertical: SIZES.fifteen,
                backgroundColor: COLORS.black,
                borderRadius: SIZES.ten,
              }}>
              <TouchableOpacity
                style={[
                  styles.timebutton,
                  reminderType === 'oneTime'
                    ? styles.Selected
                    : styles.UnSelected,
                ]}
                onPress={() => setReminderType('oneTime')}>
                <Text style={[FONTS.mediumFont12, {color: 'white'}]}>
                  One Time
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.timebutton,
                  reminderType === 'repeat'
                    ? styles.Selected
                    : styles.UnSelected,
                ]}
                onPress={() => setReminderType('repeat')}>
                <Text style={[FONTS.mediumFont12, {color: 'white'}]}>
                  {' '}
                  Repeat
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.timebutton,
                  reminderType === 'location'
                    ? styles.Selected
                    : styles.UnSelected,
                ]}
                onPress={() => setReminderType('location')}>
                <Text style={[FONTS.mediumFont12, {color: 'white'}]}>
                  Location
                </Text>
              </TouchableOpacity>
            </Row>

            {reminderType === 'oneTime'
              ? ontimeshow()
              : reminderType === 'repeat'
              ? repeatShow()
              : null}

            <Row
              style={{
                justifyContent: 'space-between',
              }}>
              <TouchableOpacity
                style={[
                  styles.tagsbutton,
                  {backgroundColor: COLORS.primary, alignItems: 'center'},
                ]}
                onPress={() => {}}>
                <Text
                  style={[
                    FONTS.mediumFont14,
                    {
                      color: COLORS.white,
                    },
                  ]}>
                  Cancel
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.tagsbutton,
                  {backgroundColor: COLORS.primary, alignItems: 'center'},
                ]}
                onPress={onpress}>
                <Text
                  style={[
                    FONTS.mediumFont14,
                    {
                      color: COLORS.white,
                    },
                  ]}>
                  Continue
                </Text>
              </TouchableOpacity>
            </Row>
          </View>
        </View>
      </Modal>
    </View>
  );
}
const styles = StyleSheet.create({
  tagsbutton: {
    marginVertical: SIZES.ten,
    // marginHorizontal: SIZES.twenty * 2,
    paddingHorizontal: SIZES.fifteen * 2,
    paddingVertical: SIZES.fifteen,
    borderRadius: SIZES.twenty * 2,
  },
  timebutton: {
    alignItems: 'center',
    alignContent: 'center',
    // backgroundColor: 'green',
    paddingHorizontal: SIZES.twentyFive,
    paddingVertical: SIZES.five,
    borderRadius: SIZES.twenty,
  },
  Selected: {
    backgroundColor: COLORS.primary,
  },
  UnSelected: {
    backgroundColor: COLORS.transparent,
  },
  timecycle: {
    borderWidth: 2,
    paddingVertical: SIZES.twenty,
    paddingVertical: SIZES.twenty,
    width: SIZES.fifteen * 7,
    height: SIZES.fifteen * 7,
    borderColor: COLORS.brownGrey,
    borderRadius: SIZES.twenty * 5,
    marginVertical: SIZES.fifteen,
    alignItems: 'center',
    justifyContent: 'center',
  },
  daycycle: {
    borderWidth: 2,
    paddingVertical: SIZES.twenty,
    paddingVertical: SIZES.twenty,
    width: SIZES.fifteen * 7,
    height: SIZES.fifteen * 7,
    borderColor: COLORS.brownGrey,
    borderRadius: SIZES.twenty * 5,
    marginVertical: SIZES.fifteen,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
