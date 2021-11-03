import axios, { AxiosInstance, AxiosRequestConfig } from "axios";
const APIKey: any = process.env.NEXT_PUBLIC_SUBMITTABLE_API_KEY;
const config: AxiosRequestConfig = {
  baseURL: `https://submittable-api.submittable.com`,
  auth: {
    username: ":",
    password: APIKey,
  },
};
const client: AxiosInstance = axios.create(config);
export default client;
