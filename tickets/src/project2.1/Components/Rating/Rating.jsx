import {Component} from 'react';
import RatingStyle from './Rating.module.scss'

const ratingStars = [1,2,3,4,5].reverse();

class Rating extends Component {
    constructor(props) {
        super(props);
    }

    render() { 
      return (
        <div className={RatingStyle.main}>
          <div className={RatingStyle.simple_rating}>
            <div className={RatingStyle.simple_rating__items}>
              {
                ratingStars.map((star, index) => {
                  return (
                    <div key={++index} onClick={this.props.setMark} value={star} className={`${RatingStyle.simple_rating__label}`} >
                      <input id={`simple_rating__${index}`} type="radio" className={RatingStyle.simple_rating__item} name='simple_rating' value={index}/>
                      <label htmlFor={`simple_rating__${index}`} className={RatingStyle.simple_rating__label}></label>
                    </div>
                  )
                })
              }
            </div>
          </div>
        </div>
      );
    }
}

export default Rating;