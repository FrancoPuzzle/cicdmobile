import React from 'react';
import { ScrollView } from 'react-native';
import { Container, JSONContainer } from './styles';
import { EmptyContent, Typography } from '../../components';
import { BackButton } from '../../navigation/components';
import { useCharacters } from '../../apollo/querys/characters';

const FetchData = () => {
  const { data, error, loading } = useCharacters();

  return (
    <Container>
      <BackButton />
      {loading ? (
        <EmptyContent text="Loading..." />
      ) : error ? (
        <EmptyContent text={JSON.stringify(error)} />
      ) : (
        <JSONContainer>
          <ScrollView style={{ width: '100%' }}>
            <Typography>{JSON.stringify(data, null, 2)}</Typography>
          </ScrollView>
        </JSONContainer>
      )}
    </Container>
  );
};

export default FetchData;
