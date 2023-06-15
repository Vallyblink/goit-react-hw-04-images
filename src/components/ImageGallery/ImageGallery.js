import React, {  useEffect, useState } from 'react';
import GalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { fetchImages, fetchMoreImages} from '../API';
import { ImageGalleryContainer, LoadMoreButton } from './styledGallery';
import Loader from '../Loader/Loader';

export default function ImageGallery({imageName, onSelectImage}) {
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
 
  useEffect(() => {
    if (imageName) {
        setImages([]);
      setPage(1);
      setLoading(true);

      searchImages(imageName);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [imageName])
 
  const searchImages = (query) => {
    fetchImages(query)
      .then((image) => {
        setImages(image)
        setLoading(false)
      })
      .catch((error) => {
        toast.error('We have no picture like this. Try again!');
        setLoading(false)
      });
  };

 const loadMoreImages = () => {
    setLoading(true);
  fetchMoreImages(imageName, page)
    .then((newImages) => {
      setImages((prevImages) => [...prevImages, ...newImages]);
      setPage((prevPage) => prevPage + 1);
      setLoading(false);
    })
    .catch((error) => {
      console.log(error);
      toast.error('No more pictures, sorry. Search something else');
      setLoading(false);
    });
  };

 const handleImageClick = (imageUrl) => {
    onSelectImage(imageUrl);
  };

    return (
      <ImageGalleryContainer>
        {loading && <Loader />}
        <ul className="gallery">
          <GalleryItem images={images} onImageClick={handleImageClick} />
        </ul>
        {images.length > 0 && (
          <LoadMoreButton onClick={loadMoreImages}>Load More</LoadMoreButton>
        )}
      </ImageGalleryContainer>
    );
  
}