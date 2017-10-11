import { combineReducers } from 'redux';
import items from 'Redux/reducers/items-reducer';
import cart from 'Redux/reducers/cart-reducer';

export default combineReducers({
  items,
  cart
});
