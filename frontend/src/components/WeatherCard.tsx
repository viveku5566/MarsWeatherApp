import React from 'react';
import { WeatherCardContainer, WeatherLabel } from '../styles/WeatherCard.styles';

interface Props {
  sol: string;
  data: any;
}

const WeatherCard: React.FC<Props> = ({ sol, data }) => {
  return (
    <WeatherCardContainer>
      <WeatherLabel>Sol: {sol}</WeatherLabel>
      <WeatherLabel>Temp (°C): {data?.AT?.av ?? 'N/A'}</WeatherLabel>
      <WeatherLabel>Pressure (Pa): {data?.PRE?.av ?? 'N/A'}</WeatherLabel>
      <WeatherLabel>Wind (m/s): {data?.HWS?.av ?? 'N/A'}</WeatherLabel>
    </WeatherCardContainer>
  );
};

export default WeatherCard;
