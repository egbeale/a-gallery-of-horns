import React from 'react';
import HornedBeast from './HornedBeast.js';
import './Main.css';

class Main extends React.Component {
  render() {
    let beasts = this.props.data.map((beast, idx) => {
      return <HornedBeast
        title={beast.title}
        description={beast.description}
        imageUrl={beast.image_url}
        key={idx}
        handleOnShowModal={this.props.handleOnShowModal}
      />
  });
  return (
    <main>
      {beasts}
    </main>
  )};
}

export default Main;