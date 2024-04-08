import { configureStore, createSlice } from "@reduxjs/toolkit";

// const [formDataList, setFormDataList] = useState<FormValue[]>([]);

// const onSubmit = (data: FormValue) => {
//   const newFormData = [...formDataList, data];
//   setFormDataList(newFormData);
// };
interface UserState {
  users: object[];
}
const initialState: UserState = { users: [] };

const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    setUserData(state, action) {
      state.users = [...state.users, action.payload];
      // state.users = [action.payload.username, action.payload.email];
      // state.users[0] = action.payload.username;
      // state.users[1] = action.payload.email;
    },
  },
});

const store = configureStore({ reducer: { user: userSlice.reducer } });
export const userActions = userSlice.actions;
export default store;

// import { configureStore, createSlice } from "@reduxjs/toolkit";

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

// const store = configureStore({ reducer: { user: userSlice.reducer } });
// export const userActions = userSlice.actions;
// export default store;

import React from "react";
import { useSelector } from "react-redux";
import Layout from "../components/UI/Layout.tsx";
import { StyledDiv } from "./PagesStyled.styled.tsx";
import { UserState } from "../components/store/index.tsx";

const DashboardPage = () => {
  // const users = useSelector((state: UserState) => state.formDataList);
  const [formDataList] = useSelector((state: UserState) => state.formDataList);
  // const convertedList = Object.values(formDataList);
  return (
    <Layout header="داشبورد">
      {formDataList.username}
      {/* {formDataList.length > 0 ? (
        <ul>
          {formDataList.map((formData) => (
            <li key={formData.username}>
              <p>نام کاربری: {formData.username}</p>
              <p>ایمیل: {formData.email}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>در حال بارگذاری اطلاعات...</p>
      )} */}
      {/* {formDataList.username}
      {formDataList.email} */}
      {/* {formDataList.length > 0 ? (
        <ul>
          {formDataList.map((formData) => (
            <li key={formData.username}>
              <p>نام کاربری: {formData.username}</p>
              <p>ایمیل: {formData.email}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>در حال بارگذاری اطلاعات...</p>
      )} */}
      {/* <ul>
        <StyledDiv>
          {formDataList.map((formData) => (
            <div key={formData.username}>{formData.username}</div>
          ))}
        </StyledDiv>
      </ul> */}
    </Layout>
  );
};

export default DashboardPage;

import { configureStore, createSlice } from "@reduxjs/toolkit";

// const [formDataList, setFormDataList] = useState<FormValue[]>([]);

// const onSubmit = (data: FormValue) => {
//   const newFormData = [...formDataList, data];
//   setFormDataList(newFormData);
// };
export interface UserState {
  formDataList: object[];
  // formDataList: [{ username: string; email: string }];
  // formDataList: Array<{ username?: string; email?: string }>;
  // formDataList: Array<any>;
}
const initialState: UserState = { formDataList: [] };

const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    addUserData(state, action) {
      state.formDataList.push(action.payload);
    },
    // addUserData(state, action) {
    //   state.formDataList = [...state.formDataList, action.payload];

    // state.users = [action.payload.username, action.payload.email];
    // state.users[0] = action.payload.username;
    // state.users[1] = action.payload.email;
    // },
  },
});

const store = configureStore({ reducer: { user: userSlice.reducer } });
export const userActions = userSlice.actions;
export default store;

// import { configureStore, createSlice } from "@reduxjs/toolkit";

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

// const store = configureStore({ reducer: { user: userSlice.reducer } });
// export const userActions = userSlice.actions;
// export default store;
