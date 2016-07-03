import React from 'react';
import templateRender from './template';

class ImageShowLarge extends React.Component {

  render() {
    console.debug('product item view props:', this.props);
    return templateRender.call(this);
  }

  onRateClick() {
    
  }

}

export default ImageShowLarge;
