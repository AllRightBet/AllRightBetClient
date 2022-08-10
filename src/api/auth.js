import apiUrl from "./apiConfig";
import axios from "axios";

export const signUp = (
  firstName,
  lastName,
  userName,
  email,
  password,
  address,
  state,
  city,
  zip,
  age
) => {
  return axios({
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
    url: apiUrl + "/user",
    data: {
      firstName: firstName,
      lastName: lastName,
      username: userName,
      email: email,
      password: password,
      address: address,
      state: state,
      city: city,
      zip: zip,
      age: age,
    },
  });
};
