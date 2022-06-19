import React from 'react';
import Form from 'react-bootstrap/Form';
import './SearchHorns.css';

class SearchHorns extends React.Component {
  render() {
    return (
      <Form>
        <Form.Group>
          <Form.Label>Filter beasts by # of horns:</Form.Label>
          <Form.Select onChange={this.props.handleSelect}>
            <option value='all'>All</option>
            <option value='1'>1</option>
            <option value='2'>2</option>
            <option value='3'>3</option>
            <option value='100'>Tons</option>
          </Form.Select>
        </Form.Group>
      </Form>
    );
  }
}

export default SearchHorns;
