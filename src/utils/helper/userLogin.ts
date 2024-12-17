/* eslint-disable @typescript-eslint/no-explicit-any */
import { Dispatch } from "@reduxjs/toolkit";
import { handleAddUserDetail, handleLogIn } from "../../store/slices/userSlice";
import { handleGetAllUser } from "../apis/services/user";
import { logInForm } from "../interfaces/form";

export async function userAlreadyExists(
  userDetail: logInForm,
  dispatch: Dispatch,
  navigate: any
) {
  const response = await handleGetAllUser();
  const keyArr = response != null ? Object.values(response) : 0;
  const currentUser =
    keyArr === 0
      ? ""
      : keyArr.reduce(
          (data: any, item: any) => (data = item.email === userDetail.email)
        );
  if (currentUser != "") {
    dispatch(handleAddUserDetail(userDetail));
    dispatch(handleLogIn());
    navigate("/");
    return false;
  } else {
    return true;
  }
}
