// PUT REQUEST TO UPDATE USER

import apiUrl from "./apiConfig";
import axios from "axios";

export const updateDB = (user , key , newValue) => {

    // CHANGING VALUE OF USER
    user[key] = newValue
    
    // PUT REQUEST
    return axios({
        headers: {
            "Content-Type": "application/json",
        },
        method: "PUT",
        url: apiUrl + "/user",
        data: user,
    });
};
