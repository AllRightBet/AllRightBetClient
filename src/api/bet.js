import apiUrl from "./apiConfig";
import axios from "axios";

export const createBet = (bet_amount, user, event, option) => {
  return axios({
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
    url: apiUrl + "/bet",
    data: {
      bet_amount: bet_amount,
      voter: user,
      event: event,
      favor_opponent: option,
      // event_picture: event_picture,
      // stats: {},
    },
  });
};
