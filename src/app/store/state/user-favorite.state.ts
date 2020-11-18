import { User } from '../../user';

export interface IUserFavoriteState {
  favoriteUsers: User[];
}

export const initialUserFavoriteState: IUserFavoriteState = {
  favoriteUsers: null,
};
