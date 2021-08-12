import React, { useState } from 'react';
import styles from './App.module.css';
import CartModal, { BackDrop } from './components/CartModal/CartModal';
import Header from './components/Header/Header';
import ProductList from './components/ProductList/ProductList';
import CartContext from './context/CartContext';

function App() {
  const [cartOpen, setCartOpen] = useState(false);

  const openCartHandler = () => {
    setCartOpen(true);
  };

  const closeCartHandler = e => {
    e.stopPropagation();
    setCartOpen(false);
  };

  return (
    <div className={styles.app}>
      <CartContext>
        {cartOpen && (
          <>
            <BackDrop onBackdropClick={closeCartHandler} />
            <CartModal />
          </>
        )}
        <Header onCartClick={openCartHandler} />
        <main>
          <ProductList />
        </main>
        <footer></footer>
      </CartContext>
    </div>
  );
}

export default App;
