import { API_KEY } from '@env';
import axios from 'axios';

// export function Api() {
//   const getInfoWeatherNowToCoords = (latitude, longitude) => {
//     console.log(`APIKEY: ${API_KEY} - LATITUDE: ${latitude} - LONGITUDE: ${longitude}`)

//     let local = '';

//     fetch(`https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${latitude},${longitude}&lang=pt`);

//     console.log(local)

//     // return infos;
//   }

//   return {
//     getInfoWeatherNowToCoords,
//   }
// }

const api = axios.create({
  baseURL: `http://api.weatherapi.com/v1`,
});

export default api;