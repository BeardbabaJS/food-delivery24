export const SET_CART_ON = "SET_CART_ON";
export const SET_CART_OFF = "SET_CART_OFF";
export const GET_CART_DISPLAY_STATE = "GET_CART_DISPLAY_STATE";


export const setCartOn = () => {
    return {
        type: SET_CART_ON,
    };
};

export const setCartOff = () => {
    return {
        type: SET_CART_OFF,
    };
};

export const getCartDisplayState = () => {
    return {
        type: GET_CART_DISPLAY_STATE,
    };
};
