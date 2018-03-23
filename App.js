import React from 'react';
import { Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';
import MapScreen from './screens/MapScreen'
import HomeScreen from './screens/HomeScreen'
import CameraScreen from './screens/CameraScreen'

class App extends React.Component {
  render() {
    return <RootStack/>
  }
}

const RootStack = StackNavigator({
  Home: {
    screen: HomeScreen,
  },
});

export default StackNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    MapScreen: {
      screen: MapScreen,
    },
    CameraScreen: {
      screen: CameraScreen,
    },
  },
  {
    initialRouteName: 'Home',
  }
);
