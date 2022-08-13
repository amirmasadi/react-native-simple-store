//actions
import {
  LIKE_ITEM,
  REMOVE_LIKE_ITEM,
  ADD_TO_CART,
  REMOVE_TO_CART,
} from '../actions/userAction';

const initialState = {
  likes: [],
  inCart: [],
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case LIKE_ITEM: {
      let newState = state.likes.filter(item => item.id !== action.payload.id);
      console.log(state.likes.map(item => item.isLiked === true));
      return [...newState, {...action.payload, isLiked: true}];
    }
    case REMOVE_LIKE_ITEM: {
      let newState = state.likes.filter(item => item.id !== action.payload.id);
      return [...newState, {...action.payload, isLiked: false}];
    }
    case ADD_TO_CART:
      return {...state, inCart: [...state.inCart, action.payload]};
    case REMOVE_TO_CART: {
      let inCartItems = state.inCart.filter(itm => itm.id !== action.payload);
      return {...state, inCart: [...inCartItems]};
    }
    default:
      return state;
  }
};

export default userReducer;
