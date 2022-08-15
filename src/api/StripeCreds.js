import apiUrl from "./apiConfig";
import axios from "axios";

export const fetchStripeCreds = () => {
    return axios({
        headers: {
            "Content-Type": "application/json",
        },
        method: "GET",
        url: apiUrl + "/stripe",
    });
};
