import React from 'react';

import { ButtonTouchableStyle, Title, getSizeStyle } from './Button.Styled';
import AnimatedSqueeze from '../animated-squeeze';

export type Type = 'primary' | 'secondary';
export type Size = 'small' | 'medium' | 'big' | 'auto';

interface ButtonProps {
  text: string;
  type: Type;
  size: Size;
  onPress: () => void;
  disabled: boolean;
  testID?: string;
}

const Button = ({ text, onPress, type, size, disabled, testID }: ButtonProps) => (
  <AnimatedSqueeze
    testID={testID}
    disabled={disabled}
    onPress={onPress}
    touchableStyle={ButtonTouchableStyle({ disabled, type })}
    viewStyle={getSizeStyle(size)}
  >
    <Title type={type}>{text}</Title>
  </AnimatedSqueeze>
);

Button.defaultProps = {
  type: 'primary',
  disabled: false,
  size: 'medium',
  onPress: () => {},
  testID: null,
};

export default Button;
