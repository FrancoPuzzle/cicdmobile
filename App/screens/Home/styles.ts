import styled from 'styled-components/native';

import { Typography, Container as _Container } from '../../components';
import { theme, rs } from '../../styles';

export const Container = styled(_Container)(() => ({
  backgroundColor: theme.colors.white,
  justifyContent: 'center',
  alignItems: 'center',
}));

export const Title = styled(Typography)<any>(() => ({
  margin: rs(20),
  textAlign: 'center',
}));
