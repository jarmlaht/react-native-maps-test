import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { MapView, Marker } from 'expo';

export default class MapScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {      
      region: this.getInitialState(),
      latest: 0,
      markers: [
        {
          identifier: 'apina',
          latlng: {latitude: 61.4518115, longitude: 23.8477243},
          title: 'Pub Kultainen Apina',
          description: 'Pub Kultainen Apina'
        },
        {
          identifier: 'kalkunpub',
          latlng: {latitude: 61.4973998, longitude: 23.5847518},
          title: 'Kalkun Pub',
          description: 'Kalkun Pub'
      }
      
      ]
    };

    this.onRegionChangeComplete = this.onRegionChangeComplete.bind(this)
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

  onRegionChangeComplete(region) {
    let now = new Date().valueOf()
    if (now > (this.state.latest + 100)) {
      this.setState({ region: region });
      this.setState({latest: now})
    }
  }

  focusMap(markers, animated) {
    const identifiers = markers.map(m => m.identifier)
    console.log(identifiers)
    //console.log(this.map)
    this.map.fitToSuppliedMarkers(identifiers, animated);
    debugger
  }

  render() {
    const markers = this.state.markers
    const that = this;
    return (
      <View style={{ flex: 1 }}>
        <MapView
            style={{ flex: 4 }}
            ref={ref => { this.map = ref; }}
            region={this.state.region}
            onRegionChangeComplete={this.onRegionChangeComplete}>
            {this.state.markers.map(marker => (
                <MapView.Marker
                    coordinate={marker.latlng}
                    title={marker.title}
                    description={marker.description}
                    key={marker.latlng.latitude}/>
            ))}
        </MapView>
        <View style={{ flex: 1, flexDirection: 'row'}}>
          <View style={{flex: 1, flexDirection: 'column'}}>
            <Text>Latitude: {this.state.region.latitude}</Text>
            <Text>Longitude: {this.state.region.longitude}</Text>
          </View>
          <Button
                title="Markers"
                onPress={() => that.focusMap(markers, true)
                }/>
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

