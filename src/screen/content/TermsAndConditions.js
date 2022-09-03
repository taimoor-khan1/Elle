import React from 'react';
import {
  Platform,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {COLORS, FONTS, height, SIZES, STYLES} from '../../constants';
import HeaderOne from '../../components/HeaderCenterText';
import Card from '../../components/Card';
import {BGView} from '../../components';
import LinearGradient from 'react-native-linear-gradient';
import {getStatusBarHeight} from 'react-native-status-bar-height';

export default function TermsAndConditions(props) {
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

        <View style={{}}>
          <HeaderOne title={'Terms & Conditions'} backArrow />
          <Card
            style={{
              backgroundColor: COLORS.transparent,
              borderRadius: SIZES.ten,
              height: height * 0.85,
              marginTop: SIZES.twenty * 1.5,
            }}>
            <LinearGradient
              start={{x: 0.2, y: 1}}
              end={{x: 1.25, y: 1}}
              colors={[
                COLORS.charcoalGrey,
                COLORS.darkGrey,
                COLORS.almostBlack,
              ]}
              style={[{flex: 1}, props.style]}>
              <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{paddingBottom: 50}}>
                <Text
                  style={[
                    FONTS.lightFont14,
                    {color: COLORS.white, margin: SIZES.fifteen},
                  ]}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Dignissim suspendisse in est ante in nibh. Tempor orci eu
                  lobortis elementum. Aliquam ut porttitor leo a diam
                  sollicitudin tempor id eu. Maecenas pharetra convallis posuere
                  morbi leo urna. Sapien et ligula ullamcorper malesuada proin
                  libero. Sit amet nulla facilisi morbi tempus iaculis urna. Id
                  consectetur purus ut faucibus pulvinar elementum integer.
                  Risus viverra adipiscing at in tellus integer. Gravida in
                  fermentum et sollicitudin ac. Sagittis nisl rhoncus mattis
                  rhoncus urna. Faucibus interdum posuere lorem ipsum dolor.
                  Orci ac auctor augue mauris augue neque gravida in fermentum.
                  Commodo odio aenean sed adipiscing diam donec adipiscing
                  tristique risus. Metus dictum at tempor commodo.
                  {'\n\n\n'}
                  At elementum eu facilisis sed odio morbi quis commodo odio.
                  Sed sed risus pretium quam vulputate dignissim suspendisse.
                  Dolor sit amet consectetur adipiscing elit pellentesque
                  habitant. Viverra adipiscing at in tellus integer feugiat
                  scelerisque varius morbi. Massa sed elementum tempus egestas
                  sed sed. Id eu nisl nunc mi. Faucibus ornare suspendisse sed
                  nisi lacus sed viverra tellus. Vulputate dignissim suspendisse
                  in est ante in nibh. In nulla posuere sollicitudin aliquam
                  ultrices sagittis orci a scelerisque. Ac turpis egestas sed
                  tempus. Urna cursus eget nunc scelerisque viverra mauris in
                  aliquam sem. Nisi porta lorem mollis aliquam. Ligula
                  ullamcorper malesuada proin libero nunc consequat interdum
                  varius sit.
                  {'\n\n\n'}
                  Mattis rhoncus urna neque viverra justo nec ultrices dui
                  sapien. Adipiscing vitae proin sagittis nisl rhoncus mattis
                  rhoncus. Leo a diam sollicitudin tempor. Dignissim cras
                  tincidunt lobortis feugiat vivamus at augue. Tincidunt augue
                  interdum velit euismod. Neque gravida in fermentum et
                  sollicitudin ac orci. Mauris pellentesque pulvinar
                  pellentesque habitant morbi tristique senectus et netus.
                  Praesent tristique magna sit amet purus gravida quis blandit
                  turpis. Vel pretium lectus quam id leo in vitae turpis massa.
                  Ligula ullamcorper malesuada proin libero nunc. Tempus iaculis
                  urna id volutpat lacus laoreet non.
                  {'\n\n\n'}
                  At tempor commodo ullamcorper a lacus vestibulum sed. In hac
                  habitasse platea dictumst quisque. Nunc non blandit massa enim
                  nec dui nunc mattis. Sed elementum tempus egestas sed sed.
                  Pulvinar mattis nunc sed blandit libero. Elementum tempus
                  egestas sed sed risus pretium quam. Consequat interdum varius
                  sit amet mattis vulputate enim. Sed arcu non odio euismod
                  lacinia at quis risus sed. Venenatis lectus magna fringilla
                  urna porttitor. In est ante in nibh mauris cursus. Enim diam
                  vulputate ut pharetra sit. Enim neque volutpat ac tincidunt.
                  Sem nulla pharetra diam sit amet nisl suscipit adipiscing
                  bibendum. Euismod nisi porta lorem mollis. Lectus nulla at
                  volutpat diam ut venenatis tellus in metus.
                </Text>
              </ScrollView>
            </LinearGradient>
          </Card>
        </View>
      </View>
    </BGView>
  );
}

const styles = StyleSheet.create({});
