/* eslint-disable @typescript-eslint/no-explicit-any */
import { Dispatch } from "@reduxjs/toolkit";
import { handleAddUserDetail, handleLogIn } from "../../store/slices/userSlice";
import { handleGetAllUser } from "../apis/user";
import { logInForm } from "../interfaces/form";

export async function userAlreadyExists(
  page: string,
  userDetail: logInForm,
  dispatch: Dispatch,
  navigate: any
) {
  const response = await handleGetAllUser();
  const keyArr = Object.values(response) || "";
  const currentUser = keyArr.some(
    (item: any) => item.email === userDetail.email
  );
  console.log(currentUser);

  if (page == "Login") {
    if (currentUser) {
      dispatch(handleAddUserDetail(userDetail));
      dispatch(handleLogIn());
      navigate("/");
      return false;
    } else {
      return true;
    }
  } else {
    if (currentUser) {
      return false;
    } else {
      return true;
    }
  }
}
