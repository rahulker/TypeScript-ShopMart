export interface logInForm {
  email: string;
  password: string | number;
}

export interface signInForm extends logInForm {
  address: string;
  phoneNum: number;
  name: string;
  id: number | string;
  confirmPass: string | number;
}
