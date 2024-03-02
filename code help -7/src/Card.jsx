// import React from 'react'

function Card(props) {
  // console.log(props);
  const reviews = props.reviews;
  // console.log(reviews[0]);
  return (
    <div>
      <div>
        <img src="reviews.image" />
      </div>
      <div>
        <p>{reviews.name}</p>
      </div>
      <div>
        {reviews.job}
      </div>
    </div>
  );
}

export default Card;
