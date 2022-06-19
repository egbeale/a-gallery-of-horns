import React from 'react';
import Header from './Header.js';
import Footer from './Footer.js';
import Main from './Main.js'
import SearchHorns from './SearchHorns.js'
import data from './data.json';
import './App.css';
import SelectedBeast from './SelectedBeast.js';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalActive: false,
      selectedBeast: '',
      // hornData: data,
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
      //passing in real value as an object with properties. methods setState setting parameters.
    });
  };


  // ------------ FORM INPUT --------------

  // Do I need another event handler here?

  handleSelect = event => {
    let selected = event.target.value;
    console.log(selected);

    if (selected === '1') {
      let filteredData = data.filter(beast => beast.horns === 1);
      this.setState({
        hornData: filteredData});
      console.log(this);
    } else if (selected=== '2') {
      let filteredData = data.filter(beast => beast.horns === 2);
      this.setState({
        hornData: filteredData
      });
    } else if (selected === '3') {
      let filteredData = data.filter(beast => beast.horns === 3);
      this.setState({
        hornData: filteredData
      });
    } else if (selected === '100') {
      let filteredData = data.filter(beast => beast.horns > 3);
      this.setState({
        hornData: filteredData
      });
    } else {
      this.setState({
        hornData: data
      });
    }
  }

  render() {
    return (
      <>
        <Header/>
        <SearchHorns handleSelect={this.handleSelect}/> 
        <Main 
          data={data}
          handleOpenModal={this.handleOpenModal} // Going thru Main.js to send it to HB.js 
          hornData={this.state.hornData}
        />
        <SelectedBeast // sending this into SelectedBeast 
          modalActive={this.state.modalActive}
          modalClose={this.handleCloseModal}
          selectedBeast={this.state.selectedBeast}
        />
        <Footer/>
      </>
    );
  }
}

export default App;