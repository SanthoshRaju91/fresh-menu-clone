import { FETCH_ITEMS } from 'Redux/action-constants/items';
import request from 'Core/ajax';

export function fetchItems(data) {
  return {
    type: FETCH_ITEMS,
    payload: data
  };
}

export function fetchItemsAPI() {
  return function(dispatch) {
    return request('/items')
      .then(response => dispatch(fetchItems(response.data)))
      .catch(err => console.log(err));
  };
}
