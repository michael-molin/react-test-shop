import React, {MouseEventHandler, useContext} from 'react';
import { CartItemInterface } from '../../CartItemInterface';
import CartContext from "@/store/CartContext";
import styles from './ItemCart.module.scss';

function ItemCart({id, image, name, quantity, price} : CartItemInterface) {
    const {dispatch} = useContext(CartContext)
    const addToCartHandler: MouseEventHandler = () => {
        const product : CartItemInterface ={
            name : name,
            image: image,
            quantity: 1,
            price : price,
            id : id
        }

        dispatch({type: 'ADD_TO_CART', product})
    };

    const removeQntToCartHandler: MouseEventHandler = () => {
        const product : CartItemInterface ={
            name : name,
            image: image,
            quantity: 1,
            price : price,
            id : id
        }

        dispatch({type: 'REMOVE_QNT_FROM_CART', product})
    };

    const removeToCartHandler: MouseEventHandler = () => {
        const product : CartItemInterface ={
            name : name,
            image: image,
            quantity: 1,
            price : price,
            id : id
        }
        dispatch({type: 'REMOVE_FROM_CART', product})
    };

    return (
        <div className={styles.item}>
            <div>
                {name}
            </div>
            <div>
                {quantity}
            </div>
            <div>
                {(price * quantity)}€
            </div>
            <div className={styles.item_btn}> 
                <input type="button" placeholder="-" value="+" onClick={addToCartHandler}/>
                <input type="button" placeholder="+" value="-" onClick={removeQntToCartHandler}/>
                <input type="button" placeholder="delete" value="delete" onClick={removeToCartHandler}/>
            </div>
        </div>
    )
}

export default ItemCart;