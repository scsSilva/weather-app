import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  imageAccessDeined: {
    height: 100,
    width: 100,
  },

  header: {
    height: '20%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },

  placeName: {
    fontSize: 23,
    marginBottom: 20
  },

  date: {
    fontSize: 15,
    fontWeight: '300',
    color: '#ccc'
  },

  center: {
    height: '60%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-around',
    padding: 10,
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
    padding: 8,
    borderRadius: 5,
    borderWidth: 0.5,
    borderStyle: 'solid',
    borderColor: 'rgba(204, 204, 204, 0.5)'
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
    padding: 10,
    backgroundColor: 'blue'
  }
});

export default styles;