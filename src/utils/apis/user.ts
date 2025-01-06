/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";
import { signUpForm } from "../interfaces/form";
const URL = import.meta.env.VITE_USER_BASE_API;
const USER_DB = URL + ".json";

export async function handleRegisterUser(userDetail: signUpForm) {
  try {
    const response = await axios.post(USER_DB, userDetail);
    return response.data;
  } catch (err: any) {
    console.error(err.message);
  }
}

export async function handleEditUserDetail(userDetail: any) {
  try {
    const allKey = await handleGetAllUser();
    let keyToEdit;
    for (const key of Object.keys(allKey)) {
      const user = allKey[key];
      if (user.id == userDetail.id) {
        keyToEdit = key;
      }
    }
    const response = await axios.patch(URL + `/${keyToEdit}.json`, userDetail);
    return response.data;
  } catch (error: any) {
    console.error(error.message);
  }
}

export async function handleGetAllUser() {
  try {
    const response = await axios.get(USER_DB);
    return response.data;
  } catch (err: any) {
    console.error(err.message);
  }
}

export async function handleDeleteUser(userId: number | undefined) {
  try {
    if (typeof userId == "undefined") return;
    const allKey = await handleGetAllUser();
    let keyToDelete;
    for (const key of Object.keys(allKey)) {
      const user = allKey[key];
      if (user.id == userId) {
        keyToDelete = key;
      }
    }
    const response = await axios.delete(URL + `/${keyToDelete}.json`);
    return response.data;
  } catch (err: any) {
    console.error(err.message);
  }
}
