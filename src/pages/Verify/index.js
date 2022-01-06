import React, { useEffect } from 'react';
import { ActivityIndicator, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { GetLocation } from '../../utils/location';
import globalStyles from '../../shared/globalStyles';

const Verify = () => {
  const { reset } = useNavigation();
  const { verifyLocationStore } = GetLocation();

  useEffect(async () => {
    verifyLocationStore();

    reset({
      index: 0,
      routes: [{ name: 'BottomAppTabs' }],
    });
  }, []);

  return (
    <View style={globalStyles.container}>
      <ActivityIndicator color="#fff" size="large" />
    </View>
  )
}

export default Verify;