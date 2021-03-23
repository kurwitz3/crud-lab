import React, { Component } from 'react';
import Reviews from './Reviews';

class ReviewInput extends Component {
  state={
    text:''
  }

  handleChange =event => {
    this.setState({
      text: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.addReview({
      text: this.state,
      restaurantId:this.props.restaurantId
    })

  }

  render() {
    return (
      <div>
        <form onSubmit={(e) =>  this.handleSubmit(e)}>
          <label>Review:</label>
          <input
            placeholder='Enter Review'
            type="text"
            
            onChange={(event) => this.handleChange(event)} />
          <input type="submit" />
        </form>
      </div>
    );
  }
};

export default ReviewInput;
