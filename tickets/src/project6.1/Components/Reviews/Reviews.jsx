import {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';

import {getReview} from '../requests/requests';
import EmptyPlaceholder from '../EmptyPlaceholder/EmptyPlaceholder'

import ReviewsStyle from './Reviews.module.scss';

function Reviews() {
  const [reviews, setReviews] = useState([]);
  const {id} = useParams();

  useEffect(() => {
    getReview(id)
    .then(resp => setReviews(resp))
  }, []);

  return (
    <div className={ReviewsStyle.review__content}>
      {
        reviews?.length ? 
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
        :
          <EmptyPlaceholder 
            text='This movie has no reviews yet.'
          />
      }
    </div>
  )
}

export default Reviews;