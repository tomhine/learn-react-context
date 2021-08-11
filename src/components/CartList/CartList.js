import { CrossIcon } from "../UI/Icons";
import styles from "./CartList.module.css";

const CartList = ({ ctx }) => {
  const {
    cart,
    removeProductFromCart,
    incrementProductInCart,
    decrementProductInCart,
  } = ctx;

  const cartItems = cart.map((item) => (
    <div className={styles.cartItem} key={item.id}>
      <div className={styles.itemName}>
        <p>{item.sku}</p>
      </div>
      <div className={styles.itemQuantity}>
        <button
          className={styles.button}
          onClick={() => decrementProductInCart(item.id)}
        >
          -
        </button>
        <p>{item.quantity}</p>
        <button
          className={styles.button}
          onClick={() => incrementProductInCart(item.id)}
        >
          +
        </button>
      </div>
      <div className={styles.itemDelete}>
        <CrossIcon onClick={() => removeProductFromCart(item.id)} />
      </div>
    </div>
  ));

  return <div className={styles.cartListContainer}>{cartItems}</div>;
};

export default CartList;
