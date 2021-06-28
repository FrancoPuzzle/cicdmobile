import { USER_LOGIN, USER_LOGOUT } from '../../actions/types';

export interface AuthInitialState {
  isLoggedIn: boolean;
}

const AuthInitialState = {
  isLoggedIn: false,
};

const loginReducer = (state = AuthInitialState, action) => {
  switch (action.type) {
    case USER_LOGIN: {
      return {
        isLoggedIn: true,
      };
    }
    case USER_LOGOUT: {
      return {
        isLoggedIn: false,
      };
    }
    default: {
      return state;
    }
  }
};

export default loginReducer;
