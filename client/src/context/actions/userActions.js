// Define action types as constants
export const SET_USER = "SET_USER";
export const GET_USER = "GET_USER";
export const SET_USER_NULL = "SET_USER_NULL"

// Action creator for setting user details
export const setUserDetails = (user) => {
    return {
        type: SET_USER,
        user: user,
    };
};

// Action creator for getting user details (no payload needed)
export const getUserDetails = () => {
    return {
        type: GET_USER,
    };
};

export const setUserNull = () => {
    return {
        type: SET_USER_NULL,
        user: null,
    };
};
