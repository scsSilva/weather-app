import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  header: {
    height: '10%',
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10
  },

  name: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold'
  },

  country: {
    color: '#ccc',
    fontSize: 20,
    fontWeight: '300',
  },

  infoDateAndHour: {
    height: '10%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  },

  date: {
    fontSize: 17,
    fontWeight: '300',
    color: '#ccc'
  },

  hour: {
    color: '#adadad',
    fontSize: 14,
    marginTop: 5,
  }
});

export default styles;