/* eslint-disable unicorn/no-top-level-side-effects */

import { API_BASE_URL } from "@public/data/constants";
import axios from "axios";

import errorHandlers from "./errorHandlers/errorHandlers";

const api = axios.create({
  baseURL: API_BASE_URL,
});
api.interceptors.response.use(null, errorHandlers);

export default api;
