import React, {useContext} from "react";
import style from "./CartTotal.module.css";
import CartContext from "@/store/CartContext";

function CartTotal() {
    const {cartState} = useContext(CartContext)
    let cartItems = 0;
    let total = 0;
    if(cartState !== undefined && cartState.products !== undefined) {
        cartItems = cartState.products.length
        total = cartState.total
    }
    return (
        <div className="cart">
            <div className="cart__content">
                <div className="cart__content-price">
                    Items: {cartItems}
                </div>
                <div className="cart__content-total" >
                    Total: {total.toFixed(2)} €
                </div>
            </div>
        </div>
    )
}

export default CartTotal;