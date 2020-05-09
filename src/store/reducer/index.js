import {ADD_TO_CART, REMOVE_FROM_CART, CLEAR_CART} from "../actions/types";

export default function cartReducer(state, action){
    if(action.type === ADD_TO_CART){
        return {
            cart: [
                ...state.cart,
               { 
                   product: action.productInfo,
                   quantity: action.quantity

                }

            ]
        }
    }
    else if(action.type === REMOVE_FROM_CART){
            const index = action.index;
            const new_state = { ... state };
             new_state.cart.splice(index, 1)
            return new_state;
    }
    else if(action.type === CLEAR_CART){
        const new_state = { ...state }
        new_state.cart = []
        return new_state;
    }
    else return state;
} 