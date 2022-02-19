import ImageGalleryItem from "../ImageGalleryItem";
import PropTypes from "prop-types";
import { GalleryUl } from "./ImageGallery.styled";

const ImageGallery = ({ images, onClick }) => {
  return (
    <GalleryUl>
      {images.map(({ largeImageURL, webformatURL, tags }, index) => {
        return (
          <ImageGalleryItem
            key={index}
            data={{ largeImageURL, webformatURL, tags }}
            onImageClick={onClick}
          />
        );
      })}
    </GalleryUl>
  );
};

export default ImageGallery;

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(PropTypes.shape).isRequired,
  onClick: PropTypes.func.isRequired,
};
