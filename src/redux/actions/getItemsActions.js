import AsyncStorage from '@react-native-async-storage/async-storage';

export const GET_ITEMS_LOADING = 'GET_ITEMS_LOADING';
export const GET_ITEMS_SUCCESS = 'GET_ITEMS_SUCCESS';
export const GET_ITEMS_FAILURE = 'GET_ITEMS_FAILURE';

export const getItems = () => async dispatch => {
  const storedItems = await AsyncStorage.getItem('storedItems');
  if (storedItems !== null) {
    dispatch({type: GET_ITEMS_SUCCESS, payload: JSON.parse(storedItems)});
  } else {
    dispatch({type: GET_ITEMS_LOADING});
    try {
      let res = await fetch('https://fakestoreapi.com/products/');
      let data = await res.json();
      dispatch({type: GET_ITEMS_SUCCESS, payload: data});
      await AsyncStorage.setItem('storedItems', JSON.stringify(data));
    } catch (err) {
      dispatch({
        type: GET_ITEMS_FAILURE,
        payload: err.message || 'Unexpected Error!!!',
      });
    }
  }
};
