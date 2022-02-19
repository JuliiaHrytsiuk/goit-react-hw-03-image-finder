import PropTypes from "prop-types";
import { ImageItem, ItemImage } from "./ImageGalleryItem.styled";

const ImageGalleryItem = ({ data, onImageClick }) => {
  const { webformatURL, tags, largeImageURL } = data;

  return (
    <ImageItem>
      <ItemImage
        src={webformatURL}
        alt={tags}
        onClick={() => onImageClick(largeImageURL, tags)}
      />
    </ImageItem>
  );
};

ImageGalleryItem.propTypes = {
  data: PropTypes.shape({
    webformatURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
  }),
  onImageClick: PropTypes.func.isRequired,
};
export default ImageGalleryItem;
