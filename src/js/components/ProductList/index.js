import React from 'react';
import templateRender from './template';

class ProductList extends React.Component {

  render() {
    return templateRender.call(this);
  }

}

export default ProductList;
