import styled from 'styled-components/native';

export const ScreenWrapper = styled.View`
  flex: 1;
  background-color: ${(props) => props.theme.colors.background};
  padding: 16px;
`;

export const TextLarge = styled.Text`
  color: ${(props) => props.theme.colors.text};
  font-size: 24px;
  font-weight: bold;
`;
