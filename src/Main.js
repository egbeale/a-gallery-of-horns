import React from 'react';
import HornedBeast from './HornedBeast.js';
import './Main.css';

class Main extends React.Component {
  render() {
    // mapping over data. our beast data is an array of objects. when we call map on that array of data, we're assigning a parameter called beast, which is essentially one whole object 
    let beasts = this.props.data.map((beast, idx) => {
      return <HornedBeast
        title={beast.title}
        description={beast.description}
        imageUrl={beast.image_url}
        key={idx}
        handleOpenModal={this.props.handleOpenModal}
        beast={beast} // object containing all the beasts. taking it to HB.js like this: this.props.beasts = {...}
      />
    });
    return (
      <main>
        {beasts} 
      </main>
    )
  };
}

export default Main;