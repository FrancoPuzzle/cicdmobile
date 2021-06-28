import { combineReducers } from 'redux';
import auth, { AuthInitialState } from './auth/auth';

interface State {
  auth: AuthInitialState;
}

const State = combineReducers({
  auth,
});

export default State;
