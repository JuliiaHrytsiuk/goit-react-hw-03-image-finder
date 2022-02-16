import PropTypes from "prop-types";

const ImageGalleryItem = ({ data }) => {
  const { webformatURL, tags } = data;

  return (
    <li>
      <img src={webformatURL} alt={tags} />
    </li>
  );
};

ImageGalleryItem.propTypes = {
  data: PropTypes.shape({
    webformatURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
  }),
};
export default ImageGalleryItem;
