import React from 'react';
import templateRender from './template';

class ProductItem extends React.Component {

  render() {
    return templateRender.call(this);
  }

  onRateClick(rateNum) {

  }

  onImageClick(e) {
    e.preventDefault();
    this.props.imageClick(this.props.item);
  }

}

export default ProductItem;
