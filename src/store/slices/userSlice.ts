import { createSlice } from "@reduxjs/toolkit";
import { userSlice } from "../../utils/interfaces/slice";

const initialState: userSlice = {
  isLogin: false,
  userDetail: {},
};

export const user = createSlice({
  name: "user",
  initialState,
  reducers: {
    handleLogIn: (state) => {
      state.isLogin = true;
    },
    handleLogOut: (state) => {
      state.isLogin = false;
    },
    handleAddUserDetail: (state, action) => {
      state.userDetail = action.payload;
    },
  },
});

export const { handleLogIn, handleLogOut } = user.actions;
const userReducer = user.reducer;
export default userReducer;
