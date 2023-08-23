export interface CartItemInterface {
    id: string,
    image: string,
    name: string,
    price : number,
    quantity: number
}

export interface CartIterface {
    products: CartItemInterface[],
    total: number
}