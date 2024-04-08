import { configureStore, createSlice } from "@reduxjs/toolkit";

// const [formDataList, setFormDataList] = useState<FormValue[]>([]);

// const onSubmit = (data: FormValue) => {
//   const newFormData = [...formDataList, data];
//   setFormDataList(newFormData);
// };
// formDataList: object[];
// formDataList: [{ username: string; email: string }];
// formDataList: Array<{ username?: string; email?: string }>;
// formDataList: Array<any>;
export interface UserState {
  formDataList: Object[];
}
export interface InitialState {
  users: {
    username: string;
    email: string;
  };
}
const initialState: InitialState = {
  users: { username: "", email: "" },
};

const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    addUserData(state, action) {
      // state.formDataList.push(action.payload);
      // state.formDataList = [state.formDataList, action.payload];
      state.user.push(action.payload);
    },
  },
});

const store = configureStore({ reducer: { user: userSlice.reducer } });
export const userActions = userSlice.actions;
// export default store;

// const initialState = {
//   username: "",
//   email: "",
// };
// const userSlice = createSlice({
//   name: "user",
//   initialState: initialState,
//   reducers: {
//     setUserData(state, action) {
//       state.username = action.payload.username;
//       state.email = action.payload.email;
//     },
//   },
// });
