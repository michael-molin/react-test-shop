import React, {MouseEventHandler, useContext, useState} from "react";
import CartContext from "@/store/CartContext";
import styles from './Cart.module.scss';
import cartIcon from '../../assets/cart.png'
import Image from "next/image";
import ExtendedCart from "@/components/cart/extended-cart/ExtendedCart";


function Cart() {
    const {cartState} = useContext(CartContext)
    const [extendCart, setExtendCart] = useState(false);
    const openCart : MouseEventHandler = ()=> {
        setExtendCart(!extendCart);
    }

    let cartItems = 0;
    let total = 0;
    if(cartState !== undefined && cartState.products !== undefined) {
        cartItems = cartState.products.length
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

            <ExtendedCart handlerModal={extendCart} />
        </div>
    )
}

export default Cart;