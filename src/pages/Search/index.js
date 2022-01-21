import React, { useEffect, useState } from 'react';
import { Keyboard, View, Text, TextInput, TouchableOpacity, FlatList } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { API_KEY } from '@env'
import api from '../../utils/api';
import globalStyles from '../../shared/globalStyles';
import NoData from '../../assets/images/nodata.svg';
import styles from './style';
import SearchItem from '../../components/SearchItem';

const Search = () => {
  const [citySearch, setCitySearch] = useState(null);
  const [data, setData] = useState([]);
  const [keyboardShow, setKeyboardShow] = useState(false);

  async function getLocations() {
    const response = await api.get(`/search.json?key=${API_KEY}&q=${citySearch}&lang=pt`);
    setData(response.data);
  }

  useEffect(() => {
    const keyboardShow = Keyboard.addListener('keyboardDidShow', () => {
      setKeyboardShow(true);
    });

    const keyboardHide = Keyboard.addListener('keyboardDidHide', () => {
      setKeyboardShow(false);
    });

    return () => {
      keyboardShow.remove();
      keyboardHide.remove();
    }  
  }, []);

  return (
    <View style={[globalStyles.container, { justifyContent: 'flex-start' }]}>
      { !keyboardShow && (
        <View style={styles.header}>
          <Text style={styles.titleHeader}>Pesquisar</Text>
        </View>
      ) }
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
      <View style={styles.list}>
        { data.length == 0 ? (
          <> 
            { !keyboardShow && (
              <NoData 
                height="50%"
                width="50%"
              />
             ) }
            <Text 
              style={
                { 
                  color: '#fff', 
                  fontSize: 20, 
                  fontWeight: 'bold',
                  marginTop: 10
                }
              }
            >
              Pesquise alguma localidade
            </Text>
          </>
        ) : (
          <FlatList 
            data={data}
            ItemSeparatorComponent={() => (
              <View style={{ height: 10 }} />
            )}
            renderItem={({ item }) => (
              <SearchItem 
                id={item.id}
                name={item.name}
                country={item.country}
                url={item.url}
              />
            )}
            style={{ width: '95%' }}
            keyExtractor={(item) => item.id.toString()}
          />
        ) }
      </View>
    </View>
  )
}

export default Search;