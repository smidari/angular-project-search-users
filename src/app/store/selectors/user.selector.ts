import { IAppState } from '../state/app.state';
import { createSelector } from '@ngrx/store';
import { IUserState } from '../state/user.state';

const selectUsers = (state: IAppState) => state.users;

export const selectUserList = createSelector(
  selectUsers,
  (state: IUserState) => state.users
);

export const selectFavoriteUserList = createSelector(
  selectUsers,
  (state: IUserState) => state.favoriteUsers
);

export const selectInputValueSearchUser = createSelector(
  selectUsers,
  (state: IUserState) => state.inputValueSearchUser
);

export const selectUsersSortForInputValue = createSelector(
  selectUsers,
  (state: IUserState) =>
    state.users.filter((user) =>
      user.first_name.includes(state.inputValueSearchUser)
    )
);
