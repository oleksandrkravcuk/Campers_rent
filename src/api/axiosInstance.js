import axios from "axios";

const baseURL = "https://6620d8803bf790e070b0e73e.mockapi.io/api/v1";

export const axiosInstance = axios.create({
  baseURL,
});
