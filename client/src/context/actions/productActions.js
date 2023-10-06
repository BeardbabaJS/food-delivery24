export const SET_ALL_PRODUCTS = "SET_ALL_PRODUCTS"
export const GET_ALL_PRODUCTS = "GET_ALL_PRODUCTS"


export const setAllProducts = (products) => {
    return {
        type: SET_ALL_PRODUCTS,
        products: products,
    }
}

export const getAllProducts = (products) => {
    return {
        type: GET_ALL_PRODUCTS,
    }
}