import apiUrl from "./apiConfig";
import axios from "axios";

export const createBet = (opponent_1, opponent_2, bet_amount) => {
  return axios({
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
    url: apiUrl + "/bet",
    data: {
      opponent_1: opponent_1,
      opponent_2: opponent_2,
      bet_amount: bet_amount,
      // event_picture: event_picture,
      // stats: {},
    },
  });
};
