import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';

export const CHARS_QUERY = gql`
  {
    characters {
      results {
        id
        name
        status
      }
    }
  }
`;

interface Characters {
  id: string;
  name: string;
  status: string;
}

interface Results {
  results: Characters[];
}

type CharsResponse = Results;

export const useCharacters = () => {
  const {
    data = { characters: { results: [] } },
    error,
    ...apollo
  } = useQuery<{
    characters: CharsResponse;
  }>(CHARS_QUERY, {
    fetchPolicy: 'no-cache',
  });

  return { data: data.characters.results, error, ...apollo };
};
