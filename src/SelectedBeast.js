import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

// import './SelectedBeast.css'

class SelectedBeast extends React.Component {
  render() {
    return (
      <>
        <Modal //className="img-responsive"
          // values that have to be on our modal component:
          show={this.props.modalActive} // bringing the boolean from app.js
          onHide={this.props.modalClose} //method to make modal close. but why not just use handleCloseModal?
        >
          <Modal.Header closeButton>
            {this.props.selectedBeast.title}
            {/* <Modal.Title>{this.props.title}</Modal.Title> */}
          </Modal.Header>

          <Modal.Body>
            <img 
              src={this.props.selectedBeast.image_url}
              alt={this.props.selectedBeast.description}
            />
            {/* {this.props.selectedBeast.description} */}
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.props.modalClose}></Button>
          </Modal.Footer>

        </Modal>
      </>
    )
  };
}

export default SelectedBeast;