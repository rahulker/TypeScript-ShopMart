export interface logInForm {
  email: string;
  password: string;
}

export interface signUpForm extends logInForm {
  address: string;
  phoneNum: number;
  name: string;
  id?: number | string;
  confirmPassword: string;
}
