import React from "react";

const ImageGalleryItem = ({ webformatURL, key }) => {
  return (
    <li key={key}>
      <img src={webformatURL} width="240" />
    </li>
  );
};

export default ImageGalleryItem;
