import ImageGalleryItem from "../ImageGalleryItem";
import PropTypes from "prop-types";

const ImageGallery = ({ images }) => {
  return (
    <ul>
      {images.map(({ webformatURL, tags }, index) => {
        return <ImageGalleryItem key={index} data={{ webformatURL, tags }} />;
      })}
    </ul>
  );
};

export default ImageGallery;

ImageGallery.propTypes = {
  picture: PropTypes.arrayOf(PropTypes.shape),
};
