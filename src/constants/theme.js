import {Dimensions, Platform, StyleSheet} from 'react-native';
import {getStatusBarHeight} from 'react-native-status-bar-height';

export const {width, height} = Dimensions.get('window');

/* * Colors * */
export const COLORS = {
  primary: '#73064a',
  purplishRed: '#af064a',
  charcoalGrey: '#2d3540',
  dark: '#20242b',
  Skyblue: '#87CEEB',
  darkGrey: '#172027',
  brownGrey: '#9b9b9b',
  gunMetal: '#4a4f5a',
  almostBlack: '#0b1218',
  white: '#ffffff',
  darkblue: '#00008b',
  LightBlack: '#191919',
  black: '#000000',
  black30Opacity: '#0000004D',
  red: '#ff0000',
  neonRed: '#ff0045',
  seaGreen: '#00ff9f',
  gold: '#ffc400',
  orange: '#ff3d00',
  transparent: 'transparent',
};

const appTheme = {COLORS};

export default appTheme;

/* * Fonts * */
export const FONTFAMILY = {
  Light: 'Gopher-Light',
  Medium: 'Gopher-Medium',
  Bold: 'Gopher-Bold',
  Ionicons: 'Ionicons',
  AntDesign: 'AntDesign',
  EvilIcons: 'EvilIcons',
  Entypo: 'Entypo',
  FontAwesome: 'FontAwesome',
  Feather: 'Feather',
  MaterialIcons: 'MaterialIcons',
  MaterialCommunityIcons: 'MaterialCommunityIcons',
  Octicons: 'Octicons',
  SimpleLineIcons: 'SimpleLineIcons',
  Fontisto: 'Fontisto',
};

/* * Images * */
export const IMAGES = {
  Logo: require('../assets/logo.png'),
  LogoHorizontal: require('../assets/logohorizontal.png'),
  SplashGo: require('../assets/splashgo.png'),
  LogoGoogle: require('../assets/logogoogle.png'),
  LogoFacebook: require('../assets/logofacebook.png'),
  LogoApple: require('../assets/logoapple.png'),
  BottomBarCenterButton: require('../assets/bottombarcenterbutton.png'),
  Household: require('../assets/household.png'),
  Finance: require('../assets/finance.png'),
  Flights: require('../assets/flights.png'),
  Flights: require('../assets/flights.png'),
  AddTask: require('../assets/addtask.png'),
  noSignal: require('../assets/noSignal.png'),
  homepurplebox: require('../assets/purplebox.png'),
  Homeblackbox: require('../assets/Homeblackbox.png'),
  Homebox: require('../assets/homebox.png'),
};

/* * Screens * */
export const SCREENS = {
  Splash: 'Splash',
  SignUp: 'SignUp',
  SelectCategories: 'SelectCategories',
  Login: 'Login',
  ForgotPassword: 'ForgotPassword',
  ResetPassword: 'ResetPassword',
  Verification: 'Verification',
  BottomBar: 'BottomBar',
  Home: 'Home',
  Calendar: 'Calendar',
  Notifications: 'Notifications',
  More: 'More',
  Todaystask: 'Todaysatask',
  TaskDetails: 'TaskDetails',
  Settings: 'Settings',
  TermsCondition: 'TermsCondition',
  AboutApp: 'AboutApp',
  Support: 'Support',
  Language: 'Language',
  Profile: 'Profile',
  EditProfile: 'EditProfile',
  Edittask: 'Eidttask',
  AddTask: 'AddTask',
  Drawer: 'Drawer',
  NotificationSetting: 'NotificationSetting',
  GeneralForm: 'GeneralForm',
  ChangePassword: 'ChangePassword',
  TaskDescription: 'TaskDescription',
};

export const SIZES = {
  // global sizes
  five: height * 0.0055,
  ten: height * 0.011,
  fifteen: height * 0.017,
  twenty: height * 0.023,
  twentyWidth: width * 0.05,
  twentyFive: height * 0.03,
  twentyFiveWidth: width * 0.08,
  fifty: height * 0.075,
  fiftyWidth: width * 0.13,

  // font sizes
  h12: width * 0.035,
  h14: width * 0.04,
  h16: width * 0.044,
  h18: width * 0.048,
  h20: width * 0.052,
  h22: width * 0.058,
  h24: width * 0.065,
  body08: width * 0.028,
  body10: width * 0.032,
  body12: width * 0.036,
  body14: width * 0.04,
  body16: width * 0.045,
  body18: width * 0.05,
};

