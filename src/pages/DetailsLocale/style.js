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
  },

  contentCenter: {
    height: '60%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-around',
  },

  conditionInfo: {
    alignItems: 'center',
    justifyContent: 'center',
    height: '65%',
    width: '100%',
  },

  conditionText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '700'
  },

  rowConditions: {
    height: '35%',
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  
  info: {
    alignItems: 'center',
    justifyContent: 'space-around',
    padding: 10,
    borderRadius: 5,
    backgroundColor: 'rgba(10, 17, 54, 0.4)'
  },

  infoTitle: {
    color: '#ccc',
    fontSize: 16,
  },

  contentInfo: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold'
  },

  footer: {
    height: '20%',
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
  }
});

export default styles;