import { User } from "interfaces/UserList";

export type UsersAction =
  | {
    type: 'RESET';
  }
  | {
    type: 'ADD_USER';
    payload: User;
  }