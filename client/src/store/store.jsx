import { configureStore, createReducer, createAction } from "@reduxjs/toolkit";

let state = {
  user: {},
};

export const signIn = createAction("SIGN_IN", (user) => {
  return {
    payload: user,
  };
});

export const signOut = createAction("SIGN_OUT", () => {
  return {};
});

const reducer = createReducer(state, {
  [signIn]: (currentState, action) => {
    const newUser = action.payload;
    return {
      ...currentState,
      user: {
        firstName: newUser.firstName,
        lastName: newUser.lastName,
        email: newUser.email,
      },
    };
  },
  [signOut]: (currentState) => {
    return { ...currentState, user: {} };
  },
});

export const store = configureStore({
  preloadedState: state,
  reducer,
});
