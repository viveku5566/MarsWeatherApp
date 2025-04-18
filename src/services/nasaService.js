const axios = require('axios');
const { NASA_INSIGHT_WEATHER_URL } = require('../config/apiConfig');

exports.fetchMarsWeather = async () => {
  const response = await axios.get(NASA_INSIGHT_WEATHER_URL);
  return response.data;
};
