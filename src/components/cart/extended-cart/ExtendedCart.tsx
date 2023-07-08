import React from "react";
import styles from './ExtendedCart.module.scss';

function ExtendedCart({extendedCart} : boolean) {
    const showHideClassName = extendedCart ? 'modal_show' : 'modal_hide';
    const handlerClose = () => {
        return false;
    }

    return (
        <div className={styles.showHideClassName}>
            <section className={styles.modal_main}>
                <button type="button" className={styles.modal_btn} onClick={handlerClose}>
                    Close
                </button>
            </section>
        </div>
    )
}

export default ExtendedCart;