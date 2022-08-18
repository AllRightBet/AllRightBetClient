// PUT REQUEST TO UPDATE USER (keys & newValues are parallel lists)

import apiUrl from "./apiConfig";
import axios from "axios";

export const updateDB = (user, keys, newValues) => {

    // CHANGING VALUE OF USER
    for (var k = 0; k < keys.length; k++) {
        user[keys[k]] = newValues[k]
    }

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
