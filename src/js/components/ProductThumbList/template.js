import React from 'react';
import ImageLoader from 'components/ImageLoader';

export default function templateRender() {

  const imageList = this.props.images.map((item, key) => {
    return (
      <div key={key} className="thumb-image" onClick={ this.onImageClick.bind(this, item, key) }>
        <ImageLoader source={ item.thumbnail } />
      </div>
    );
  });
  return (
    <div>{ imageList }</div>
  );
}
