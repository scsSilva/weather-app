import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    height: 80,
    width: '100%',
    padding: 10,
    flex: 1,
    borderRadius: 10,
    backgroundColor: 'rgba(10, 17, 54, 0.4)',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },

  locationNames: {
    flexDirection: 'row',
  },

  name: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold'
  },

  country: {
    color: '#ccc',
    fontSize: 18,
    fontWeight: '300'
  }
});

export default styles;