import { setupInterceptorsTo } from "./Interceptors";
import axios from "axios";

const BASE_URL = "http://localhost:4000";

const instance = axios.create({
  baseURL: `${BASE_URL}`,
  timeout: 1000,
  headers: { "X-Custom-Header": "foobar" },
});

setupInterceptorsTo(instance);

export default instance;
