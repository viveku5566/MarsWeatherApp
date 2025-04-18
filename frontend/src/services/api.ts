export const BACKEND_BASE_URL = 'http://localhost:5000';

export const fetchWeatherData = async () => {
  try {
    const response = await fetch(`${BACKEND_BASE_URL}/api/weather`);
    if (!response.ok) {
      throw new Error('Failed to fetch weather data');
    }
    return await response.json();
  } catch (error) {
    console.error('API fetch error:', error);
    throw error;
  }
};
