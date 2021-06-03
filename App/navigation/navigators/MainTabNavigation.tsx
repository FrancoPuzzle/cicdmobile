import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen, FetchScreen } from '../../screens';
import Routes from '../Routes';

const MainTabNavigation: React.FC = () => {
  const { Navigator, Screen } = createStackNavigator();

  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name={Routes.HOME} component={HomeScreen} />
      <Screen name={Routes.FETCH_DATA} component={FetchScreen} />
    </Navigator>
  );
};

export default MainTabNavigation;
