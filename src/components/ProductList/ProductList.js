import { useContext } from 'react';
import styles from './ProductList.module.css';
import products from '../../dev-data/products.json';
import { cartCtx } from '../../context/CartContext';

const ProductList = () => {
  const cartContext = useContext(cartCtx);

  const productCards = products.map(product => (
    <div className={styles.productCard} key={product.id}>
      <img src={`/images${product.image_url}`} alt="concrete screws in box" />
      <div className={styles.productInfo}>
        <h4>{product.name}</h4>
        <p>{product.sku}</p>
        <button className={styles.addToCart} onClick={() => cartContext.addProductToCart(product)}>
          Add to Cart
        </button>
      </div>
    </div>
  ));

  return <section className={styles.productList}>{productCards}</section>;
};

export default ProductList;
