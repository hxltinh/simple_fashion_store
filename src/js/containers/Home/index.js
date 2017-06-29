import React from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import { orderBy } from 'lodash';

import templateRender from './template';

import ProductAction from 'actions/products';
import { PRODUCT_DETAIL } from 'settings/route';

class Home extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      productList: [],
      orderName: 'title',
      orderType: 'asc'
    }
  }

  componentWillMount() {
      this.props.fetchProductList();
  }

  componentWillReceiveProps(nextProps) {
    let { productList } = nextProps;
    if (productList && productList.length > 0) {
      const newProductList = this.orderProductList(productList, this.state.orderName, this.state.orderType);
      this.setState({ productList: newProductList });
    }
  }

  render() {
    return templateRender.call(this);
  }

  onProductImageClickHandler(item) {
    browserHistory.push(`${PRODUCT_DETAIL}/${item.id}`);
  }

  selectOrderName(event) {
    const { productList, orderType } = this.state;
    const orderName = event.target.value;
    this.setState({
      orderName,
      productList: this.orderProductList(productList, orderName, orderType)
    });
  }

  selectOrderType(event) {
    const { productList, orderName } = this.state;
    const orderType = event.target.value;
    this.setState({
      orderType,
      productList: this.orderProductList(productList, orderName, orderType)
    });
  }

  orderProductList(productList, name, type) {
    return orderBy(productList, [name], [type]);
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
