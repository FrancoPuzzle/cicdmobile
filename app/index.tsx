//@ts-nocheck
import React from 'react';
import { Provider } from 'react-redux';
import AppNavigator from './navigation/AppNavigator';
import { store } from './redux/store';
import StorybookUIRoot from '../storybook';
import Config from './config';

const App = () => {
  if (Config.isStorybook) return <StorybookUIRoot />;

  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
};

export default App;
