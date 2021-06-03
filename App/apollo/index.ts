import { ApolloClient, ApolloLink, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { createUploadLink } from 'apollo-upload-client';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { USER_TOKEN } from '../utils/constant';
import Config from '../config';

const authLink = setContext(async (_req, { headers }) => {
  const token = await AsyncStorage.getItem(USER_TOKEN);
  return {
    ...headers,
    headers: {
      Authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const uploadLink = createUploadLink({
  uri: Config.API_URL,
}) as unknown as ApolloLink;

const client = new ApolloClient({
  link: authLink.concat(uploadLink),
  cache: new InMemoryCache({ addTypename: false }),
});

export async function renewLink() {
  client.link = authLink.concat(uploadLink);
}
export default client;
