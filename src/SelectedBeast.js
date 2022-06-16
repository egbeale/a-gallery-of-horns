import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

// import './SelectedBeast.css'

class SelectedBeast extends React.Component {
  render() {
    return (
      <>
        <Modal //className="img-responsive"
          show={this.props.showModal} 
          onHide={this.props.handleOnHide} 
        >
          <Modal.Header closeButton>
            <Modal.Title>{this.props.title}</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <img 
              src={this.props.image_url} 
              alt={this.props.description}
            />
          </Modal.Body>

        </Modal>
      </>
    )
  };
}

export default SelectedBeast;