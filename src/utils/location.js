import React, { useContext } from 'react';
import * as Location from 'expo-location';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Context } from '../shared/context';

export function GetLocation() {
  const { setLocation } = useContext(Context);

  const getPositionUser = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();

    if (status == 'granted') {
      let location = await Location.getCurrentPositionAsync({});
      await AsyncStorage.setItem('@location', JSON.stringify(location.coords));
      setLocation(location.coords);
    }
  }

  const verifyLocationStore = async () => {
    console.log('ENTREI NO VERIFY_LOCATION');

    let locationStore = await AsyncStorage.getItem('@location');

    if (locationStore != null) {
      setLocation(JSON.parse(locationStore));
    } else {
      getPositionUser();
    }
  }

  return {
    getPositionUser,
    verifyLocationStore,
  }
}