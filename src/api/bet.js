import apiUrl from "./apiConfig";
import axios from "axios";

export const createBet = (bet_amount, favor_opponent) => {
  return axios({
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
    url: apiUrl + "/bet",
    data: {
      bet_amount: bet_amount,
      favor_opponent: favor_opponent,
      // event_picture: event_picture,
      // stats: {},
    },
  });
};
