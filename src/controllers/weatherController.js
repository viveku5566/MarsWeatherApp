const nasaService = require('../services/nasaService');

const getPaginatedWeather = async (req, res) => {
  console.log('✅ Controller hit!');
  try {
    const page = parseInt(req.query.page || '1', 10);
    const limit = parseInt(req.query.limit || '5', 10);

    const weatherData = await nasaService.fetchMarsWeather();
    const sols = Object.keys(weatherData).filter((key) => !isNaN(Number(key)));
    const total = sols.length;

    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + limit;

    const paginatedSols = sols.slice(startIndex, endIndex);
    const paginatedData = {};

    paginatedSols.forEach((sol) => {
      paginatedData[sol] = weatherData[sol];
    });

    res.json({
      page,
      limit,
      total,
      data: paginatedData,
    });

  } catch (error) {
    console.error('Failed to fetch paginated weather:', error);
    res.status(500).json({ message: 'Failed to fetch weather data' });
  }
};

module.exports = { getPaginatedWeather };
