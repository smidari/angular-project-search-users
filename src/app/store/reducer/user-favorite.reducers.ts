import {
  EUserFavoriteActions,
  UserFavoriteActions,
} from '../action/user-favorite.action';
import {
  initialUserFavoriteState,
  IUserFavoriteState,
} from '../state/user-favorite.state';

export const userFavoriteReducers = (
  state = initialUserFavoriteState,
  action: UserFavoriteActions
): IUserFavoriteState => {
  switch (action.type) {
    case EUserFavoriteActions.GetUsersFavoriteSuccess: {
      return {
        ...state,
        favoriteUsers: action.payload,
      };
    }
    default:
      return state;
  }
};
