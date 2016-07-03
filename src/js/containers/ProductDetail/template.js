import React from 'react';

import ProductItemView from 'components/ProductItemView';

export default function TemplateRnder()  {

  const { isLoading, product } = this.props;

  if (isLoading) {
    return (
      <div>IsLoading</div>
    )
  }

  return (
    <div>
      <ProductItemView
        onThumbClick={ this.onThumbClick.bind(this) } 
        showImageIndex={this.state.imageIndex}
        product={this.props.product}
      />
    </div>
  );
}
