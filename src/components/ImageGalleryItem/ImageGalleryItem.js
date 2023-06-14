import React from 'react';
import { ImageGallery, ImageGalleryItem } from './styledItem';

const GalleryItem = ({ images, onImageClick }) => {
  const handleItemClick = (imageUrl) => {
    onImageClick(imageUrl);
  };

  return (
    <>
      {images.map(image => (
        <ImageGallery
          className="gallery-item"
          key={image.id}
          onClick={() => handleItemClick(image.largeImageURL)}
        >
          <ImageGalleryItem src={image.webformatURL} alt={image.alt} />
        </ImageGallery>
      ))}
    </>
  );
};

export default GalleryItem;
