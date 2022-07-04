import { useState } from "react";
const initialState = {  //
    cart:[],
}
const useInitialState = () =>{  //Funcion para inicializar el estado
    const [state, setState] = useState(initialState);

    //payload seria el producto
    const addToCart = (payload) =>{
        setState(
            {
                ...state,  //manten el estado ... significa que mantenga lo que ya este, osea que se quedan los elementos que ya teniamos
                cart:[...state.cart, payload]     //agregar lo que le pasemos
            }
        );
    };
    return {
        state,
        addToCart
    }
}

export default useInitialState;