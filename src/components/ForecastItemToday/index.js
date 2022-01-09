import React from 'react';
import { Image, Text, View } from 'react-native';
import styles from './style';

const ForecastItemToday = ({ image, hour, temp }) => {
  return (
    <View style={[styles.container, { justifyContent: 'center', alignItems: 'center' }]}>
      <View style={styles.left}>
        <Image 
          source={{ uri: `https:${image}` }}
          style={styles.image}
        />
      </View>
      <View style={styles.right}>
        <Text style={styles.hour}>{hour}</Text>
        <Text style={styles.temp}>{temp}°C</Text>
      </View>
    </View>
  )
}

export default ForecastItemToday;