export interface productData {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [id: string | number | symbol]: any;
}

export interface cartData extends productData {
  quantity: number;
}
