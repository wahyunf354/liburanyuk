import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default (error) => {
  if (error) {
    let message;

    if (error.response) {
      if (error.response.status === 500) message = "Someting went wrong";
      else message = error.response.message;

      console.log(message);
      toast(message);

      return Promise.reject(error);
    }
  }
};
