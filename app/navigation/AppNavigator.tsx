import React from 'react';
import { useSelector } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { AuthNavigation, MainTabNavigation } from './navigators';
import State from '../redux/reducers';

const AppNavigator: React.FC = () => {
  const isLogged = useSelector((state: State) => state.auth.isLoggedIn);

  return (
    <NavigationContainer>
      {!isLogged ? <AuthNavigation /> : <MainTabNavigation />}
    </NavigationContainer>
  );
};

export default AppNavigator;
