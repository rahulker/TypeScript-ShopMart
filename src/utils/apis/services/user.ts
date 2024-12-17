/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";
import { signInForm } from "../../interfaces/form";
const url = import.meta.env.VITE_USER_BASE_API;
const USER_DB = url + ".json";

export async function handleRegisterUser(userDetail: signInForm) {
  try {
    const response = await axios.post(USER_DB, userDetail);
    return response.data;
  } catch (err: any) {
    console.error(err.message);
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
