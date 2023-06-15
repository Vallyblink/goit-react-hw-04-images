import React, { useEffect } from 'react';
import {Overlay, ModalDiv} from './styledModal'

export default function Modal({onClose, imageUrl}) {
  
  useEffect(() => {
    const handleKeyDown = (event) => {
          if (event.key === 'Escape') {
            onClose();
          }
        };

    document.addEventListener('keydown', handleKeyDown);
  
    return (document.removeEventListener('keydown', handleKeyDown))
  }, [onClose]
  )

  const handleClickOutside = (event) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

    return (
      <Overlay className="overlay" onClick={handleClickOutside}>
        <ModalDiv >
          <img src={imageUrl} alt="Large" className="modal-image" />

        </ModalDiv>
      </Overlay>
    );
  
}

