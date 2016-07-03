import React from 'react';
import templateRender from './template';

class ProductThumbList extends React.Component {
  render() {
    return templateRender.call(this);
  }

  onImageClick(item, key) {
    this.props.onThumbClick(item, key);
  }

}

export default ProductThumbList;
