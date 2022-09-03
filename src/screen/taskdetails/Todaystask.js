import {Icon} from 'native-base';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {
  BGView,
  ButtonRadius,
  HeaderCenterText,
  Ripple,
  Row,
} from '../../components';
import {COLORS, FONTFAMILY, FONTS, SIZES} from '../../constants';

export default function Todaystask() {
  const Circle = ({color}) => (
    <View style={[styles.circle, {backgroundColor: color}]} />
  );

  const CircleButton = ({icon, type, onPress}) => (
    <Ripple style={[styles.btnCircle]} onPress={onPress}>
      <Icon name={icon} type={type} style={styles.icon} />
    </Ripple>
  );

  return (
    <BGView>
      <View style={{flex: 1, margin: SIZES.fifteen}}>
        <HeaderCenterText title={"Today's Task"} backArrow />
        <View
          style={{
            marginTop: SIZES.twentyFive * 2,
            paddingHorizontal: SIZES.twenty,
          }}>
          <Row style={{alignItems: 'center'}}>
            <Circle color={COLORS.brownGrey} />
            <Text
              style={[
                FONTS.mediumFont14,
                {color: COLORS.white, marginLeft: SIZES.ten},
              ]}>
              Pay Phone Bill (AT&T)
            </Text>
          </Row>
          <Row style={{marginTop: SIZES.five}}>
            <Text
              style={[FONTS.lightFont10, {flex: 1, color: COLORS.brownGrey}]}>
              Date: 08/05/2022
            </Text>
            <Text
              style={[FONTS.lightFont10, {flex: 1, color: COLORS.brownGrey}]}>
              Time: 01:00PM
            </Text>
          </Row>
        </View>
        <Row style={styles.msg}>
          <View style={styles.bar} />
          <Text
            style={[FONTS.mediumFont16, {flex: 1, color: COLORS.purplishRed}]}>
            AT&T Bill is scheduled to be paid or else my connection will loose.
            {'\n\n'}
            Micheal you have to pay the bill at any cost!!!!
          </Text>
        </Row>
        <Row style={styles.bottom}>
          <View style={{flex: 0.3}}>
            <CircleButton
              icon={'trash-alt'}
              type={FONTFAMILY.FontAwesome + '5'}
            />
          </View>
          <View style={{flex: 0.3}}>
            <CircleButton
              icon={'share-alt'}
              type={FONTFAMILY.FontAwesome + '5'}
            />
          </View>
          <ButtonRadius label={'Pending'} style={{flex: 1}} />
        </Row>
      </View>
    </BGView>
  );
}

const styles = StyleSheet.create({
  circle: {
    height: SIZES.twentyFive * 1.25,
    width: SIZES.twentyFive * 1.25,
    borderRadius: SIZES.twentyFive * 1.25,
  },
  btnCircle: {
    height: 60,
    width: 60,
    borderRadius: 60,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.dark,
  },
  msg: {
    paddingVertical: SIZES.ten,
    backgroundColor: COLORS.charcoalGrey,
    marginTop: SIZES.twentyFive * 1.5,
    borderRadius: SIZES.twenty,
  },
  bar: {
    backgroundColor: COLORS.purplishRed,
    width: 2,
    marginRight: SIZES.ten,
    borderRadius: 10,
  },
  bottom: {
    position: 'absolute',
    bottom: SIZES.fifteen,
  },
  icon: {
    fontSize: SIZES.twentyFive,
    color: COLORS.white,
  },
});
