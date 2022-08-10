//actions
import {INCREACE, DECREACE} from '../actions/countActions';

const initialState = {
  count: 1,
};

const countReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREACE: {
      return {...state, count: state.count + 1};
    }
    case DECREACE: {
      return {...state, count: state.count - 1};
    }
    default:
      return state;
  }
};

export default countReducer;
