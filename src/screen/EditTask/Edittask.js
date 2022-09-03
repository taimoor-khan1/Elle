import React from 'react';
import {useWindowDimensions} from 'react-native';
import TaskDetails from './TaskDetails';
import {Activity} from './Activity';

import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import {BGView} from '../../components';
import _TabBar from './../../components/_TabBar';

export default Edittask = props => {
  const renderScene = SceneMap({
    first: () => <TaskDetails {...props} />,
    second: () => <Activity {...props} />,
  });

  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'first', title: 'Edit task'},
    {key: 'second', title: 'Activity'},
  ]);
  return (
    <BGView>
      <TabView
        renderTabBar={_TabBar}
        navigationState={{index, routes}}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{width: layout.width}}
      />
    </BGView>
  );
};
