import {combineReducers} from 'redux';

import getItemsReducer from './reducers/getItemsReducer';

const rootReducer = combineReducers({
  items: getItemsReducer,
});

export default rootReducer;
