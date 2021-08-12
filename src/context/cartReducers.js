export const ADD_PRODUCT = 'ADD_PRODUCT';
export const REMOVE_PRODUCT = 'REMOVE_PRODUCT';
export const INCREMENT_PRODUCT = 'INCREMENT_PRODUCT';
export const DECREMENT_PRODUCT = 'DECREMENT_PRODUCT';

const addProductToCart = (state, product) => {
  const updatedCart = [...state.cart];
  const updatedItemIndex = updatedCart.findIndex(item => item.id === product.id);
  if (updatedItemIndex < 0) {
    updatedCart.push({ ...product, quantity: 1 });
  } else {
    // const currentItem = { ...updatedCart[updatedItemIndex] };
    // currentItem.quantity++;
    // updatedCart[updatedItemIndex] = currentItem;
    return incrementProductInCart(state, product.id);
  }
  return {
    ...state,
    totalItemsInCart: calculateTotalItemsInCart(updatedCart),
    totalCostOfCart: calculateTotalCostOfCart(updatedCart),
    cart: updatedCart,
  };
};

const removeProductFromCart = (state, id) => {
  const updatedCart = [...state.cart];
  const updatedItemIndex = updatedCart.findIndex(item => item.id === id);
  updatedCart.splice(updatedItemIndex, 1);
  return {
    ...state,
    totalItemsInCart: calculateTotalItemsInCart(updatedCart),
    totalCostOfCart: calculateTotalCostOfCart(updatedCart),
    cart: updatedCart,
  };
};

const incrementProductInCart = (state, id) => {
  const updatedCart = [...state.cart];
  const updatedItemIndex = updatedCart.findIndex(item => item.id === id);
  const currentItem = { ...updatedCart[updatedItemIndex] };
  currentItem.quantity++;
  updatedCart[updatedItemIndex] = currentItem;

  return {
    ...state,
    totalItemsInCart: calculateTotalItemsInCart(updatedCart),
    totalCostOfCart: calculateTotalCostOfCart(updatedCart),
    cart: updatedCart,
  };
};

const decrementProductInCart = (state, id) => {
  const updatedCart = [...state.cart];
  const updatedItemIndex = updatedCart.findIndex(item => item.id === id);
  const currentItem = { ...updatedCart[updatedItemIndex] };
  if (currentItem.quantity <= 1) {
    return removeProductFromCart(state, id);
  }
  currentItem.quantity--;
  updatedCart[updatedItemIndex] = currentItem;

  return {
    ...state,
    totalItemsInCart: calculateTotalItemsInCart(updatedCart),
    totalCostOfCart: calculateTotalCostOfCart(updatedCart),
    cart: updatedCart,
  };
};

const calculateTotalItemsInCart = cart => {
  return cart.reduce((acc, cur) => (acc += cur.quantity), 0);
};

const calculateTotalCostOfCart = cart => {
  return cart.reduce((acc, cur) => (acc += cur.quantity * cur.cost_ex_vat), 0);
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      return addProductToCart(state, action.product);
    case REMOVE_PRODUCT:
      return removeProductFromCart(state, action.id);
    case INCREMENT_PRODUCT:
      return incrementProductInCart(state, action.id);
    case DECREMENT_PRODUCT:
      return decrementProductInCart(state, action.id);
    default:
      return state;
  }
};

export default cartReducer;
