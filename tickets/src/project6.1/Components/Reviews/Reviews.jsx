import {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import getData from '../requests/getData';

import ReviewsStyle from './Reviews.module.scss';

function Reviews() {
  const [reviews, setReviews] = useState([]);
  const {id} = useParams();

  useEffect(() => {
    const url = `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=f6dd169ff13f1a568425784d0d103598&language=en-US&page=1`;
    getData(url)
    .then(data => data.json())
    .then(data => setReviews(data.results))
    .catch(error => {
      console.log(error)
    })
  }, []);


  return (
    <div>
      {
        reviews.map(item => {
          const {id, author_details, content} = item;
          return(
            <div className={ReviewsStyle.review} key={id}>
              <div className={ReviewsStyle.review__name}>{author_details.username}</div>
              <div>
                {content}
              </div>
            </div>
          )
        })
      }
    </div>
  );
}

export default Reviews;