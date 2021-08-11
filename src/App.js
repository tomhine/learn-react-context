import React, { useState } from "react";
import styles from "./App.module.css";
import CartModal, { BackDrop } from "./components/CartModal/CartModal";
import Header from "./components/Header/Header";
import ProductList from "./components/ProductList/ProductList";
import CartContext from "./context/CartContext";
import ThemeContext, { theme } from "./context/ThemeContext";

function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(true);
  const [cartOpen, setCartOpen] = useState(false);

  const themeToggleHandler = () => {
    setIsDarkTheme((curr) => !curr);
  };

  const openCartHandler = () => {
    setCartOpen(true);
  };

  const closeCartHandler = (e) => {
    e.stopPropagation();
    setCartOpen(false);
  };

  return (
    <div className={styles.app}>
      <ThemeContext.Provider value={isDarkTheme ? theme.dark : theme.light}>
        <CartContext>
          {cartOpen && (
            <>
              <BackDrop onBackdropClick={closeCartHandler} />
              <CartModal />
            </>
          )}
          <Header onCartClick={openCartHandler} isDarkTheme={isDarkTheme} />
          <main>
            <ProductList />
          </main>
          <footer></footer>
        </CartContext>
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
