import React from 'react';
import { Text, View, Button } from 'react-native';

export default class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <View style={{paddingTop: 10, paddingBottom: 10}}>
            <Button
                title="Map screen"
                onPress={() => this.props.navigation.navigate('MapScreen')}/>
        </View>
        <View style={{paddingBottom: 10}}>
            <Button
                title="Barcode scanner screen"
                onPress={() => this.props.navigation.navigate('BarCodeScannerScreen')}/>
        </View>
      </View>
    );
  }
}
