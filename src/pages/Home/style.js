import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  accessDeinedText: {
    color: '#fff',
    fontSize: 23,
    fontWeight: '700'
  },

  buttonAllowAccess: {
    backgroundColor: 'rgb(10, 17, 54)',
    height: 50,
    width: 150,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    marginTop: 20
  },

  header: {
    height: '22%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },

  placeName: {
    fontSize: 23,
    marginBottom: 20
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

  center: {
    height: '58%',
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
    paddingHorizontal: 20,
    justifyContent: 'space-between'
  },

  footerOptions: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10
  },

  todayText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '700'
  },

  textButton: {
    color: '#2980b9',
    fontSize: 16,
  }
});

export default styles;