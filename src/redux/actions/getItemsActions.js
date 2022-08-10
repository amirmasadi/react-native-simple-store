export const GET_ITEMS_LOADING = 'GET_ITEMS_LOADING';
export const GET_ITEMS_SUCCESS = 'GET_ITEMS_SUCCESS';
export const GET_ITEMS_FAILURE = 'GET_ITEMS_FAILURE';

export const getItems = () => dispatch => {
  dispatch({type: GET_ITEMS_LOADING});
  fetch('https://fakestoreapi.com/products/')
    .then(res => res.json())
    .then(data => dispatch({type: GET_ITEMS_SUCCESS, payload: data}))
    .catch(error =>
      dispatch({
        type: GET_ITEMS_FAILURE,
        payload: error.message || 'Unexpected Error!!!',
      }),
    );
};
