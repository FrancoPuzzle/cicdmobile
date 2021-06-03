export const MainTabNavigator = {
  HOME: 'HOME',
  FETCH_DATA: 'FETCH_DATA',
};

export const AuthStackNavigator = {
  INITIAZLIZING: 'INITIAZLIZING',
  WELCOME: 'WELCOME',
  SIGNIN: 'SIGNIN',
};

const Route = {
  ...MainTabNavigator,
  ...AuthStackNavigator,
};

export default Route;
export type Routes = keyof typeof Route;
