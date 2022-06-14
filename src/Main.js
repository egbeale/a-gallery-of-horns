import React from 'react';
import HornedBeast from './HornedBeast.js';

class Main extends React.Component {
  render() {
    return(
      <main>
        <HornedBeast
          title='ram'
          imageUrl='https://images.unsplash.com/photo-1516013007291-7597b5b05efa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1MjI0MTg0Nw&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080'
          description='nice pair of horns'
        />
        <HornedBeast
          title='A giraffe'
          imageUrl='https://images.unsplash.com/photo-1498374420960-c42a0d9a4d81?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1MjI0MTA2OQ&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080'
          description='what is a horn'
        />
      </main>
    );
  }
}

export default Main;