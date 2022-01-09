import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    borderRadius: 10,
    width: 150,
    height: 70,
    backgroundColor: 'rgba(10, 17, 54, 0.4)'
  },

  info: {
    marginLeft: 10,
    justifyContent: 'space-around'
  },

  titleInfo: {
    color: '#ccc',
    fontSize: 14,
  },

  valueInfo: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '700'
  }
});

export default styles;