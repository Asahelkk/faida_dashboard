import axios from "axios";

export const ENDPOINT = "https://165.227.231.124/backend/api";
const BASE_URL = ENDPOINT;

const AxiosUtility = axios.create({
  baseURL: `${BASE_URL}`,
  timeout: 10000,
  headers: {
    accept: 'application/json',
    'Cache-Control': 'no-cache',
  },
  withCredentials: true
});

export const setAuthToken = (instance) => {
  const { state } = JSON.parse(localStorage?.getItem("user"));
  const token = state?.user?.token;

  if (token) {
    instance.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  } else {
    delete instance.defaults.headers.common["Authorization"];
  }
};

export default AxiosUtility;