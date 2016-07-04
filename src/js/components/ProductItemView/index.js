import React from 'react';
import templateRender from './template';

class ProductItemView extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      imageListHover: false
    };
  }

  render() {
    return templateRender.call(this);
  }

  mouseOverImageList() {
    this.setState({imageListHover: true});
  }

  mouseOutImageList() {
    this.setState({imageListHover: false});
  }

  onRateClick() {}

}

export default ProductItemView;
