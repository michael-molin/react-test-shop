import React, {useReducer} from "react";
import CartContext from "./CartContext";
import {ProductInterface} from "@/components/product/Product.Interface";
import {cartReducer} from "@/reducer/cartReducer";

type cartInterface = {
    products : ProductInterface[],
    total: number
}

const defaultCartState : cartInterface = {
    products: [],
    total: 0
}

type Props = {
    children: string | JSX.Element | JSX.Element[]
}

const CartProvider  = ({children} : Props) => {
    // @ts-ignore
    const [cartState, dispatch] = useReducer(cartReducer, defaultCartState)
    return (
        <CartContext.Provider value={{cartState, dispatch }}>
            {children}
        </CartContext.Provider>
    )}

export default CartProvider;
