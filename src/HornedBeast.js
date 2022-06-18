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
      likes: this.state.likes + 1
    });
    this.props.handleOpenModal(this.props.beast);
  }

  render() {
    return(
      <Card className='cards'>
        <Card.Body>
          <Card.Title className='titles'>{this.props.title}</Card.Title>
          <Card.Subtitle className='likes'>♡  {this.state.likes}</Card.Subtitle>
          <Card.Img 
            src={this.props.imageUrl} 
            alt={this.props.description} 
            title={this.props.title} 
            // onClick: passing in anonymous callback function. when clicked, execute handleOpenModal, and pass in that whole beast. it'll pass it, say it's true, set that object to the selectedBeast. Then down in render of app.js, that selectedBeast object gets sent into SelectedBeast.js.
            onClick={this.likePhoto}
            className='card-image'/>
          <Card.Text>{this.props.description}</Card.Text>
        </Card.Body>
      </Card>

    )
  }
}

export default HornedBeast;