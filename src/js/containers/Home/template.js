import React from 'react';
import ProductList from 'components/ProductList';

export default function() {
  const wrStyle = {
    height: 500
  };

  return (
    <div className="pages-wrapper" style={wrStyle}>

      <div className="pull-left">
        <select value={ this.state.orderName } onChange={this.selectOrderName.bind(this) } >
          <option value="title">by name</option>
          <option value="price">by price</option>
        </select>
      </div>

      <div className="pull-left">
        <select value={ this.state.orderType } onChange={this.selectOrderType.bind(this) } >
          <option value="asc">ASC</option>
          <option value="desc">DESC</option>
        </select>
      </div>
      <div className="clearfix"></div>
      <div className="clearfix">
      {
        this.props.productList.length > 0 &&
          <ProductList
            items={ this.state.productList }
            imageClick={ this.onProductImageClickHandler.bind(this) }
          />
      }
      </div>
    </div>
  );
}
