import { useContext } from 'react';
import styles from './Header.module.css';
import { cartCtx } from '../../context/CartContext';

const Header = ({ onCartClick }) => {
  const cartContext = useContext(cartCtx);

  return (
    <header className={styles.header}>
      <h1>Contextualize</h1>
      <button onClick={onCartClick} className={styles.btn}>
        <p>Cart</p>
        <div className={styles.btnNumber}>{cartContext.totalItemsInCart}</div>
      </button>
    </header>
  );
};

export default Header;
