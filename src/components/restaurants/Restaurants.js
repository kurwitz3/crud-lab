import React, { Component } from 'react';
import Restaurant from './Restaurant'

class Restaurants extends Component {

  renderRestaurant = () => {
    return this.props.restaurants.map(restaurant =>{
      return <Restaurant key={restaurant.id} deleteRestaurant={this.props.deleteRestaurant} restaurant={restaurant} />
    })
  }
  render() {
    return(
      <ul>
       {this.renderRestaurant()}
      </ul>
    );
  }
};

export default Restaurants;