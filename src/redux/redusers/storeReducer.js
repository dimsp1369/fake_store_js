import {GET_PRODUCT} from '../types'

const initialState = {
    product: [],
    loading: true
}

const storeReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_PRODUCT:
            return {
                ...state, product: action.payload,
                loading: false
            }
        default:
            return state

    }
}

export default storeReducer