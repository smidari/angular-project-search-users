import { User } from '../../user';

export interface IUserState {
  users: User[];
  favoriteUsers: User[];
  inputValueSearchUser: string;
}

export const initialUserState: IUserState = {
  users: [],
  favoriteUsers: [],
  inputValueSearchUser: '',
};
