import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import './SelectedBeast.css'


class SelectedBeast extends React.Component {
  render() {
    return (
      <>
        <Modal 
          // values that have to be on our modal component:
          show={this.props.modalActive} // bringing the boolean from app.js
          onHide={this.props.modalClose} //method to make modal close. but why not just use handleCloseModal?
        >
          <Modal.Header closeButton>
            <Modal.Title>{this.props.selectedBeast.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body> 
            <img className="modal-img"
              src={this.props.selectedBeast.image_url}
              alt={this.props.selectedBeast.description}
            />
            <div>{this.props.selectedBeast.description}</div>
          </Modal.Body>

        </Modal> 
      </>
    )
  };
}

export default SelectedBeast;