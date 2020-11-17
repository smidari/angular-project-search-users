import { initialUserState, IUserState } from '../state/user.state';
import { EUserActions, UserActions } from '../action/user.action';

export const userReducers = (
  state = initialUserState,
  action: UserActions
): IUserState => {
  switch (action.type) {
    case EUserActions.GetUsersSuccess: {
      return {
        ...state,
        users: action.payload,
      };
    }
    default:
      return state;
  }
};
