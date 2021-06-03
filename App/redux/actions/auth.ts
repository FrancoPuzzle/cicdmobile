import { USER_LOGIN, USER_LOGOUT } from './types';

export const logIn = ({ name }) => ({
  type: USER_LOGIN,
  payload: {
    name,
  },
});
export const logOut = () => ({
  type: USER_LOGOUT,
  payload: {},
});
