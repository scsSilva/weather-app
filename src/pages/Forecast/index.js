import React from 'react';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { GetInfoDate } from '../../utils/date';
import ForecastItemToday from '../../components/ForecastItemToday';
import ForecastItemWeek from '../../components/ForecastItemWeek';
import Info from '../../components/Info';
import globalStyles from '../../shared/globalStyles';
import styles from './style';

const Forecast = ({ route, navigation }) => {
  const { data } = route.params;
  const { months } = GetInfoDate();
  const date = new Date();

  return (
    <View style={[globalStyles.container, { justifyContent: 'flex-start', paddingHorizontal: 10, }]}>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
        >
          <Feather name='arrow-left' color="#fff" size={24} />
        </TouchableOpacity>
        <Text style={styles.titleHeader}>Histórico completo</Text>
      </View>
      <View style={styles.today}>
        <View style={styles.headerToday}>
          <Text style={styles.textHeaderSection}>Hoje</Text>
          <Text style={styles.textDate}>{date.getDate()} de {months[date.getMonth()]} de {date.getFullYear()}</Text>
        </View>

        <View style={styles.infosToday}>
          <View style={styles.rowInfos}>
            <Info 
              icon='thermometer'
              title='Temp. Máxima'
              value={data.forecast.forecastday[0].day.maxtemp_c}
              unity='°C'
            />
            <Info 
              icon='thermometer'
              title='Temp. Mínima'
              value={data.forecast.forecastday[0].day.mintemp_c}
              unity='°C'
            />
          </View>

          <View style={styles.rowInfos}>
            <Info 
              icon='wind'
              title='Vento'
              value={data.forecast.forecastday[0].day.maxwind_kph}
              unity='km/h'
            />
            <Info 
              icon='sun'
              title='Índice UV'
              value={data.forecast.forecastday[0].day.uv}
              unity=''
            />
          </View>
        </View>
        
        <View style={styles.list}>
          <FlatList 
            horizontal
            data={data.forecast.forecastday[0].hour}
            ItemSeparatorComponent={() => (
              <View
                style={
                  {
                    width: 20
                  }
                }
              />
            )}
            renderItem={({ item }) => {
              return (
                <ForecastItemToday 
                  hour={item.time.split(' ')[1]}
                  image={item.condition.icon}
                  temp={item.temp_c}
                />
              )
            }}
            keyExtractor={(item) => item.time_epoch.toString()}
            showsHorizontalScrollIndicator={false}
          />
        </View>
      </View>
      <View style={styles.nextDays}>
        <View>
          <Text style={[styles.textHeaderSection, { marginBottom: 10 }]}>Próximos dias</Text>
        </View>

        <FlatList 
          data={data.forecast.forecastday.splice(1, 2)}
          keyExtractor={(item) => item.date_epoch.toString()}
          renderItem={({ item }) => {
            return (
              <ForecastItemWeek 
                date={item.date}
                image={item.day.condition.icon}
                temp={item.day.avgtemp_c}
              />
            )
          }}
          ItemSeparatorComponent={() => (
            <View
              style={
                {
                  height: 5
                }
              }
            />
          )}
        />
      </View>
    </View>
  )
}

export default Forecast;