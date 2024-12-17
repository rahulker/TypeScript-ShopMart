import { ChangeEvent } from "react";

export interface props {
  isLink?: boolean;
  text: string;
  classCss?: string;
  link?: string;
  id?: string | number;
  otherLink?: boolean | string;
  onClick?: () => void;
  props?: unknown;
}

export interface inputAndLabel {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  register?: any;
  placeHolder: string;
  errorMessage?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>, name: string) => void;
  text?: string;
  name?: string;
  isPassword?: boolean;
  classCss?: string;
  textStyle?: string;
  type: string;
}
