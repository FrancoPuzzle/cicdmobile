import { Text } from 'react-native';
import styled from 'styled-components/native';
import { theme, nlz } from '../../styles';
import { TypographyVariant } from './Typography';

type StyledTextProps = {
  color: keyof typeof theme.text;
  textAlign: 'left' | 'right' | 'center';
  size: number;
  variant: keyof typeof TypographyVariant;
};

export const StyledText = styled(Text)((p: StyledTextProps) => ({
  color: theme.text[p.color],
  textAlign: p.textAlign,
  fontSize: nlz(p.size),
}));
