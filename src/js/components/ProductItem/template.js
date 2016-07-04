import React from 'react';
import ImageLoader from 'components/ImageLoader';
import Rating from 'react-rating';
import { round } from 'lodash';

export default function Render() {
  const { item } = this.props;

  return (
    <div className="b-product-item">
      <a href="#"
        className="b-pi-image-wrapper"
        onClick={this.onImageClick.bind(this)}
      >
        <ImageLoader maxWidth={80} source={item.images[0].url} />
      </a>
      <label class="name">{item.title}</label>
      <label>{item.price} kr</label>
      <Rating
        start={0}
        stop={5}
        step={1}
        initialRate={round(item.raiting)}
        empty={ <i className="fa fa-star-o" aria-hidden="true"></i> }
        placeholder={ <i className="fa fa-star" aria-hidden="true"></i> }
        full={ <i className="fa fa-star" aria-hidden="true"></i> }
        onClick={this.onRateClick.bind(this)}
      />
      <div>
        <button className="btn btn-default"><i className="fa fa-heart" aria-hidden="true"></i></button>
        <button className="btn btn-default"><i className="fa fa-files-o" aria-hidden="true"></i></button>
      </div>
    </div>
  );
}
