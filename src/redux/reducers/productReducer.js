import { ActionTypes } from "../contants/action-types";

const initialState = {
    products: []
};

/** action è composto da type e payload infatti si può anche fare export const productReducer = (state = initialState, {type, payload}) => {  */
export const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.SET_PRODUCTS:
            return {...state, products: action.payload};
    
        default:
            return state;
    }
}

export const selectedProductReducer = (state = {}, {type, payload}) => {
    switch(type) {
        case ActionTypes.SELECTED_PRODUCT:
            return {...state, ...payload}
        case ActionTypes.REMOVE_SELECTED_PRODUCT:
            return {}
        default:
            return state;
    }
}