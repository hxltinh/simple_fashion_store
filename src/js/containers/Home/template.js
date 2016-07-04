import React from 'react';

import ProductList from 'components/ProductList';
import ImageSizeControl from 'components/ImageSizeControl';

export default function() {
  const wrStyle = {
    height: 500
  };

  return (
    <div className="b-home-pages" style={wrStyle}>

      <div className="pull-left b-select-wrapper">
        <label>filter by name</label>
        <select value={ this.state.orderName } onChange={this.selectOrderName.bind(this) } >
          <option value="title">by name</option>
          <option value="price">by price</option>
        </select>
      </div>

      <div className="pull-left b-select-wrapper">
        <label>filter by size</label>
        <select value={ this.state.orderType } onChange={this.selectOrderType.bind(this) } >
          <option value="asc">ASC</option>
          <option value="desc">DESC</option>
        </select>
      </div>

      <div className="b-hp-size-control pull-right">
        <ImageSizeControl />
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
