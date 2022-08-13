//actions
import {
  GET_ITEMS_LOADING,
  GET_ITEMS_SUCCESS,
  GET_ITEMS_FAILURE,
} from '../actions/getItemsActions';

import {LIKE_ITEM, ADD_TO_CART, REMOVE_TO_CART} from '../actions/userAction';

const initialState = {
  items: [],
  error: '',
  loading: false,
};

const getItemsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ITEMS_LOADING:
      return {...state, loading: true};
    case GET_ITEMS_SUCCESS:
      return {...state, items: action.payload, loading: false};
    case GET_ITEMS_FAILURE:
      return {...state, error: action.payload, loading: false};
    case LIKE_ITEM: {
      let objIndex = state.items.findIndex(obj => obj.id === action.payload.id);
      if (state.items[objIndex].isLiked) {
        state.items[objIndex].isLiked = false;
      } else {
        state.items[objIndex].isLiked = true;
      }
      return {...state};
    }
    case ADD_TO_CART: {
      let objIndex = state.items.findIndex(obj => obj.id === action.payload.id);
      if (state.items[objIndex].quantity) {
        state.items[objIndex].quantity += 1;
      } else {
        state.items[objIndex].quantity = 1;
      }
      return {...state};
    }
    case REMOVE_TO_CART: {
      let objIndex = state.items.findIndex(obj => obj.id === action.payload.id);
      if (state.items[objIndex].quantity > 0) {
        state.items[objIndex].quantity -= 1;
      }
      return {...state};
    }
    default:
      return state;
  }
};

export default getItemsReducer;
