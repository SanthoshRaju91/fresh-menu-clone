import {
  ADD_TO_CART,
  DELETE_CART,
  DECREMENT_QUANTITY,
  INCREMENT_QUANTITY
} from 'Redux/action-constants/cart';

export function addItemToCart(data) {
  return {
    type: ADD_TO_CART,
    payload: data
  };
}

export function deleteItemFromCart(data) {
  return {
    type: DELETE_CART,
    payload: data
  };
}

export function decrementItemQuantity(data) {
  return {
    type: DECREMENT_QUANTITY,
    payload: data
  };
}

export function incrementItemQuantity(data) {
  return {
    type: INCREMENT_QUANTITY,
    payload: data
  };
}
