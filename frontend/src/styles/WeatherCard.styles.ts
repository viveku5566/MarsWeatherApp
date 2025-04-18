import styled from 'styled-components/native';

export const WeatherCardContainer = styled.View`
  background-color: #2a2a3d;
  padding: 16px;
  margin-top: 20px;
  border-radius: 12px;
`;

export const WeatherLabel = styled.Text`
  color: ${(props) => props.theme.colors.text};
  font-size: 16px;
  margin-bottom: 5px;
`;
