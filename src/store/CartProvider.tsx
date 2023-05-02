import React, {useReducer} from "react";
import CartContext from "./CartContext";
import DispatchContext from "./DispatchContext";
import {ProductInterface} from "../components/product/Interface";
import {cartReducer} from "../reducer/cartReducer";

type cartInterface = {
    products : ProductInterface[],
    total: number
}

const defaultCartState : cartInterface = {
    products: [],
    total: 0
}

const CartProvider = (props : any) => {
    const [cartState, dispatch] = useReducer(cartReducer, defaultCartState)
    return (
        <CartContext.Provider value={{cartState, dispatch }}>
            {props.children}
        </CartContext.Provider>
    )}

export default CartProvider;
