import { toast } from "react-toastify";

export const baseUrl='https://ecommerce.routemisr.com'

export const notify = (msg, type) => {
    toast[type](msg);
  };