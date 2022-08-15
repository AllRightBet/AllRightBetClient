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
  age,
  auth_provider,
  wallet_amount,
  payment_method,
  admin
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
      authProvider: auth_provider,
      wallet_balance: wallet_amount,
      payment_method: payment_method,
      admin_role: admin,
      profilePic_uri: null,
    },
  });
};

export const fetchAllUsers = () => {
  return axios({
    headers: {
      "Content-Type": "application/json",
    },
    method: "GET",
    url: apiUrl + "/user",
  });
};
