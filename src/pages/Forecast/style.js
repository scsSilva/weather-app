import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  header: {
    height: '10%',
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: '5%'
  },

  titleHeader: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '700',
    flexGrow: 1,
    textAlign: 'center'
  },

  today: {
    height: '55%',
    width: '100%',
    justifyContent: 'center',
    marginBottom: '5%'
  },

  headerToday: {
    height: '10%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10
  },

  textHeaderSection: {
    fontSize: 18,
    color: '#fff',
    fontWeight: '700'
  },

  textDate: {
    fontSize: 16,
    color: '#ccc',
    fontWeight: '300'
  },

  infosToday: {
    height: '60%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-around',
  },

  rowInfos: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },

  list: {
    marginTop: 10,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },

  nextDays: {
    height: '25%',
    width: '100%',
    // backgroundColor: 'green'
  }
});

export default styles;