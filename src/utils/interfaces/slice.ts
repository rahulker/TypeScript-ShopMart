export interface cartSlice {
  totalItem: number;
  item: object[];
}

export interface userSlice {
  isLogin: boolean;
  userDetail: {
    id?: number;
    name?: string;
    password?: string | number;
    address?: string;
    phoneNum?: number;
  };
}
