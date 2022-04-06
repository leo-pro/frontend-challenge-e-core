import axios from "axios";

export const api = axios.create({
  baseURL: "https://cgjresszgg.execute-api.eu-west-1.amazonaws.com",
});
