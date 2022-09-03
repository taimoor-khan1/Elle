import React, {useEffect} from 'react';
import {View, LogBox} from 'react-native';
import {Provider as PaperProvider} from 'react-native-paper';
import SplashScreen from 'react-native-splash-screen';
import MainNavigation from './src/navigation/MainNavigation';
import AnimatedTextInput from './_App';

const App = () => {
  useEffect(() => {
    LogBox.ignoreAllLogs();
  }, []);
  return (
    <View style={{flex: 1}}>
      <PaperProvider>
        {/* <AnimatedTextInput /> */}
        <MainNavigation />
      </PaperProvider>
    </View>
  );
};

export default App;
