import axios from "axios";
import errorResponseHandler from "./errorResponseHandler";

const instence = axios.create({
  baseURL: `${process.env.REACT_APP_HOST}/api/v1/member`,
  headers: {
    "Access-Control-Allow-Credentials": "true",
    "Access-Control-Allow-Origin": `https://liburanyuk.vercel.app/`,
  },
});

instence.interceptors.response.use(
  (response) => response,
  errorResponseHandler
);

export default instence;
