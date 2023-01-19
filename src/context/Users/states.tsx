import { User } from "interfaces/UserList";

export interface IUser {
  users: User[];
}
export interface UsersState extends IUser {
  users: User[]
}

export const InitialUsersState: UsersState = {
  users: []
};


