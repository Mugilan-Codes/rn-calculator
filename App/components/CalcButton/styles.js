import styled from 'styled-components/native';

import {WINDOW_WIDTH} from '../../utils/Dimensions';

export const ButtonContainer = styled.TouchableOpacity`
  width: ${props => (props.large ? WINDOW_WIDTH / 2 : WINDOW_WIDTH / 4)}px;
  background-color: ${props => props.bgColor || '#14141D'};
  padding: 25px;
  border: 2px solid black;
  border-radius: 10px;
`;

export const ButtonText = styled.Text`
  text-align: center;
  font-size: 25px;
  color: ${props => props.textColor || '#FFFFFF'};
`;
