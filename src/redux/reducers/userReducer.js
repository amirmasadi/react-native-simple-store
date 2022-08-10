//actions
import {
  LIKE_ITEM,
  DISLIKE_ITEM,
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
      let alredyExist = state.likes.filter(
        item => item.id === action.payload.id,
      );
      if (alredyExist.length === 0) {
        return {...state, likes: [...state.likes, action.payload]};
      } else {
        let otherLikedItems = state.likes.filter(
          item => item.id !== action.payload.id,
        );
        return {...state, likes: [...otherLikedItems]};
      }
    }
    // case DISLIKE_ITEM: {
    //   let likeItems = state.likes.filter(itm => itm.id !== action.payload);
    //   return {...state, likes: [...likeItems]};
    // }
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
