import React, { Component } from 'react';
import {Overlay, ModalDiv} from './styledModal'

class Modal extends Component {
  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = (event) => {
    if (event.key === 'Escape') {
      this.props.onClose();
    }
  };

  handleClickOutside = (event) => {
    if (event.target === event.currentTarget) {
      this.props.onClose();
    }
  };

  render() {
    const { isOpen, imageUrl,} = this.props;

    if (!isOpen) {
      return null;
    }

    return (
      <Overlay className="overlay" onClick={this.handleClickOutside}>
        <ModalDiv >
          <img src={imageUrl} alt="Large" className="modal-image" />

        </ModalDiv>
      </Overlay>
    );
  }
}

export default Modal;