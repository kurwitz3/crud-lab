import cuid from 'cuid';

export default function manageRestaurants(state = {restaurants: [], reviews: []}, action)
{
  switch (action.type) {

    case 'ADD_RESTAURANT':

    const restaurant = { text: action.text, id: cuid() };
    return {
      ...state, restaurants: [ ...state.restaurants, restaurant]
    }

    case 'DELETE_RESTAURANT':
    const restaurants = state.restaurants.filter(restaurant => restaurant.id !== action.id);
    return { ...state, restaurants}

    case 'ADD_REVIEW':

      const review = Object.assign({}, action.review, { id: cuid() });
      return Object.assign({}, state, {reviews: [...state.reviews, review] })

    case 'DELETE_REVIEW':
      const reviews = state.reviews.filter(review => review.id !== action.id);
      return  Object.assign({}, state, {reviews: reviews})
   

    default:
    return state;

}
}

