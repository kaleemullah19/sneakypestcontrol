import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Reviews.css'; // Create and style this CSS file as needed

const GOOGLE_API_KEY = 'AIzaSyAXpNYAI4CLziGNBmSMRP-NLZb2TPlHqSs'; // Replace with your Google API key
const PLACE_ID = 'powerful-balm-428117-h6'; // Replace with your Google Place ID

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await axios.get(
          `https://maps.googleapis.com/maps/api/place/details/json?place_id=${PLACE_ID}&key=${GOOGLE_API_KEY}`
        );

        if (response.data.result && response.data.result.reviews) {
          setReviews(response.data.result.reviews);
        } else {
          setError('No reviews found');
        }
      } catch (error) {
        setError('Error fetching Google reviews');
        console.error('Error fetching Google reviews:', error);
      }
    };

    fetchReviews();
  }, []);

  return (
    <div className="reviews">
      <h2>Google Reviews</h2>
      {error ? (
        <p>{error}</p>
      ) : (
        <ul>
          {reviews.map((review, index) => (
            <li key={index}>
              <p><strong>{review.author_name}</strong>: {review.text}</p>
              <p>Rating: {review.rating}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Reviews;
