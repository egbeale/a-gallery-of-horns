import React from 'react';
import HornedBeast from './HornedBeast.js';
import data from './data.json';
import './Main.css';

class Main extends React.Component {
  render() {
    let beasts = [];
    data.forEach((beast, idx) => {
      beasts.push(
        <HornedBeast
          title={beast.title}
          description={beast.description}
          imageUrl={beast.image_url}
          key={idx}
        />)
    });

    return(
      <main>
        {beasts}
      </main>
    );
  }
}

export default Main;