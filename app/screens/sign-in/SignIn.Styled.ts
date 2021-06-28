import styled from 'styled-components/native';
import { View, TextInput } from 'react-native';
import { rs, theme } from '../../styles';
import { Container as _Container } from '../../components';

export const Container = styled(_Container)(() => ({
  backgroundColor: theme.colors.white,
}));

export const Content = styled(View)(() => ({
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
}));

export const _TextInput = styled(TextInput)(() => ({
  width: '90%',
  justifyContent: 'center',
  alignItems: 'center',
  border: '1px solid black',
  margin: rs(15),
}));
