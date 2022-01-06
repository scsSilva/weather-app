import { StyleSheet } from 'react-native';
import Constans from 'expo-constants';

const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#010414',
    paddingTop: Constans.statusBarHeight,
    alignItems: 'center',
    justifyContent: 'center',
  },

  text: {
    color: '#fff',
    fontSize: 17
  }
});

export default globalStyles;