import React, {useContext} from 'react';
import styles from './Product.module.css'
import Image from 'next/image'
import {ProductInterface} from "./Interface";
import dispatchContext from "@/store/DispatchContext";
import CartContext from "@/store/CartContext";

function Product({id, image, name, description, price}: ProductInterface) {
    const {dispatch} = useContext(CartContext);
    const onClickHandler: any = () => {
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
        <div className="card">
            <img src="/src/assets/default-burger.jpeg"  className="card_image" alt=""/>
            <div className="card_overlay">
                <div className="card_container">
                    <div className="card_container_header">
                        <div className="card_container_header_container">
                            <h3 className="card_container_header_container-name">{name}</h3>
                            <span className="card_container_header_container-price">{price} €</span>
                        </div>
                    </div>
                </div>
                <p className="card_description">
                    {description}
                </p>
                <button className="card_button" onClick={onClickHandler}>
                    Add to Cart
                </button>
            </div>
        </div>
    );
}


export default Product;