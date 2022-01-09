import React from 'react';
import { Image, Text, View } from 'react-native';
import styles from './style';

const ForecastItemWeek = ({ date, temp, image }) => {
  const dateFormated = date.split('-');

  return (
    <View style={styles.container}>
      <Text style={styles.textDate}>{dateFormated[2]}/{dateFormated[1]}/{dateFormated[0]}</Text>
      <Text style={styles.textTemp}>{temp}°C</Text>
      <Image 
        source={{ uri: `https:${image}` }}
        style={styles.image}
      />
    </View>
  )
}

export default ForecastItemWeek;