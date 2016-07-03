import React from 'react';
import ProductList from 'components/ProductList';

export default function() {
  const wrStyle = {
    height: 500
  };

  return (
    <div className="pages-wrapper" style={wrStyle}>
      {
        this.props.productList.length > 0 &&
          <ProductList items={this.props.productList} imageClick={ this.onProductImageClickHandler.bind(this) } />
      }
    </div>
  );
}
