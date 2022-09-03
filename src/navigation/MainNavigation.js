import React from 'react';
import {StatusBar, StyleSheet, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createSharedElementStackNavigator} from 'react-navigation-shared-element';

import {COLORS, SCREENS} from '../constants';
import Splash from '../screen/auth/Splash';
import Login from '../screen/auth/Login';
import SignUp from '../screen/auth/SignUp';
import SelectCategories from '../screen/auth/SelectCategories';
import ForgetPassword from '../screen/auth/ForgetPassword';
import ResetPassword from '../screen/auth/ResetPassword';
import Verification from '../screen/auth/Verification';
import TaskDetails from '../screen/EditTask/TaskDetails';
import TermsAndConditions from '../screen/content/TermsAndConditions';
import AboutApp from '../screen/content/AboutApp';
import Settings from '../screen/settings/Settings';
import BottomBarApp from './MainBottomBar';
import Edittask from '../screen/EditTask/Edittask';
import GeneralForm from '../screen/generalForm/GeneralForm';
import EditProfile from '../screen/profile/EditProfile';
import ChangePassword from '../screen/profile/ChangePassword';
import Profile from '../screen/profile/Profile';
import Todaystask from '../screen/taskdetails/Todaystask';
import AddTask from '../screen/taskdetails/AddTask';
import NotificationSettings from '../screen/notifications/NotificationSetting';

// import Todaystask from '../screen/taskdetails/Todaystask';
// import Drawer from './Drawer';
// import Edittask from './../screen/EditTask/Edittask';

export default function MainNavigation(props) {
  const Stack = createSharedElementStackNavigator();

  const horizontalAnimation = {
    gestureDirection: 'horizontal',
    headerShown: false,
    cardStyleInterpolator: ({current, layouts}) => {
      return {
        cardStyle: {
          transform: [
            {
              translateX: current.progress.interpolate({
                inputRange: [0, 1],
                outputRange: [layouts.screen.width, 0],
              }),
            },
          ],
        },
      };
    },
  };

  const cardStyleInterpolatorHelper = (current, next) => ({
    cardStyle: {
      opacity: current.progress,
      transform: [
        {
          scale: current.progress.interpolate({
            inputRange: [0, 1],
            outputRange: [2, 1],
          }),
        },
        {
          scale: next
            ? next.progress.interpolate({
                inputRange: [0, 1],
                outputRange: [1, 0],
              })
            : 1,
        },
      ],
    },
  });

  return (
    <View style={{flex: 1}}>
      <StatusBar
        translucent
        backgroundColor={COLORS.transparent}
        barStyle={'light-content'}
      />
      <NavigationContainer>
        <Stack.Navigator
          // screenOptions={{
          //   headerShown: false,
          //   cardStyleInterpolator: ({current, next}) =>
          //     cardStyleInterpolatorHelper(current, next),
          // }}
          screenOptions={horizontalAnimation}
          initialRouteName={SCREENS.Splash}>
          <Stack.Screen name={SCREENS.Splash} component={Splash} />
          <Stack.Screen name={SCREENS.Login} component={Login} />
          <Stack.Screen name={SCREENS.SignUp} component={SignUp} />
          <Stack.Screen name={SCREENS.Verification} component={Verification} />
          <Stack.Screen name={SCREENS.AddTask} component={AddTask} />
          <Stack.Screen
            name={SCREENS.NotificationSetting}
            component={NotificationSettings}
          />

          <Stack.Screen
            name={SCREENS.ForgotPassword}
            component={ForgetPassword}
          />
          <Stack.Screen
            name={SCREENS.ResetPassword}
            component={ResetPassword}
          />
          <Stack.Screen
            name={SCREENS.TermsCondition}
            component={TermsAndConditions}
          />
          <Stack.Screen
            name={SCREENS.SelectCategories}
            component={SelectCategories}
          />
          <Stack.Screen name={SCREENS.BottomBar} component={BottomBarApp} />
          <Stack.Screen name={SCREENS.AboutApp} component={AboutApp} />
          <Stack.Screen name={SCREENS.Settings} component={Settings} />

          <Stack.Screen name={SCREENS.Edittask} component={Edittask} />
          <Stack.Screen name={SCREENS.GeneralForm} component={GeneralForm} />
          <Stack.Screen name={SCREENS.EditProfile} component={EditProfile} />
          <Stack.Screen name={SCREENS.Profile} component={Profile} />
          <Stack.Screen
            name={SCREENS.ChangePassword}
            component={ChangePassword}
          />

          <Stack.Screen name={SCREENS.Todaystask} component={Todaystask} />
          {/* <Stack.Screen name={SCREENS.TaskDetails} component={TaskDetails} /> */}
          {/* <Stack.Screen name={SCREENS.BottomBar} component={BottomBar} /> */}
          {/* <Stack.Screen name={SCREENS.Drawer} component={Drawer} /> */}
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({});
