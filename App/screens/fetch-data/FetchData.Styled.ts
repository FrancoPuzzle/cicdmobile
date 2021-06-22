import styled from 'styled-components/native';

import { Container as _Container } from '../../components';
import { theme, rs } from '../../styles';

export const Container = styled(_Container)(() => ({
  backgroundColor: theme.colors.white,
  justifyContent: 'center',
  alignItems: 'center',
}));

export const JSONContainer = styled.View(() => ({
  padding: rs(10),
  flex: 1,
  width: '100%',
  backgroundColor: theme.colors.inactive,
  justifyContent: 'center',
  alignItems: 'center',
}));
