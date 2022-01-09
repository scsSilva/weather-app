import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    height: 70,
    width: 120,
    paddingHorizontal: 5,
    borderRadius: 5,
    backgroundColor: 'rgba(10, 17, 54, 0.4)',
    flexDirection: 'row'
  },

  left: {
    height: 50,
    width: '40%',
    alignItems: 'center',
    justifyContent: 'center',
  },

  image: {
    height: 30,
    width: 30,
  },

  right: {
    height: 50,
    width: '60%',
    alignItems: 'flex-end',
    justifyContent: 'space-around',
  },

  hour: {
    color: '#ccc',
    fontSize: 14,
  },

  temp: {
    color: '#fff',
    fontSize: 18
  }
});

export default styles;