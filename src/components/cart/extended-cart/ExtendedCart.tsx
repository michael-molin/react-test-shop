import React, {useContext} from "react";
import styles from './ExtendedCart.module.scss';
import Image from "next/image";
import cartIcon from '../../../assets/cart.png';
import { CartItemInterface } from "../CartItemInterface";
import CartContext from "@/store/CartContext";
import ItemCart from "./item-cart/ItemCart";

type Props = {
    handlerModal : Function
}
function ExtendedCart({handlerModal} : Props) { 
    const {cartState} = useContext(CartContext)
        return (
        <div className={styles.modal}>
            <section className={styles.modal_content}>
                <div className={styles.modal_header}>
                    <Image src={cartIcon} alt="" />
                    <h3>CART</h3>
                    <button type="button" className={styles.modal_header_close} onClick={() => handlerModal(false)}>
                        Close
                    </button>
                </div>
                <div className={styles.modal_body}>
                    <div key={Math.random()} className={styles.modal_body_item}>
                        <div>
                            Item
                        </div>
                        <div>
                            Qnty
                        </div>
                        <div>
                            Price
                        </div>
                        <div className={styles.modal_body_item_btn}> 
                            Operations
                        </div>
                    </div>
                        {(cartState.products.length > 0) && cartState.products.map((item: CartItemInterface) => {
                            if(item && item.name) {
                                return (
                                    <ItemCart key={Math.random()} id={item.id} name={item.name} image={''} quantity={item.quantity} price={item.price} />
                                )
                            }
                            return null;
                        })}
                        
                        <div className={styles.modal_total}>
                            Total: {cartState.total.toFixed(2)} €
                        </div>
                </div>
            </section>
        </div>
    )
}

export default ExtendedCart;