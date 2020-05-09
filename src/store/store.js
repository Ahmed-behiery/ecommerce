import { createStore } from "redux";
import cartReducer from "./reducer/index";


function loadState(){
    const state = localStorage.getItem("cart");
    if (state !== null){
        return JSON.parse(state)
    }
    return{
        cart: []
    }
}
function saveState(state){
    localStorage.setItem("cart", JSON.stringify(state));
}


const store = createStore(cartReducer, loadState(),  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())


store.subscribe(() => {
    saveState(store.getState())
})
export default store;