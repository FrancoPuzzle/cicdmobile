import { View, Text } from 'react-native';
import styled from 'styled-components';
import { Typography as _Typography } from '../../../components';

export const Container = styled(View)({
  flexDirection: 'row',
  alignItems: 'center',
  width: '100%',
});

export const IconContainer = styled(View)({
  alignItems: 'flex-start',
  padding: 5,
});

export const Icon = styled(Text)({
  color: 'white',
  fontSize: 20,
  alignSelf: 'flex-start',
});

export const Typography = styled(_Typography)((p: any) => ({
  marginRight: 35,
  fontSize: p.size || 18,
}));

export const TextContainer = styled(View)({
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
});
