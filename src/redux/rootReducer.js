import {combineReducers} from 'redux';

import countReducer from './reducers/countReducer';
import getItemsReducer from './reducers/getItemsReducer';
import userReducer from './reducers/userReducer';

const rootReducer = combineReducers({
  count: countReducer,
  items: getItemsReducer,
  userInfo: userReducer,
});

export default rootReducer;
