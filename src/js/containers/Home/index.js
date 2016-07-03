import React from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';

import templateRender from './template';

import ProductAction from 'actions/products';
import { PRODUCT_DETAIL } from 'settings/route';

class Home extends React.Component {

  componentWillMount() {
      this.props.fetchProductList();
  }

  render() {
    return templateRender.call(this); 
  }

  onProductImageClickHandler(item) {
    browserHistory.push(`${PRODUCT_DETAIL}/${item.id}`);
  }

}

function mapDispatchToProps(dispatch) {
  return {
    fetchProductList: position => dispatch(ProductAction.fetchList())
  }
}

function mapStateToProps(state) {
  return {
    productList: state.products.get('List').toJS()
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
