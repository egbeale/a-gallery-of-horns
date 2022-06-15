import React from 'react';
import './Header.css';

class Header extends React.Component {
  render() {
    return(
      <header>
        <h1>Gallery of Horned Beasts</h1>
        <h2>Show the beasts you care.</h2>
        <h2>Click on your favorites.</h2>
      </header>
    );
  }
}

export default Header;