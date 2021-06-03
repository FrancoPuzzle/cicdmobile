import React from 'react';
import { ActivityIndicator } from 'react-native';
import { Container } from '../../components';

const Initializing: React.FC = () => {
  return (
    <Container style={{ justifyContent: 'center', alignItems: 'center' }}>
      <ActivityIndicator size="large" color="red" />
    </Container>
  );
};

export default Initializing;
