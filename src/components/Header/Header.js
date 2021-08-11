import { useContext } from "react";
import styles from "./Header.module.css";
import ThemeContext from "../../context/ThemeContext";

const Header = ({ onCartClick, isDarkTheme }) => {
  const themeCtx = useContext(ThemeContext);

  const btn = {
    backgroundColor: themeCtx.element,
    color: themeCtx.text,
    border: `1px solid ${themeCtx.text}`,
    boxShadow: `0 2px 4px 2px ${themeCtx.shadowColor}`,
  };

  return (
    <header
      className={styles.header}
      style={{ color: themeCtx.text, backgroundColor: themeCtx.element }}
    >
      <h1>Contextualize</h1>
      <nav>
        <ul className={styles.navList}>
          <li>About Us</li>
          <li>Contact</li>
          <li>Other</li>
        </ul>
      </nav>
      <button style={btn} onClick={onCartClick} className={styles.btn}>
        Cart
      </button>
    </header>
  );
};

export default Header;
