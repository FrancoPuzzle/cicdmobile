import * as React from 'react';
import { ActivityIndicator } from 'react-native';
import { Container } from './EmptyContent.Styled';
import { theme } from '../../styles';
import Typography from '../typography';

interface Props {
  text: string;
  spinnerColor: string;
  testID?: string;
}

const EmptyContent = ({ text, spinnerColor, testID }: Props) => {
  return (
    <Container testID={testID}>
      {text ? <Typography>{text}</Typography> : <ActivityIndicator color={spinnerColor} />}
    </Container>
  );
};

EmptyContent.defaultProps = {
  text: 'Empty content',
  spinnerColor: theme.colors.primary,
};

export default EmptyContent;
