import { FETCH_ITEMS } from 'Redux/action-constants/items';

export function fetchItems(state = [], payload) {
  return [...state, ...payload];
}

export default function items(state = [], action) {
  switch (action.type) {
    case FETCH_ITEMS:
      return fetchItems(state, action.payload);
    default:
      return state;
  }
}
