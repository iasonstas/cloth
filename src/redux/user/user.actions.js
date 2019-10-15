import { UserActionTypes } from "./user.types"; // that is constant and we will not have a typos problem

export const setCurrentUser = user => ({
  type: UserActionTypes.SET_CURRENT_USER,
  payload: user
});
