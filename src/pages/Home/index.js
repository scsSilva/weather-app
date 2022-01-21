import React, { useContext, useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Image, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Context } from '../../shared/context';
import { GetLocation } from '../../utils/location';
import { GetInfoDate } from '../../utils/date';
import globalStyles from '../../shared/globalStyles';
import api from '../../utils/api';
import styles from './style';

import { API_KEY } from '@env';
import ForecastItemToday from '../../components/ForecastItemToday';

const Home = () => {
  const { navigate } = useNavigation();
  const { location } = useContext(Context);
  const [info, setInfo] = useState({});
  const [loading, setLoading] = useState(false);
  const { getPositionUser } = GetLocation();
  const { days, months } = GetInfoDate();

  async function getInfos() {
    setLoading(true);
    const response = await api.get(`/forecast.json?key=${API_KEY}&q=${location.latitude},${location.longitude}&lang=pt&days=3&aqi=yes`);
    setInfo(response.data);
    setLoading(false);
  }
  
  useEffect(() => {
    if (JSON.stringify(location) != '{}') {
      getInfos();
    }
  }, [location]);

  const date = new Date();

  return (
    <>
      { JSON.stringify(location) == '{}' && (
        <View style={globalStyles.container}>
          <Text style={{ color: '#fff' }}>Acesso negado</Text>
          <Image 
            source={require('../../assets/images/access_denied.png')} 
            style={styles.imageAccessDeined}
          />
          <TouchableOpacity onPress={() => getPositionUser()}>
            <Text style={{ color: '#fff' }}>Permitir acesso</Text>
          </TouchableOpacity>
        </View>
      ) }

      { loading && (
        <View style={globalStyles.container}>
          <ActivityIndicator color="#fff" size="large" />
        </View>
      ) }

      { JSON.stringify(info) != '{}' && (
        <View style={[globalStyles.container, { justifyContent: 'flex-start' }]}>
          <View style={styles.header}>
            <Text style={[globalStyles.text, styles.placeName]}>{info.location.name}, {info.location.country}</Text>
            <Text style={styles.date}>
              {days[date.getDay()]}, {date.getDate()} de {months[date.getMonth()]} de {date.getFullYear()}
            </Text>
            <Text style={styles.hour}>Última atualização: {info.current.last_updated.split(' ')[1]}</Text>
          </View>
          <View style={styles.center}>
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
            <View style={styles.footerOptions}>
              <Text style={styles.todayText}>Hoje</Text>
              <TouchableOpacity
                onPress={() => {
                  navigate('Forecast', {
                    data: info
                  });
                }}
              >
                <Text style={styles.textButton}>Histórico completo</Text>
              </TouchableOpacity>
            </View>

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

export default Home;