import UserActionTypes from './user.types'; // that is constant and we will not have a typos problem

export const setCurrentUser = user => ({
  type: UserActionTypes.SET_CURRENT_USER,
  payload: user
});

export const googleSignInStart = () => ({
  type: UserActionTypes.GOOGLE_SIGN_IN_START
});
export const googleSignInSuccess = user => ({
  type: UserActionTypes.GOOGLE_SIGN_IN_SUCCESS,
  payload: user
});
export const googleSignInFailure = error => ({
  type: UserActionTypes.GOOGLE_SIGN_IN_FAILURE,
  payload: error
});

export const emailSignInStart = emailAndpassword => ({
  type: UserActionTypes.EMAIL_SIGN_IN_START,
  payload: emailAndpassword
});
export const emailSignInSuccess = user => ({
  type: UserActionTypes.EMAIL_SIGN_IN_SUCCESS,
  payload: user
});
export const emailSignInFailure = error => ({
  type: UserActionTypes.EMAIL_SIGN_IN_FAILURE,
  payload: error
});
