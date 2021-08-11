import React, { useReducer } from "react";
import cartReducer, {
  ADD_PRODUCT,
  REMOVE_PRODUCT,
  INCREMENT_PRODUCT,
  DECREMENT_PRODUCT,
} from "./cartReducers";

export const cartCtx = React.createContext({
  cart: [],
  totalItemsInCart: 0,
  totalCostOfCart: 0,
  addProductToCart: () => {},
  removeProductFromCart: () => {},
  incrementProductInCart: () => {},
  decrementProductInCart: () => {},
});

const CartContext = ({ children }) => {
  const [cartState, dispatch] = useReducer(cartReducer, {
    cart: [],
    totalItemsInCart: 0,
    totalCostOfCart: 0,
  });

  const addProductToCart = (product) => {
    dispatch({ type: ADD_PRODUCT, product: product });
  };

  const removeProductFromCart = (id) => {
    dispatch({ type: REMOVE_PRODUCT, id: id });
  };

  const incrementProductInCart = (id) => {
    dispatch({ type: INCREMENT_PRODUCT, id: id });
  };

  const decrementProductInCart = (id) => {
    dispatch({ type: DECREMENT_PRODUCT, id: id });
  };

  return (
    <cartCtx.Provider
      value={{
        cart: cartState.cart,
        totalItemsInCart: cartState.totalItemsInCart,
        totalCostOfCart: cartState.totalCostOfCart,
        addProductToCart: addProductToCart,
        removeProductFromCart: removeProductFromCart,
        incrementProductInCart: incrementProductInCart,
        decrementProductInCart: decrementProductInCart,
      }}
    >
      {children}
    </cartCtx.Provider>
  );
};

export default CartContext;
