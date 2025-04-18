require('dotenv').config();

const NASA_API_KEY = process.env.NASA_API_KEY;
const NASA_INSIGHT_WEATHER_URL = `https://api.nasa.gov/insight_weather/?api_key=${NASA_API_KEY}&feedtype=json&ver=1.0`;

module.exports = { NASA_INSIGHT_WEATHER_URL };
