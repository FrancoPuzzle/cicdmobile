//@ts-nocheck
import React from 'react';
import { Provider } from 'react-redux';
import { ApolloProvider } from '@apollo/react-hooks';
import AppNavigator from './navigation/AppNavigator';
import { store } from './redux/store';
import client from './apollo';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles';
import StorybookUIRoot from '../storybook';
import Config from './config';

const App = () => {
  if (Config.isStorybook) return <StorybookUIRoot />;

  return (
    <ThemeProvider theme={theme}>
      <ApolloProvider client={client}>
        <Provider store={store}>
          <AppNavigator />
        </Provider>
      </ApolloProvider>
    </ThemeProvider>
  );
};

export default App;
