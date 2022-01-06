import React, { useContext, useEffect, useState } from 'react';
import { ActivityIndicator, Image, Text, TouchableOpacity, View } from 'react-native';
import { Context } from '../../shared/context';
import { GetLocation } from '../../utils/location';
import globalStyles from '../../shared/globalStyles';
import api from '../../utils/api';
import styles from './style';

import { API_KEY } from '@env';

const Home = () => {
  const { location } = useContext(Context);
  const [info, setInfo] = useState({});
  const [loading, setLoading] = useState(false);
  const { getPositionUser } = GetLocation();

  async function getInfos() {
    setLoading(true);
    const response = await api.get(`/forecast.json?key=${API_KEY}&q=${location.latitude},${location.longitude}&lang=pt`);
    setInfo(response.data);
    setLoading(false);
    console.log(info);
  }
  
  useEffect(() => {
    if (JSON.stringify(location) != '{}') {
      getInfos();
    }
  }, [location]);

  const date = new Date();
  const days = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];
  const months = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
  
  let image = {uri: "https://cdn.weatherapi.com/weather/64x64/day/116.png"}

  return (
    <>
      { JSON.stringify(location) == '' && (
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

      { loading && <ActivityIndicator color="#fff" size="large" /> }

      { JSON.stringify(info) != '{}' && (
        <View style={[globalStyles.container, { justifyContent: 'flex-start' }]}>
          <View style={styles.header}>
            <Text style={[globalStyles.text, styles.placeName]}>{info.location.name}, {info.location.tz_id.split('/')[1]}</Text>
            <Text style={styles.date}>
              {days[date.getDay()]}, {date.getDate()} de {months[date.getMonth()]} de {date.getFullYear()}
            </Text>
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
              <Text>Hoje</Text>
              <TouchableOpacity
                onPress={() => {}}
              >
                <Text>Próximos dias</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      ) }
    </>
  )
}

export default Home;

// return (
//   <View style={globalStyles.container}>
//     { JSON.stringify(location) == '{}' && (
//       <>
//         <Text style={{ color: '#fff' }}>Acesso negado</Text>
//         <Image 
//           source={require('../../assets/images/access_denied.png')} 
//           style={styles.imageAccessDeined}
//         />
//         <TouchableOpacity onPress={() => getPositionUser()}>
//           <Text style={{ color: '#fff' }}>Permitir acesso</Text>
//         </TouchableOpacity>
//       </>
//     ) }

//     { loading && <ActivityIndicator color="#fff" size="large" /> }

//     { JSON.stringify(info) != '{}' && (
//       <>
//         <Text style={{ color: "#fff" }}>{info.location.name}, {info.location.region}</Text>
//         <Text style={{ color: "#fff" }}>Temperatura: {info.current.temp_c}</Text>
//         <Text style={{ color: "#fff" }}>Condição: {info.current.condition.text}</Text>
//       </>
//     ) }
//   </View>
// )