import React, { useEffect } from 'react';
import { Overlay, ModalDiv } from './styledModal';

export default function Modal({ onClose, imageUrl }) {
  const handleKeyDown = (event) => {
    if (event.key === 'Escape') {
      onClose();
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleClickOutside = (event) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return (
    <Overlay className="overlay" onClick={handleClickOutside}>
      <ModalDiv>
        <img src={imageUrl} alt="Large" className="modal-image" />
      </ModalDiv>
    </Overlay>
  );
}

