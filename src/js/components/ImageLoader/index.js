import React from 'react';

class ImageLoad extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      loaded : false
    }
    this.image = null;
  }

  componentWillMount() {
    this.continueMount = true;
    return this.updateNewImage(this.props);
  }

  componentWillReceiveProps(nextProps) {
    return this.updateNewImage(nextProps);
  }

  updateNewImage(props) {
    this.image = new Image();
    this.image.onload = () => {
      this.continueMount && this.setState({ loaded: true });
    }
    this.image.onerror = () => {
      this.continueMount && this.setState({ loaded: false });
    };
    this.image.src = props.source;
  }

  componentWillUnmount() {
    this.continueMount = false;
  }

  render() {
    const { maxWidth } = this.props;
    const defaultImageStyle = {
      maxWidth: `${maxWidth}%`
    }
    return (
      <div>
        {
          this.state.loaded ?
            <img src={this.props.source} />
            :
            <img style={defaultImageStyle} src="/images/default-image.png" />
        }

      </div>
    );
  }
}

export default ImageLoad;
