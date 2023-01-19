import { UsersAction } from './actions';
import {
  InitialUsersState,
  UsersState
} from './states';

export function UsersReducer(
  state: UsersState,
  action: UsersAction
): UsersState {
  switch (action.type) {
    case 'RESET': {
      return {
        ...InitialUsersState
      };
    }
    case 'ADD_USER': {
      return {
        users: [...state.users, action.payload]
      };
    }
    default:
      return state;
  }
}
