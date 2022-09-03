import React, { useCallback, useRef, useState } from 'react';
import { RefreshControl, SafeAreaView, StyleSheet, Text, View,Alert } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { COLORS, height, SIZES } from '../../constants';
import ListItem from './ListItem';

export default function SwipingList() {
  const [tasks, setTasks] = useState(Notifications);

  const onDismiss = useCallback((task) => {
    setTasks((notification) => notification.filter((item) => item.id !== task.id))

  }, []);

  const scrollRef = useRef(null);

  const [refreshing, setRefreshing] = React.useState(false);
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);

  const wait = (timeout:any) => {
    return new Promise(resolve => setTimeout(resolve, timeout));
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView ref={scrollRef} style={{ flex: 1 }}
      contentContainerStyle={{paddingBottom: height*0.25}} 
      showsVerticalScrollIndicator={false}
      renderToHardwareTextureAndroid
      refreshControl={ <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
    }
      >
        {Notifications.map((task,index) => (
          <ListItem
            simultaneousHandlers={scrollRef}
            key={index}
            task={task}
            onDismiss={onDismiss}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: BACKGROUND_COLOR,
    backgroundColor: 'transparent',
  },
  title: {
    fontSize: 60,
    marginVertical: SIZES.twenty,
    paddingLeft: '5%',
  },
});


// export { TaskInterface };


const Notifications = [
    {
      id: 1,
      name: 'WhoAmI',
      details:
        'Your pizza order to snack corner has been accepted and being processed.',
    },
    {
      id: 2,
      name: 'WhoAmI',
      details: 'A new Snacks Corner is being loved by more people around you.',
    },
    {
      id: 3,
      name: 'WhoAmI',
      details: 'A new Snacks Corner is being loved by more people around you.',
    },
    {
      id: 4,
      name: 'WhoAmI',
      details: 'A new Snacks Corner is being loved by more people around you.',
    },
    {
      id: 5,
      name: 'WhoAmI',
      details: 'A new Snacks Corner is being loved by more people around you.',
    },
    {
      id: 6,
      name: 'WhoAmI',
      details: 'A new Snacks Corner is being loved by more people around you.',
    },
    {
      id: 7,
      name: 'WhoAmI',
      details: 'A new Pizza Corner is being loved by more people around you.',
    },
    {
      id: 8,
      name: 'WhoAmI',
      details: 'A new roll center is being loved by more people around you.',
    },
    {
      id: 9,
      name: 'WhoAmI',
      details: 'A new Crispy Chicken is being loved by more people around you.',
    },
    {
      id: 10,
      name: 'WhoAmI',
      details: 'A new Snacks Corner is being loved by more people around you.',
    },
  ];
  