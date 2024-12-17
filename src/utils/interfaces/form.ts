export interface logInForm {
  email: string;
  password: string;
}

export interface signInForm extends logInForm {
  address: string;
  phoneNum: number;
  name: string;
  id?: number | string;
  confirmPassword: string;
}
