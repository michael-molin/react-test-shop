import React, {MouseEventHandler, useContext, useState} from "react";
import CartContext from "@/store/CartContext";
import styles from './Cart.module.scss';
import cartIcon from '../../assets/cart.png'
import Image from "next/image";
import ExtendedCart from "@/components/cart/extended-cart/ExtendedCart";
import { CartItemInterface } from "./CartItemInterface";

function Cart() {
    const {cartState} = useContext(CartContext)
    const [extendCartState, setExtendCartState] = useState(false);
    const openCart : MouseEventHandler = ()=> {
        setExtendCartState(!extendCartState);
    }

    let cartItems = 0;
    let total = 0;
    if(cartState !== undefined && cartState.products !== undefined && cartState.products.length > 0) {
        cartState.products.map((product : CartItemInterface)  => {
            if(product !== null) {
                cartItems = cartItems + product.quantity;
            }
        });
        total = cartState.total
    }
    return (
        <div className={styles.cart}>
            <div className={styles.cart_icon}>
                <Image src={cartIcon} onClick={openCart} alt="" />
            </div>
            <div className={styles.cart_info}>
                <div>
                    Items: {cartItems}
                </div>
                <div>
                    Total: {total.toFixed(2)} €
                </div>
            </div>
    
            {(extendCartState === true) &&
                <ExtendedCart handlerModal={setExtendCartState} />
            }
           
        </div>
    )
}

export default Cart;