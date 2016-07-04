import React from 'react';

class ImageSizeControl extends React.Component {

  render() {
    return (
      <div className="b-image-size-control form-inline pull-right ">
        <small>Image size</small>
        <i className="fa fa-th purple-color font-large-12" aria-hidden="true"></i>
        <i className="fa fa-th-large gray-light font-large-12" aria-hidden="true"></i>
      </div>
    );
  }


}

export default ImageSizeControl;
