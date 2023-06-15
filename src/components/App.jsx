import React, { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import SearchBar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Modal from './Modal/Modal';

export default function App() {
  const [imageName, setImagename] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [selectedImageUrl, setSelectedImageUrl] = useState('');

 const handleImageSubmit = (imageName) => {
   setImagename(imageName);};

 const toggleModal = (imageUrl) => {
    setShowModal((prevShowModal) => !prevShowModal);
    setSelectedImageUrl(imageUrl);
  };
    return (
      <div>
        <ToastContainer />
        <SearchBar onSearch={handleImageSubmit} />
        <ImageGallery imageName={imageName} onSelectImage={toggleModal} />
        {showModal && (
          <Modal isOpen={showModal} imageUrl={selectedImageUrl} onClose={toggleModal} />
        )}
      </div>
    );
  
}