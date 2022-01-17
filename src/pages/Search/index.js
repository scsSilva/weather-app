import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { API_KEY } from '@env'
import api from '../../utils/api';
import globalStyles from '../../shared/globalStyles';
import styles from './style';

const Search = () => {
  const [citySearch, setCitySearch] = useState(null);

  async function getLocations() {
    const response = await api.get(`/search.json?key=${API_KEY}&q=${citySearch}&lang=pt`);
    console.log(`DATA: ${JSON.stringify(response.data)}`)
  }

  return (
    <View style={[globalStyles.container, { justifyContent: 'flex-start' }]}>
      <View style={styles.header}>
        <Text style={styles.titleHeader}>Pesquisar</Text>
      </View>
      <View style={styles.search}>
        <View style={styles.input}>
          <TextInput 
            placeholder='Informe o local'
            value={citySearch}
            onChangeText={(value) => setCitySearch(value)}
            placeholderTextColor='#ccc'
            style={{ color: '#fff' }}
          />
        </View>
        <TouchableOpacity 
          onPress={() => getLocations()}
          style={styles.button}
        >
          <Feather name='search' color='#fff' size={25} />
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Search;