import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { MapView, Marker } from 'expo';

export default class MapScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {      
      region: this.getInitialState(),
      latest: 0,
      markers: [
        {
            latlng: {latitude: 61.4436459, longitude: 23.8466622},
            title: 'Pub Kultainen Apina',
            description: 'Pub Kultainen Apina'
        }
      ]
    };

    this.onRegionChange = this.onRegionChange.bind(this)
    this.getInitialState = this.getInitialState.bind(this)
  }
  
  getInitialState() {
    return {
      latitude: 61.4465794,
      longitude: 23.8537861,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    };
  }

  onRegionChange(region) {
    let now = new Date().valueOf()
    if (now > (this.state.latest + 100)) {
      this.setState({ region: region });
      this.setState({latest: now})
    }
  }

  render() {
    console.log(this.state.markers)
    return (
      <View style={{ flex: 1 }}>
        <MapView
            style={{ flex: 4 }}
            region={this.state.region}
            onRegionChange={this.onRegionChange}>
            {this.state.markers.map(marker => (
                <Marker
                    coordinate={marker.latlng}
                    title={marker.title}
                    description={marker.description}/>
            ))}
        </MapView>
        <View style={{ flex: 1 }}>
          <Text>Latitude: {this.state.region.latitude}</Text>
          <Text>Longitude: {this.state.region.longitude}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

