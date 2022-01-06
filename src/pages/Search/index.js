import React from 'react';
import { View, Text } from 'react-native';
import globalStyles from '../../shared/globalStyles';

const Search = () => {
  return (
    <View style={globalStyles.container}>
      <Text style={{ color: "#fff" }}>Página de Busca de Cidades!</Text>
    </View>
  )
}

export default Search;