export const FONTS = {
  boldFont12: {
    fontFamily: FONTFAMILY.Bold,
    fontSize: SIZES.fifteen,
  },
  boldFont14: {
    fontFamily: FONTFAMILY.Bold,
    fontSize: SIZES.h14,
  },
  boldFont16: {
    fontFamily: FONTFAMILY.Bold,
    fontSize: SIZES.h16,
  },
  boldFont18: {
    fontFamily: FONTFAMILY.Bold,
    fontSize: SIZES.h18,
  },
  boldFont20: {
    fontFamily: FONTFAMILY.Bold,
    fontSize: SIZES.h20,
  },
  boldFont22: {
    fontFamily: FONTFAMILY.Bold,
    fontSize: SIZES.h22,
  },
  boldFont24: {
    fontFamily: FONTFAMILY.Bold,
    fontSize: SIZES.h24,
  },
  boldFont26: {
    fontFamily: FONTFAMILY.Bold,
    fontSize: SIZES.h24 * 1.75,
  },
  boldFontBig: {
    fontFamily: FONTFAMILY.Bold,
    fontSize: SIZES.h24 * 3.5,
  },
  mediumFont08: {fontFamily: FONTFAMILY.Medium, fontSize: SIZES.body08},
  mediumFont10: {fontFamily: FONTFAMILY.Medium, fontSize: SIZES.body10},
  mediumFont12: {fontFamily: FONTFAMILY.Medium, fontSize: SIZES.body12},
  mediumFont14: {fontFamily: FONTFAMILY.Medium, fontSize: SIZES.body14},
  mediumFont16: {fontFamily: FONTFAMILY.Medium, fontSize: SIZES.body16},
  mediumFont18: {
    fontFamily: FONTFAMILY.Medium,
    fontSize: SIZES.body18,
  },
  lightFont08: {fontFamily: FONTFAMILY.Light, fontSize: SIZES.body08},
  lightFont10: {fontFamily: FONTFAMILY.Light, fontSize: SIZES.body10},
  lightFont12: {fontFamily: FONTFAMILY.Light, fontSize: SIZES.body12},
  lightFont14: {fontFamily: FONTFAMILY.Light, fontSize: SIZES.body14},
  lightFont16: {fontFamily: FONTFAMILY.Light, fontSize: SIZES.body16},
  lightFont18: {
    fontFamily: FONTFAMILY.Light,
    fontSize: SIZES.body18,
  },
};

export const STYLES = StyleSheet.create({
  container: {
    backgroundColor: COLORS.secondary,

    flex: 1,
  },
  __container: {
    backgroundColor: COLORS.secondary,
    flex: 1,
    borderRadius: SIZES.fifty,
  },
  containerWithTopImage: {
    backgroundColor: COLORS.secondary,
    flex: 1,
  },
  splashLogo: {
    width: SIZES.fifteen * 13,
    height: SIZES.fifteen * 13,
    alignSelf: 'center',
  },
  loginView: {
    flex: 1,
    width: '100%',
    marginTop: SIZES.twenty,
    paddingHorizontal: SIZES.twenty,
  },
  mediumText: {
    fontFamily: FONTFAMILY.Medium,
  },
  boldText: {
    fontFamily: FONTFAMILY.Bold,
  },
  headingText: {
    fontFamily: FONTFAMILY.Bold,
    fontSize: SIZES.twenty + 5,
    color: COLORS.black,
  },
  paragraphText: {
    fontFamily: FONTFAMILY.Medium,
    fontSize: SIZES.fifteen - 1,
    color: COLORS.black,
  },
  drawerItem: {
    paddingHorizontal: SIZES.fifteen + 10,
    paddingVertical: SIZES.fifteen,
    alignItems: 'center',
    borderRadius: SIZES.fifteen,
  },
  drawerIcon: {
    fontSize: SIZES.fifteen + 10,
  },
  drawerText: {
    fontSize: SIZES.fifteen,
    fontFamily: FONTFAMILY.Medium,
    color: COLORS.black,
    marginHorizontal: SIZES.fifteen - 5,
  },
  horLine: {
    height: 0.8,
    marginVertical: SIZES.fifteen,
    backgroundColor: COLORS.brownGrey,
  },
  shadow: {
    backgroundColor: COLORS.secondary,
    shadowColor: COLORS.black,
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 3.0,
    elevation: 5,
  },
});

/* * Constants * */
export const CONSTANTS = {
  /* * Api Calls * */
  API_CALLS: {
    BASE_URL: 'https://indelible.reignsol.net/api/v1/',
    IMAGE_URL: 'https://indelible.reignsol.net/',

    LOGIN: 'auth/login',
    LOGOUT: 'auth/sign-out',
    SIGN_UP: 'auth/register',
    VERIFY_OTP: 'auth/verify-otp',
    FORGOT_PASSWORD: 'auth/forgot-password',
    RESET_PASSWORD: 'auth/reset-password',
    CHANGE_PASSWORD: 'auth/change-password',
    GET_PROFILE: 'auth/getProfile',
    UPDATE_PROFILE: 'auth/update-profile',
    GET_CONTENT: 'contents',
  },

  /* * Firebase Constants * */
  FIREBASE: {
    CHAT: 'Chat',
    MESSAGES: 'messages',
    USERS: 'Users',
    CHATHEADS: 'ChatHeads',
    READ: 'read',
    TOKEN: 'Tokens',
    FCM: 'https://fcm.googleapis.com/fcm/send',
  },

  /* * Destinations * */
  DESTINATIONS: {
    FORGOT_PASSWORD: 'forgot_password',
    SIGN_UP: 'sign_up',
  },

  /* * Storage * */
  STORAGE: {
    ACCESS_TOKEN: 'access_token',
    USER: 'user',
  },

  /* * Redux Action Types * */
  REDUX_ACTIONS: {
    AUTHENTICATE: 'AUTHENTICATE',
    SIGNUP: 'SIGNUP',
    LOGOUT: 'LOGOUT',

    ACCESSTOKEN: 'ACCESSTOKEN',
    USERPROFILE: 'USERPROFILE',
    CONTENT: 'CONTENT',
  },
};
