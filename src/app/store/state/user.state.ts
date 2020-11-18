import { User } from '../../user';

export interface IUserState {
  users: User[];
}

export const initialUserState: IUserState = {
  users: null,
};
