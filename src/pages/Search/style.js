import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  header: {
    height: '10%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  },

  titleHeader: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '700',
  },

  search: {
    height: '25%',
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },

  input: {
    borderWidth: 0.5,
    borderColor: '#ccc',
    borderRadius: 5,
    width: '80%',
    paddingVertical: 10,
    paddingHorizontal: 5,
    backgroundColor: 'rgba(10, 17, 54, 0.2)'
  },

  button: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    borderRadius: 5,
    backgroundColor: 'rgba(10, 17, 54, 0.8)'
  },

  list: {
    height: '65%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10
  }
});

export default styles;