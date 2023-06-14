import React, { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import SearchBar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Modal from './Modal/Modal';

export class App extends Component {
  state = {
    imageName: '',
    showModal: false,
    selectedImageUrl: ''
  };

  handleImageSubmit = (imageName) => {
    this.setState({ imageName: imageName });
  };

  toggleModal = (imageUrl) => {
    this.setState((prevState) => ({
      showModal: !prevState.showModal,
      selectedImageUrl: imageUrl
    }));
  };

  render() {
    const { imageName, showModal, selectedImageUrl } = this.state;

    return (
      <div>
        <ToastContainer />
        <SearchBar onSearch={this.handleImageSubmit} />
        <ImageGallery imageName={imageName} onSelectImage={this.toggleModal} />
        {showModal && (
          <Modal isOpen={showModal} imageUrl={selectedImageUrl} onClose={this.toggleModal} />
        )}
      </div>
    );
  }
}
