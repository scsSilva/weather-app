import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import styles from './style';

const SearchItem = ({ id, name, country, url }) => {
  // const [favorite, setFavorite] = useState(false);

  // async function toggleFavorite() {
  //   setFavorite(!favorite);

  //   if (favorite) {
  //     let listFavorites = await AsyncStorage.getItem('@favorites');

  //     if (listFavorites == null) {
  //       let favorites = [{ name: name, region: region, country: country }];
  //       await AsyncStorage.setItem('@favorites', favorites.toString());
  //     } else {
        
  //     }
  //   }
  // }
  const { navigate } = useNavigation();

  return (
    <TouchableOpacity
      activeOpacity={0.5}
      style={styles.container}
      onPress={
        () => { 
          navigate('DetailsLocale', { 
            data: { id, name, country, url } 
          }) 
        }
      }
    >
      <View style={styles.locationNames}>
        <Text style={styles.name}>{name}, </Text>
        <Text style={styles.country}>{country}</Text>
      </View>
        {/* <TouchableOpacity
          onPress={() => toggleFavorite()}
        >
          { 
            favorite ? <FontAwesome name='star-o' size={25} color='#fff' /> :
            <FontAwesome name='star' size={25} color='#ffff00' />
          }
        </TouchableOpacity> */}
      <Feather name='chevron-right' color='#fff' size={25} />
    </TouchableOpacity>
  )
}

export default SearchItem;