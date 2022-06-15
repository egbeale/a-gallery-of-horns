import React from 'react';
import './HornedBeast.css'
import Card from 'react-bootstrap/Card';

class HornedBeast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      likes: 0,
    }
  }

  likePhoto = () => {
    this.setState({
      likes: this.state.likes + 1,
    })
  }

  render() {
    return(
      <Card 
        // border='light' 
        className='cards'
      >
        <Card.Body>
          <Card.Title className='titles'>{this.props.title}</Card.Title>
          <Card.Subtitle className='likes'>♡  {this.state.likes}</Card.Subtitle>
          <Card.Img 
            src={this.props.imageUrl} 
            alt={this.props.description} 
            title={this.props.title} 
            onClick={this.likePhoto}
            className='card-image'/>
          <Card.Text>{this.props.description}</Card.Text>
        </Card.Body>
      </Card>
    )
  }
}

export default HornedBeast;