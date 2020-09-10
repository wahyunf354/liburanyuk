import { FETCH_PAGE } from "../type";
import axios from "axios";

export const fetchDataPage = (url, page) => (dispatch) => {
  return axios.get(url).then((response) => {
    dispatch({
      type: FETCH_PAGE,
      payload: {
        [page]: response.data,
      },
    });
  });
};
