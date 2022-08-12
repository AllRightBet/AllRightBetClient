import apiUrl from "./apiConfig";
import axios from "axios";

export const createFightCard = (opponent_1, opponent_2, event_picture) => {
    return axios({
        headers: {
            "Content-Type": "application/json",
        },
        method: "POST",
        url: apiUrl + "/fight-card",
        data: {
            opponent_1: opponent_1,
            opponent_2: opponent_2,
            // event_picture: event_picture,
            // stats: {},
        },
    });
};
