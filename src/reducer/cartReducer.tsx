export const cartReducer = (state : any, action : any) => {
    if(action.type === 'ADD_TO_CART') {
        return {
            products: state.products.concat(action.product),
            total: state.total + action.product.price
        }
    }

    return state
};