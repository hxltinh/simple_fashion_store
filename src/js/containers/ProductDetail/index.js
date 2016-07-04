import React from 'react';
import { connect } from 'react-redux';

import tempateRender from './template';
import productAction from 'actions/products';
import { PRODUCT_DETAIL } from 'settings/route';

class ProductDetail extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      imageIndex : 0
    }
  }

  componentWillMount() {
    this.props.getProductItem(this.props.params.id);
  }

  render() {
    return tempateRender.call(this);
  }

  onThumbClick(item, key) {
    this.setState({ imageIndex : key });
  }

}

function mapDispatchToProps(dispatch) {
  return {
    getProductItem: id => dispatch(productAction.getItem(id))
  }
}

function mapStateToProps(state) {

  return {
    product: state.products.get('Item').toJS(),
    isLoading: state.products.get('isLoading'),
    isHaveError: state.products.get('isHaveError')
  };
}

export default {
  path: `${PRODUCT_DETAIL}/:id`,
  component: connect(mapStateToProps, mapDispatchToProps)(ProductDetail)
};
