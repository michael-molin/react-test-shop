import React, {MouseEventHandler, useContext} from 'react';
import {ProductInterface} from "./Interface";
import { CartItemInterface } from '../cart/CartItemInterface';
import CartContext from "@/store/CartContext";
import styles from './Product.module.scss';

function Product({id, image, name, description, price}: ProductInterface) {
    const {dispatch} = useContext(CartContext);
    const onClickHandler: MouseEventHandler = () => {
        const product : CartItemInterface ={
            name : name,
            image : image,
            quantity: 1,
            price : price,
            id : id
        }

        dispatch({type: 'ADD_TO_CART', product})
    };

    return (
        <div className={styles.card}>
            <img src="/assets/default-burger.jpeg"  className={styles.card_image} alt=""/>
            <div className={styles.card_overlay}>
                <div className={styles.card_header}>
                    <div>
                        <div className={styles.card_header_text}>
                            <h3>{name}</h3>
                            <span>{price} €</span>
                        </div>
                    </div>
                </div>
                <div className={styles.card_description}>
                    <p className={styles.card_description_text}>
                        {description}
                    </p>
                    <button className={styles.card_button} onClick={onClickHandler}>
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Product;