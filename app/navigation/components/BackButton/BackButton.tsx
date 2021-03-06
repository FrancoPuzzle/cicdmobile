import * as React from 'react';
import { TouchableOpacity, ViewStyle, TextStyle } from 'react-native';
import { Icon, Typography, Container, IconContainer, TextContainer } from './styles';
import { theme } from '../../../styles';
import { Navigator } from '../../index';

interface Props {
  text: string;
  style: ViewStyle;
  iconStyle: TextStyle;
  textSize: number;
  size: number;
  iconColor: keyof typeof theme.text | keyof typeof theme.colors | keyof typeof theme.ui;
  onPress: () => void;
  textColor: keyof typeof theme.text;
  testID?: string;
}

const BackButton = ({ text, style, textSize, textColor, testID }: Props) => {
  const { goBack } = Navigator();
  return (
    <TouchableOpacity testID={testID} onPress={goBack} style={{ width: '100%' }}>
      <Container style={style}>
        <IconContainer>
          <Icon>Back</Icon>
        </IconContainer>
        {!!text && (
          <TextContainer>
            <Typography size={textSize} color={textColor}>
              {text}
            </Typography>
          </TextContainer>
        )}
      </Container>
    </TouchableOpacity>
  );
};

BackButton.defaultProps = {
  text: '',
  style: {},
  iconStyle: {},
  textSize: 18,
  size: 20,
  iconColor: theme.text.primary,
  textColor: 'primary',
  onPress: () => {},
  testID: null,
};

export default BackButton;
