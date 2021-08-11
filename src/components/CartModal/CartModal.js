import { useContext } from "react";
import { createPortal } from "react-dom";
import { cartCtx } from "../../context/CartContext";
import CartList from "../CartList/CartList";
import styles from "./CartModal.module.css";

export const BackDrop = ({ onBackdropClick }) => {
  const backdrop = (
    <div className={styles.backdrop} onClick={onBackdropClick}></div>
  );
  const backdropElement = document.getElementById("backdrop");

  return createPortal(backdrop, backdropElement);
};

const CartModal = () => {
  const cartContext = useContext(cartCtx);

  const cart = (
    <section className={styles.cartContainer}>
      <div className={styles.titleContainer}>
        <h2>Cart</h2>
        <p>
          Total Items:{" "}
          <span className={styles.totalValue}>
            {cartContext.totalItemsInCart}
          </span>
        </p>
        <p>
          Total Cost:{" "}
          <span className={styles.totalValue}>
            £{cartContext.totalCostOfCart.toFixed(2)}
          </span>
        </p>
      </div>
      <div className={styles.cartListContainer}>
        {cartContext.cart.length < 1 ? (
          <p>Nothing in your cart!</p>
        ) : (
          <CartList ctx={cartContext} />
        )}
      </div>
    </section>
  );

  const overlayElement = document.getElementById("overlay");

  return createPortal(cart, overlayElement);
};

export default CartModal;
