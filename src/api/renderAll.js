// FETCH ALL MODELS FROM DATABASE


import apiUrl from "./apiConfig";
import axios from "axios";

export const fetchAll = (url) => {
  return axios({
    headers: {
      "Content-Type": "application/json",
    },
    method: "GET",
    url: apiUrl + url,
  });
};
