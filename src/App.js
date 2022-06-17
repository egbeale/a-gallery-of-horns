import React from 'react';
import Header from './Header.js';
import Footer from './Footer.js';
import Main from './Main.js'
import data from './data.json';
// import Modal from 'react-bootstrap/Modal';
import './App.css';
import SelectedBeast from './SelectedBeast.js';
// import 'bootstrap/dist/css/bootstrap.min.css'; // wtf is this

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalActive: false,
      selectedBeast: ''
      // set up initial state of selectedBeast object. this.setState({ selectedBeast: selectedBeast })
    };
  };

  handleCloseModal = () => {
    this.setState({
      modalActive: false,
    });
  };

  // We pass this method down to HornedBeast.js bc that's where click event happens. HB.js is responsible for opening modal.
  handleOpenModal = (beast) => {
    this.setState( {
      modalActive: true,
      selectedBeast: beast,
      // title: title,
      // image_url: imageUrl
    });
  };



  render() {
    return (
      <>
        <Header/>
        <Main 
          data={data}
          handleOpenModal={this.handleOnShowModal} // Going thru Main.js to send it to HB.js 
        />
        <SelectedBeast // sending this into SelectedBeast 
          modalActive={this.state.modalActive}
          modalClose={this.handleCloseModal}
          // title={this.state.title}
          // image_url={this.state.imageUrl}
          // description={this.state.description}
          slectedBeast={this.selectedBeast}
        />
        <Footer/>
      </>
    );
  }
}

export default App;