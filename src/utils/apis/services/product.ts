import { PRODUCT_API } from "../../constants/apiVar";
import axios from "axios";

export async function allProduct() {
  try {
    const response = await axios.get(PRODUCT_API);
    return response.data;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    console.error(error.message);
  }
}

export async function handleSingleProduct(id: number) {
  try {
    const response = await axios.get(PRODUCT_API + "/" + id);
    return response.data;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    console.error(error.message);
  }
}
