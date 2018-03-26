import React from 'react';
import { Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';
import MapScreen from './screens/MapScreen'
import HomeScreen from './screens/HomeScreen'
import BarCodeScannerScreen from './screens/BarCodeScannerScreen'

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
    BarCodeScannerScreen: {
      screen: BarCodeScannerScreen,
    },
  },
  {
    initialRouteName: 'Home',
  }
);
