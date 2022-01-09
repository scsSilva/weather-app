import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    height: 80,
    width: '100%',
    padding: 10,
    borderRadius: 10,
    backgroundColor: 'rgba(10, 17, 54, 0.4)',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },

  textDate: {
    color: '#ccc',
    fontSize: 17,
  },

  textTemp: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '700',
  },

  image: {
    height: 40,
    width: 40
  },
});

export default styles;