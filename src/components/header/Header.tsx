import React from "react";
import Cart from "../cart/Cart";
import styles from './Header.module.scss'
function Header() {
    return (
        <div className={styles.header}>
            <div className={styles.header_element}>Logo</div>
            <div className={styles.header_element}>
                <strong>Header</strong>
            </div>
            <div className={styles.header_element}>
                <Cart />
            </div>
        </div>
    )
}

export default Header;