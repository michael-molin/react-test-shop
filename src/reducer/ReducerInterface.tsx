import { CartItemInterface } from "@/components/cart/CartItemInterface";

export interface ActionInterface {
    type: string,
    product: CartItemInterface
}