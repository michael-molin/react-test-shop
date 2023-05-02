import React, {useContext} from 'react';
import styles from './Product.module.css'
import Image from 'next/image'
import {ProductInterface} from "./Interface";
import dispatchContext from "@/store/DispatchContext";

function Product({id, image, name, description, price}: ProductInterface) {
    const dispatch = useContext(dispatchContext);
    const onClickHandler: Function = () => {
        const product : ProductInterface ={
            name : name,
            image : image,
            description: description,
            price : price,
            id : id
        }
        dispatch({type: 'ADD_TO_CART', product})
    };

    return (
        <div className={styles.card}>
            <Image src="@/../src/assets/default-burger.jpeg" className={styles.card_image} alt=""/>
            <div className={styles.card_overlay}>
                <div className={styles.card_headerContainer}>
                    <div className={styles.card_header_text}>
                        <div className={styles.card_titleContainer}>
                            <h3 className={styles.card_title}>{name}</h3>
                            <span className={styles.card_price}>{price} €</span>
                        </div>
                    </div>
                </div>
                <p className={styles.card_description}>
                    {description}
                </p>
                <button className={styles.button} onClick={onClickHandler}>
                    Add to Cart
                </button>
            </div>
        </div>
    );
}


export default Product;