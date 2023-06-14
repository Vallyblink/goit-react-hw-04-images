import React, { Component } from 'react';
import GalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { fetchImages, loadMoreImages } from '../API';
import { ImageGalleryContainer, LoadMoreButton } from './styledGallery';
import Loader from '../Loader/Loader';

export default class ImageGallery extends Component {
  state = {
    images: [],
    page: 1,
    isLoading: false
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.imageName !== this.props.imageName) {
      const onImageSearch = this.props.imageName;
      this.setState({ images: [], page: 1, isLoading: true }, () => {
        this.searchImages(onImageSearch);
      });
    }
  }

  searchImages = (query) => {
    fetchImages(query)
      .then((images) => {
        this.setState({ images, isLoading: false });
      })
      .catch((error) => {
        console.log(error);
        toast.error('We have no picture like this. Try again!');
        this.setState({ isLoading: false });
      });
  };

  loadMoreImages = () => {
    const { imageName } = this.props;
    const { page } = this.state;
    this.setState({ isLoading: true });
    loadMoreImages(imageName, page)
      .then((images) => {
        this.setState((prevState) => ({
          images: [...prevState.images, ...images],
          page: prevState.page + 1,
          isLoading: false
        }));
      })
      .catch((error) => {
        console.log(error);
        toast.error('Error loading more images');
        this.setState({ isLoading: false });
      });
  };

  handleImageClick = (imageUrl) => {
    this.props.onSelectImage(imageUrl);
  };

  render() {
    const { images, isLoading } = this.state;

    return (
      <ImageGalleryContainer>
        {isLoading && <Loader />}
        <ul className="gallery">
          <GalleryItem images={images} onImageClick={this.handleImageClick} />
        </ul>
        {images.length > 0 && (
          <LoadMoreButton onClick={this.loadMoreImages}>Load More</LoadMoreButton>
        )}
      </ImageGalleryContainer>
    );
  }
}