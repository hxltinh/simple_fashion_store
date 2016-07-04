import React from 'react';
import Rating from 'react-rating';

import ImageLoader from 'components/ImageLoader';
import ProductThumbList from 'components/ProductThumbList';
import classNames from 'classnames';

export default function TemplateRender() {
  const { product, showImageIndex } = this.props;
  const imgListStyle = {
    opacity: 0
  }

  console.info('this.state.imageListHover:', this.state.imageListHover);

  const imagesClass = classNames({
      'b-piv-image-list col-sx-2 col-sm-2 col-md-2 col.lg-2 ': !this.state.imageListHover,
      'b-piv-image-list col-sx-2 col-sm-2 col-md-2 col.lg-2 show': this.state.imageListHover
    });

  return (
    <div className="b-product-item-view container">
      <div className="row">

        <div className="b-piv-image-wrapper"
          onMouseEnter={ this.mouseOverImageList.bind(this) }
          onMouseLeave={ this.mouseOutImageList.bind(this) }
        >
          <div className={imagesClass}>
          {
            product.images.length > 0 &&
              <ProductThumbList onThumbClick={ this.props.onThumbClick } images={ product.images } />

          }
          </div>

          <div className="b-piv-image-full col-sx-10 col-sm-10">
            {
              product.images.length > 0 &&
                <ImageLoader source={ product.images[showImageIndex].url } />

            }

          </div>

          <div className="b-piv-image-footer text-center text-uppercase">
            <h3>AVAILABLE SIZE</h3>
            <div>{ product && product.size && product.size.join(', ') }</div>
          </div>
        </div>

        <div className="b-piv-info row text-center">
          <div className="b-piv-info clearfix">
            <div className="center-block">
              <div>
                <Rating
                  start={0}
                  stop={5}
                  step={1}
                  initialRate={3}
                  empty={ <i className="fa fa-star-o" aria-hidden="true"></i> }
                  placeholder={ <i className="fa fa-star" aria-hidden="true"></i> }
                  full={ <i className="fa fa-star" aria-hidden="true"></i> }
                  onClick={this.onRateClick.bind(this)}
                />
              </div>
              <div> { product.title } </div>
              <div> { product.price } </div>
              <div> { product.brand } </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
