import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Header from './Header.js';
import Footer from './Footer.js';
import Main from './Main.js'
import data from './data.json';
import './App.css';
import SelectedBeast from './SelectedBeast.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false
      // SelectedBeast: '',
      // beastDescription: ''
    };
  };

  handleOnShowModal = (title, imageUrl, description) => {
    this.setState( {
      showModal: true,
      title: title,
      image_url: imageUrl
    });
  };

  handleOnHide = () => {
    this.setState({
      showModal: false 
    });
  };

  render() {
    return (
      <>
        <Header/>
        <Main 
          data={data}
          handleOnShowModal={this.handleOnShowModal}
        />
        <SelectedBeast
          showModal={this.state.showModal}
          handleOnHide={this.handleOnHide}
          title={this.state.title}
          image_url={this.state.imageUrl}
          description={this.state.description}
          SelectedBeast={this.SelectedBeast}
        />
        <Footer/>
      </>
    );
  }
}

export default App;