// FETCH LATEST FIGHT CARD

import apiUrl from "./apiConfig";
import axios from "axios";

export const fetchFightCards = () => {
    return axios({
        headers: {
            "Content-Type": "application/json",
        },
        method: "GET",
        url: apiUrl + "/fight-card",
    });
};
