import { object, string } from "yup";

export const logInValidation = object({
  email: string().required("Email is require").email("enter correct email"),
  password: string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters long")
    .matches(/[a-z]/, "Password must contain at least one lowercase letter")
    .matches(/[A-Z]/, "Password must contain at least one uppercase letter"),
});
