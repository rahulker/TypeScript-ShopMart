import { toast } from "react-hot-toast";

const errorToast = (msg: string) => {
  toast.dismiss();
  toast.error(msg);
};

const successToast = (msg: string) => {
  toast.dismiss();
  toast.success(msg);
};

export { errorToast, successToast };
