import React from 'react';
import { Text, View } from 'react-native';
import { Feather } from '@expo/vector-icons';
import styles from './style';

const Info = ({ icon, title, value, unity }) => {
  return (
    <View style={styles.container}>
      <Feather name={icon} color="#fff" size={24} />
      <View style={styles.info}>
        <Text style={styles.titleInfo}>{title}</Text>
        <Text style={styles.valueInfo}>{value} {unity}</Text>
      </View>
    </View>
  )
}

export default Info;