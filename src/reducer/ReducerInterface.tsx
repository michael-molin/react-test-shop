import { CartItemInterface } from "@/components/cart/Cart.Interface";

export interface ActionInterface {
    type: string,
    product: CartItemInterface
}