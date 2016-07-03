import { Map, List, fromJS } from 'immutable';

import {
  PRODUCT_FETCH_START,
  PRODUCT_FETCH_SUCCESS,
  PRODUCT_FETCH_FAIL,

  PRODUCT_GET_ITEM_START,
  PRODUCT_GET_ITEM_SUCCESS,
  PRODUCT_GET_ITEM_FAIL

} from 'actions/products';

const initialState = Map({
  List: List(),
  Item: Map({
    images: List()
  }),
  isLoading: false,
  isHaveError: false
});

const reducer = (state = initialState, action) => {
  console.info('state:', action);
  switch (action.type) {

    case PRODUCT_GET_ITEM_START:
    case PRODUCT_FETCH_START:
      return state.withMutations(state => {
        state.set('isHaveError', false);
        state.set('isLoading', true);
      });

    case PRODUCT_GET_ITEM_FAIL:
    case PRODUCT_FETCH_FAIL:
      return state.withMutations(state => {
        state.set('isHaveError', true);
        state.set('isLoading', false);
      });

    case PRODUCT_FETCH_SUCCESS:
      return state.withMutations(state => {
        state.set('List', fromJS(action.data));
        state.set('isLoading', false);
      });

    case PRODUCT_GET_ITEM_SUCCESS:
      return state.withMutations(state => {
        state.set('Item', fromJS(action.data));
        state.set('isLoading', false);
      });

    default:
      return state;
  }
}

export default reducer;
