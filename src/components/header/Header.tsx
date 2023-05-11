import React from "react";
import CartTotal from "../cart/cartTotal/CartTotal";
function Header() {
    return (
        <div className="header">
            <div className="header_element">Logo</div>
            <div className="header_element">
                <strong>Header</strong>
            </div>
            <div className="header_element">
                <CartTotal />
            </div>
        </div>
    )
}

export default Header;