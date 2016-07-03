import React from 'react';
import ProductItem from 'components/ProductItem';

export default function Render() {

  const ItemList = this.props.items.map((item, key) => {
    return (
      <div key={key} className="col-sx-4 col-sm-4 col-md-3 col.lg-3">
        <ProductItem item={item} imageClick={this.props.imageClick} />
      </div>
    );
  });

  return (
    <div className="b-product-list row">
      { ItemList }
    </div>
  );
}
