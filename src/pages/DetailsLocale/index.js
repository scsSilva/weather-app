import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Text, TouchableOpacity, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Feather, FontAwesome } from '@expo/vector-icons';
import api from '../../utils/api';
import { GetInfoDate } from '../../utils/date';
import globalStyles from '../../shared/globalStyles';
import styles from './style';

import { API_KEY } from '@env';

const DetailsLocale = ({ route, navigation }) => {
  const [info, setInfo] = useState({});
  const [loading, setLoading] = useState(true);
  const [favorite, setFavorite] = useState(false);
  const { data } = route.params;
  const { days, months } = GetInfoDate();
  const date = new Date();

  useEffect(() => {
    async function getInfo() {
      const response = await api.get(`/current.json?key=${API_KEY}&q=${data.url}&lang=pt`);
      setInfo(response.data);
      console.log(`RESPONSE: ${JSON.stringify(response.data)}`);
      let favorites = await AsyncStorage.getItem('@favorites');

      // if (favorites == null) {
      //   setFavorite(false);
      // } else {
      //   let list = JSON.parse(favorites);
      //   if (list.some(item => item.id == data.id && item.name == data.name && item.country == data.country && item.url == data.url)) {
      //     setFavorite(true);
      //   }
      // }

      setLoading(false);
    }

    getInfo();
  }, []);

  // useEffect(() => {
  //   toggleFavorite();
  // }, [favorite]);

  async function toggleFavorite() {
    if (favorite == true) {
      console.log('NÃO É O FILTER')
      let listFavorites = await AsyncStorage.getItem('@favorites');

      if (listFavorites == null) {
        let favorites = [data];
        await AsyncStorage.setItem('@favorites', JSON.stringify(favorites));
      } else {
        let favorites = JSON.parse(listFavorites);
        // let newListFavorites = favorites.push(data);
        await AsyncStorage.setItem('@favorites', favorites.push(data));
      }
    } else {
      console.log('É O FILTER')
      let listFavorites = await AsyncStorage.getItem('@favorites');
      let newListFavorites = listFavorites.filter((item) => item.id != data.id)
      await AsyncStorage.setItem('@favorites', newListFavorites);
    }
  }

  console.log(`FAVORITE: ${favorite}`)

  return (
    <>
      { loading ? (
        <View style={[globalStyles.container, { justifyContent: 'flex-start' }]}>
          <ActivityIndicator color='#fff' size='large' />
        </View>
      ) : (
        <View style={[globalStyles.container, { justifyContent: 'flex-start' }]}>
          <View style={styles.header}>
            <TouchableOpacity
              onPress={() => navigation.goBack()}
            >
              <Feather name='arrow-left' color='#fff' size={25} />
            </TouchableOpacity>
            <View style={{ flexDirection: 'row' }}>
              <Text style={styles.name}>{info.location.name}, </Text>
              <Text style={styles.country}>{info.location.country}</Text>
            </View>
            <TouchableOpacity
              onPress={
                () => {
                  setFavorite(prev => !prev);
                  toggleFavorite();
                }
              }
            >
              { 
                favorite 
                ? <FontAwesome name='star' color='#ffff00' size={25} /> 
                : <FontAwesome name='star-o' color='#fff' size={25} />
              }
            </TouchableOpacity>
          </View>
          <View style={styles.infoDateAndHour}>
            <Text style={styles.date}>{days[info.location.localtime.split(' ')[1].split('-')[2]]}, {date.getDate()} de {months[date.getMonth()]} de {date.getFullYear()}</Text>
            <Text style={styles.hour}>Última atualização: {info.current.last_updated.split(' ')[1]}</Text>
          </View>
        </View>
      ) }
    </>
  )
}

export default DetailsLocale;