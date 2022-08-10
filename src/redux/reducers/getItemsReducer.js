//actions
import {
  GET_ITEMS_LOADING,
  GET_ITEMS_SUCCESS,
  GET_ITEMS_FAILURE,
} from '../actions/getItemsActions';

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
    default:
      return state;
  }
};

export default getItemsReducer;
