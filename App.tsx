/* eslint-disable @typescript-eslint/no-unused-vars */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  StatusBar,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';

export default function App() {
  return (
    <>
      <SafeAreaView>
        <MapView
          provider={PROVIDER_GOOGLE}
          style={styles.map}
          region={{
            latitude: 11.61621,
            longitude: 104.90092,
            latitudeDelta: 0.023,
            longitudeDelta: 0.017,
          }}>
          <Marker
            coordinate={{
              latitude: 11.61621,
              longitude: 104.90092,
            }}
            title="American University of Phnom Penh"
          />
        </MapView>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  map: {
    height: '100%',
  },
});

/*const App = () => {
  return (
    <>
      <SafeAreaView>
        <MapView
          provider={PROVIDER_GOOGLE}
          style={styles.map}
          region={{
            latitude: 11.61621,
            longitude: 104.90092,
            latitudeDelta: 0.023,
            longitudeDelta: 0.017,
          }}>
          <Marker
            coordinate={{
              latitude: 11.61621,
              longitude: 104.90092,
            }}
            title="American University of Phnom Penh"
          />
        </MapView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  map: {
    height: '100%',
  },
});

export default App;
*/
