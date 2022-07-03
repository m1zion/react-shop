import { useState } from "react";
const initialState = {
    cart:[],
}
const useInitialState = () =>{
    const [state, setState] = useState(initialState);
    //manten el estado ... significa que mantenga lo que ya este, y agregar lo que le pasemos
    //payload seria el producto
    const addToCart = (payload) =>{
        setState(
            {
                ...state,
                cart:[...state.cart, payload]
            }
        );
    };
    return {
        state,
        addToCart
    }
}

export default useInitialState;