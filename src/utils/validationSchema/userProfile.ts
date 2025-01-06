import { number, object, string } from "yup";

export const userProfileValidation = object({
  email: string().required("Email is require").email("enter correct email"),
  phoneNum: number()
    .typeError("Phone number must be a valid number")
    .required("Phone number is required")
    .test("len", "Phone number must be exactly 10 digits", (value) => {
      return !!value && value.toString().length === 10;
    }),
  address: string().required("Address is require"),
});
