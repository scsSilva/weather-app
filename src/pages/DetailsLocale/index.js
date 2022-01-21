import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Image, Text, TouchableOpacity, View } from 'react-native';
import { Feather } from '@expo/vector-icons';
import api from '../../utils/api';
import ForecastItemToday from '../../components/ForecastItemToday';
import globalStyles from '../../shared/globalStyles';
import styles from './style';

import { API_KEY } from '@env';

const DetailsLocale = ({ route, navigation }) => {
  const [info, setInfo] = useState({});
  const [loading, setLoading] = useState(true);
  const { data } = route.params;

  useEffect(() => {
    console.log(`DATA: ${data.id}, ${data.name}, ${data.country}, ${data.url}`)
    async function getInfo() {
      const response = await api.get(`/forecast.json?key=${API_KEY}&q=${data.url}&lang=pt`);
      setInfo(response.data);

      setLoading(false);
    }

    getInfo();
  }, []);

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
            <View 
              style={
                { 
                  flexDirection: 'row', 
                  flexGrow: 1, 
                  justifyContent: 'center', 
                  alignItems: 'center' 
                }
              }
            >
              <Text style={styles.name}>{info.location.name}, </Text>
              <Text style={styles.country}>{info.location.country}</Text>
            </View>
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