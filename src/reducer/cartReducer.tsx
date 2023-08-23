import { CartItemInterface, CartIterface } from "@/components/cart/Cart.Interface"
import { ActionInterface } from "./ReducerInterface";

export const cartReducer = (state : CartIterface, action : ActionInterface) => {
    console.log(state, action)
    if(action.type === 'ADD_TO_CART') {
        let cartItems = [...state.products];
        const itemIndex = cartItems.findIndex((el : CartItemInterface) => {
            if(el) {
                return el.name === action.product.name;
            }
        })
        if(itemIndex === -1) {
            return {
                products: cartItems.concat(action.product),
                total: state.total + action.product.price
            }
        }
        cartItems =  cartItems.map((item, i) => 
        itemIndex === i
            ? { ...item, quantity: item.quantity + 1 } 
            : item
        );
        return {
            products: cartItems,
            total: state.total + action.product.price
        }
    }
    
    if(action.type === 'REMOVE_QNT_FROM_CART') {
        let cartItems = [...state.products];
        const itemIndex = cartItems.findIndex((el : CartItemInterface) => {
            if(el) {
                return el.name === action.product.name;
            }
        })
        if(itemIndex === -1) {
            return {
                products: cartItems,
                total: state.total
            }
        }
        cartItems = cartItems.map((item, i) => {
            if(itemIndex === i){
                return { ...item, quantity: item.quantity - 1 };
            } else {
                return {...item};
            }
        })

        cartItems = cartItems.filter((item) => item.quantity > 0);
        return {
            products: cartItems,
            total: state.total - action.product.price
        }
    }

    if(action.type === 'REMOVE_FROM_CART') {
        let cartItems = [...state.products];
        let deletingQuantity = 1;
        const itemIndex = cartItems.findIndex((el : CartItemInterface) => {
            if(el) {
                return el.name === action.product.name;
            }
        })
        if(itemIndex === -1) {
            return {
                products: cartItems,
                total: state.total
            }
        }
        
        cartItems = cartItems.map((item, i) => {
            if(itemIndex === i){
                deletingQuantity = cartItems[itemIndex].quantity;
                return { ...item, quantity: 0 };
            } else {
                return {...item};
            }
        })
        cartItems = cartItems.filter((item) => item.quantity > 0);

        return {
            products: cartItems,
            total: state.total - (action.product.price * deletingQuantity)
        }
    }

    return state
};