import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Image, Text, TouchableOpacity, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Feather, FontAwesome } from '@expo/vector-icons';
import api from '../../utils/api';
import ForecastItemToday from '../../components/ForecastItemToday';
import globalStyles from '../../shared/globalStyles';
import styles from './style';

import { API_KEY } from '@env';

const DetailsLocale = ({ route, navigation }) => {
  const [info, setInfo] = useState({});
  const [loading, setLoading] = useState(true);
  const [favorite, setFavorite] = useState(false);
  const { data } = route.params;

  useEffect(() => {
    console.log(`DATA: ${data.id}, ${data.name}, ${data.country}, ${data.url}`)
    async function getInfo() {
      const response = await api.get(`/forecast.json?key=${API_KEY}&q=${data.url}&lang=pt`);
      setInfo(response.data);
      console.log(`RESPONSE: ${JSON.stringify(response.data)}`);
      let favorites = await AsyncStorage.getItem('@favorites');

      if (favorites == null) {
        setFavorite(false);
      } else {
        let list = JSON.parse(favorites);
        // if (list.some((item) => item.id == data.id && item.name == data.name && item.country == data.country && item.url == data.url)) {
        //   setFavorite(true);
        // }
        console.log(`LIST: ${list}`)
      }

      setLoading(false);
    }

    getInfo();
  }, []);

  // useEffect(() => {
  //   toggleFavorite();
  // }, [favorite && !loading]);

  async function toggleFavorite() {
    if (!favorite) {
      console.log('NÃO É O FILTER')
      let listFavorites = await AsyncStorage.getItem('@favorites');

      if (listFavorites == null) {
        console.log('ENTROU AQUI')
        let favorites = [data];
        await AsyncStorage.setItem('@favorites', JSON.stringify(favorites));
      } else {
        let favorites = JSON.parse(listFavorites);
        // let newListFavorites = favorites.push(data);
        await AsyncStorage.setItem('@favorites', JSON.stringify(favorites.push(data)));
      }
    } else {
      console.log('É O FILTER')
      let listFavorites = await AsyncStorage.getItem('@favorites');
      let newListFavorites = listFavorites.filter((item) => item.id != data.id)
      await AsyncStorage.setItem('@favorites', newListFavorites);
    }

    setFavorite(prev => !prev);
  }

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
              onPress={() => toggleFavorite()}
            >
              { 
                favorite 
                ? <FontAwesome name='star' color='#ffff00' size={25} /> 
                : <FontAwesome name='star-o' color='#fff' size={25} />
              }
            </TouchableOpacity>
          </View>
          <View style={styles.infoDateAndHour}>
            <Text style={styles.date}>
              Data local: {info.current.last_updated.split(' ')[0].split('-')[2]}/{info.current.last_updated.split(' ')[0].split('-')[1]}/{info.current.last_updated.split(' ')[0].split('-')[0]}
              </Text>
            <Text style={styles.hour}>Última atualização: {info.current.last_updated.split(' ')[1]}</Text>
          </View>
          <View style={styles.contentCenter}>
            <View style={styles.conditionInfo}>
              <Image
                source={{ uri: `https:${info.current.condition.icon}` }}
                style={{ height: 160, width: 180 }}
              />
              <Text style={styles.conditionText}>{info.current.condition.text}</Text>
            </View>
            <View style={styles.rowConditions}>
              <View style={styles.info}>
                <Text style={styles.infoTitle}>Temperatura</Text>
                <Text style={styles.contentInfo}>{info.current.temp_c}ºC</Text>
              </View>
              <View style={styles.info}>
                <Text style={styles.infoTitle}>Vento</Text>
                <Text style={styles.contentInfo}>{info.current.wind_kph}km/h</Text>
              </View>
              <View style={styles.info}>
                <Text style={styles.infoTitle}>Umidade</Text>
                <Text style={styles.contentInfo}>{info.current.humidity}%</Text>
              </View>
            </View>
          </View>
          <View style={styles.footer}>
            <FlatList 
              horizontal
              data={info.forecast.forecastday[0].hour}
              ItemSeparatorComponent={() => (
                <View
                  style={
                    {
                      width: 20
                    }
                  }
                />
              )}
              renderItem={({ item, index }) => {
                  return (
                    <ForecastItemToday
                      hour={item.time.split(' ')[1]}
                      image={item.condition.icon}
                      temp={item.temp_c}
                    />
                  )
                // }
              }}
              keyExtractor={(item) => item.time_epoch.toString()}
              showsHorizontalScrollIndicator={false}
            />
          </View>
        </View>
      ) }
    </>
  )
}

export default DetailsLocale;