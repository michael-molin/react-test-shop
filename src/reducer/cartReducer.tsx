import { CartItemInterface } from "@/components/cart/CartItemInterface"
export const cartReducer = (state : any, action : any) => {
    if(action.type === 'ADD_TO_CART') {
        let cartItems = [...state.products]
        const itemIndex = cartItems.findIndex(el => {
            return el.name === action.product.name
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
        let cartItems = [...state.products]
        const itemIndex = cartItems.findIndex(el => {
            return el.name === action.product.name
          })
        if(itemIndex === -1) {
            return {
                products: cartItems,
                total: state.total
            }
        }
        cartItems = cartItems.map((item, i) => {
            if(itemIndex === i){
                if(item.quantity > 1) {
                    return { ...item, quantity: item.quantity - 1 }
                }
                return null;
            }
            
            return {...item}
        });

        return {
            products: cartItems,
            total: state.total - action.product.price
        }
    }

    if(action.type === 'REMOVE_FROM_CART') {
        let cartItems = [...state.products]
        const itemIndex = cartItems.findIndex(el => {
            return el.name === action.product.name
          })
        if(itemIndex === -1) {
            return {
                products: cartItems,
                total: state.total
            }
        }
        cartItems = cartItems.map((item, i) => {
            if(itemIndex === i){
                return null;
            } 
            return { ...item }
        });
        return {
            products: cartItems,
            total: state.total - action.product.price
        }
    }

    return state
};