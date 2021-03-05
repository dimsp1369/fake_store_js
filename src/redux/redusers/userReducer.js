import {ADD_TO_CART} from "../types";


const initialState = {
    cart: [],
    orders: [],
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            const newCart = [...state.cart]
            newCart.push(action.payload.product)
            return {
                ...state, cart: newCart
            }
        default:
            return state
    }
}

export default userReducer