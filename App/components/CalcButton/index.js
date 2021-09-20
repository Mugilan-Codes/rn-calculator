import React from 'react';

import {ButtonContainer, ButtonText} from './styles';

const CalcButton = ({text, color, backgroundColor, isLarge, onPress}) => {
  return (
    <ButtonContainer
      large={isLarge}
      bgColor={backgroundColor}
      onPress={onPress}>
      <ButtonText textColor={color}>{text}</ButtonText>
    </ButtonContainer>
  );
};

export default CalcButton;
