import {
  ADD_TO_CART,
  DELETE_CART,
  INCREMENT_QUANTITY,
  DECREMENT_QUANTITY
} from 'Redux/action-constants/cart';

export function addItemToCart(state, item) {
  let isSame = false;

  let cartItems = state.items.map(current => {
    if (current.id === item.id) {
      isSame = true;
      current.quantity += 1;
      return current;
    } else {
      return current;
    }
  });

  if (!isSame) {
    item['quantity'] = 1;
  }

  return {
    ...state,
    count: isSame ? state.count : state.count + 1,
    items: isSame ? [...cartItems] : [...state.items, item]
  };
}

export function deleteItemFromCart(state, item) {
  let items = state.items.filter(current => current.id !== item.id);
  return {
    ...state,
    count: state.count - 1,
    items
  };
}

export function increamentItemQuantity(state, item) {
  let items = state.items.map(current => {
    if (current.id === item.id) {
      current.quantity++;
      return current;
    }
    return current;
  });

  return {
    ...state,
    items
  };
}

export function decrementItemQuantity(state, item) {
  let items = state.items.map(current => {
    if (current.id === item.id && current.quantity !== 1) {
      current.quantity--;
      return current;
    }
    return current;
  });

  return {
    ...state,
    items
  };
}

export default function cart(state = { count: 0, items: [] }, action) {
  switch (action.type) {
    case ADD_TO_CART:
      return addItemToCart(state, action.payload);
    case DELETE_CART:
      return deleteItemFromCart(state, action.payload);
    case INCREMENT_QUANTITY:
      return increamentItemQuantity(state, action.payload);
    case DECREMENT_QUANTITY:
      return decrementItemQuantity(state, action.payload);
    default:
      return state;
  }
}
