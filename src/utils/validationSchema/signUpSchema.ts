import { number, object, ref, string } from "yup";

export const signUpValidation = object({
  email: string().required("Email is require").email("enter correct email"),
  password: string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters long")
    .matches(/[a-z]/, "Password must contain at least one lowercase letter")
    .matches(/[A-Z]/, "Password must contain at least one uppercase letter"),
  name: string().required("Please enter your name"),
  phoneNum: number()
    .required("Phone number is require")
    .min(10, "Please enter a 10 digit number"),
  confirmPassword: string()
    .required("confirm password is require")
    .oneOf([ref("password")], "Confirm password dose not match"),
  address: string().required("Address is require"),
});
