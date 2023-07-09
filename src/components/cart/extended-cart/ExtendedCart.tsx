import React, {useContext} from "react";
import styles from './ExtendedCart.module.scss';
import Image from "next/image";
import cartIcon from '../../../assets/cart.png';
import CartContext from "@/store/CartContext";
import { ProductInterface } from "@/components/product/Interface";

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
                    {(cartState.products.length > 0) && cartState.products.map((item: ProductInterface) => (
                        <div key={Math.random()} className={styles.modal_item}>
                            {item.name}
                        </div>
                    ))}
                    
                    <div className={styles.modal_total}>
                        Total: {cartState.total.toFixed(2)} €
                    </div>
                </div>
            </section>
        </div>
    )
}

export default ExtendedCart;