import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { SignInScreen, Initializing, Welcome } from '../../screens';
import Routes from '../Routes';

const AuthNavigation: React.FC = () => {
  const { Navigator, Screen } = createStackNavigator();

  return (
    <Navigator screenOptions={{ headerShown: false }} initialRouteName={Routes.WELCOME}>
      <Screen name={Routes.INITIAZLIZING} component={Initializing} />
      <Screen name={Routes.WELCOME} component={Welcome} />
      <Screen name={Routes.SIGNIN} component={SignInScreen} />
    </Navigator>
  );
};

export default AuthNavigation;
