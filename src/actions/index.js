import axios from 'axios';

const API_KEY = 'af0ca2a8f8b55ea4eb97f93df8575ce7';
// This is template string formating unique to es6 syntax :)
const ROOT_URL = `https://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

// NOTE: actions are functions that always return an object and these objects
// ALWAYS have a type assotiation.

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  // more es6 query string syntax
  const url = `${ROOT_URL}&q=${city},us`;
  const request = axios.get(url);

  console.log('Request: ',request)

  return {
    type: FETCH_WEATHER,
    payload: request
  }
}
