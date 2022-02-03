import { Component } from "react";
import PropTypes from "prop-types";
import axios from "axios";

class ImageGallery extends Component {
  state = {
    images: [],
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.images !== this.props.images) {
      axios
        .get(
          `https://pixabay.com/api/?q=${this.props.searchImages}&page=2&key=23095971-ceaeacbf51a21ad754e50720c&image_type=photo&orientation=horizontal&per_page=12`
        )
        .then((res) => {
          const images = res.data.hits;
          this.setState({ images });
        });
    }
  }

  render() {
    return (
      <div>
        {this.state.images && <div>{this.state.images}</div>}
        Yulia
      </div>
    );
  }
}

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(PropTypes.object),
};

export default ImageGallery;
