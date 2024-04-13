import { configureStore, createSlice } from "@reduxjs/toolkit";

// Interface for user data
interface User {
  username: string;
  email: string;
}

// Interface for initial state
interface InitialState {
  users: User[];
}
const initialState: InitialState = {
  users: [],
};

const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    addUserData(state = initialState, action: { payload: User }) {
      state.users = [...state.users, action.payload];
    },
  },
});

const store = configureStore({ reducer: { user: userSlice.reducer } });
export const userActions = userSlice.actions;
export default store;
