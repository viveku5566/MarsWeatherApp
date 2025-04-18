import React, { useEffect } from 'react';
import { FlatList } from 'react-native';
import { useAppDispatch, useAppSelector } from '../hooks/useReduxHooks';
import { fetchWeatherData } from '../features/weather/weatherSlice';
import { ScreenWrapper, TextLarge } from '../styles/StyledWrapper';
import WeatherCard from '../components/WeatherCard';

const HomeScreen = () => {
  const dispatch = useAppDispatch();
  const { data, status } = useAppSelector((state) => state.weather);

  useEffect(() => {
    dispatch(fetchWeatherData());
  }, [dispatch]);

  const sols = Object.keys(data).filter((key) => !isNaN(Number(key)));

  return (
    <ScreenWrapper>
      <TextLarge>🚀 Mars Weather Forecast</TextLarge>

      <FlatList
        data={sols}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <WeatherCard sol={item} data={data[item]} />
        )}
        ListEmptyComponent={
          status === 'loading' ? (
            <TextLarge>Loading Mars data...</TextLarge>
          ) : status === 'failed' ? (
            <TextLarge>Failed to load Mars data.</TextLarge>
          ) : null
        }
      />
    </ScreenWrapper>
  );
};

export default HomeScreen;
