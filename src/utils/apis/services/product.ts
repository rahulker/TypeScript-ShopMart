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

export async function handleSingleProduct(id: string | undefined) {
  try {
    if (id == undefined) {
      return;
    }
    const response = await axios.get(PRODUCT_API + "/" + id);
    return response.data;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    console.error(error.message);
  }
}

export async function handleCategory() {
  try {
    const response = await axios.get(PRODUCT_API + "/categories");
    return response.data;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    console.error(error.message);
  }
}
