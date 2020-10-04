import axios from "../../config/axios";

export const bookingPost = (url, data) => () => {
  return axios.post(url, data, {
    headers: { contentType: "multipart/form-data" },
  });
};
