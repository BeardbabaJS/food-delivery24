export const SET_ORDERS = "SET_ORDERS";
export const GET_ORDERS = "GET_ORDERS"

export const setOrders = (data) => {
    return {
        type: SET_ORDERS,
        orders: data,
    };
};

export const getOrders = () => {
    return {
        type: GET_ORDERS,
    };
};
