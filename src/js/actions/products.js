import BaseAction from './BaseAction';
import { find } from 'lodash';

export const PRODUCT_FETCH_START = 'PRODUCT_FETCH_START';
export const PRODUCT_FETCH_SUCCESS = 'PRODUCT_FETCH_SUCCESS';
export const PRODUCT_FETCH_FAIL = 'PRODUCT_FETCH_FAIL';

export const PRODUCT_GET_ITEM_START = 'PRODUCT_GET_ITEM_START';
export const PRODUCT_GET_ITEM_SUCCESS = 'PRODUCT_GET_ITEM_SUCCESS';
export const PRODUCT_GET_ITEM_FAIL = 'PRODUCT_GET_ITEM_FAIL';

class ProductAction extends BaseAction {

  fetchList() {
    return dispatch => {

      dispatch(this.sendStatus(PRODUCT_FETCH_START));
      return new Promise((resolve, reject) => {

        $.ajax({
          url: '/lib/sampledata/products.json', method: 'GET', dataType: 'JSON',
          success: res => {
            dispatch(this.sendStatusWithData(PRODUCT_FETCH_SUCCESS, res));
            return setTimeout(() => resolve(res));
          },
          error: err => {
            dispatch(this.sendStatus(PRODUCT_FETCH_FAIL));
            return setTimeout(() => reject(err));
          }
        });

      });
    }
  }

  getItem(id) {
    const intId = +id;

    return dispatch => {

      dispatch(this.sendStatus(PRODUCT_GET_ITEM_START));
      return new Promise((resolve, reject) => {

        $.ajax({
          url: '/lib/sampledata/products.json', method: 'GET', dataType: 'JSON',
          success: res => {
            const singleItem = find(res, item => item.id === intId);
            dispatch(this.sendStatusWithData(PRODUCT_GET_ITEM_SUCCESS, singleItem));
            return setTimeout(() => resolve(singleItem));
          },
          error: err => {
            dispatch(this.sendStatus(PRODUCT_GET_ITEM_FAIL));
            return setTimeout(() => reject(err));
          }
        });

      });
    }
  }

}

export default new ProductAction();
