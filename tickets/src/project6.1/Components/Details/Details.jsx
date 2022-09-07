import {Outlet, useParams} from 'react-router-dom';
import {useEffect, useState} from 'react';
import getData from '../requests/getData';
import {Link} from 'react-router-dom'

import '../assets/commonStyle.scss';

import DetailsStyle from './Details.module.scss';


function Details() {
    const url = `https://api.themoviedb.org/3/movie/${useParams().id}?api_key=f6dd169ff13f1a568425784d0d103598&language=en-US`;

    const [initialValues, setInitialValues] = useState(null);


    useEffect(() => {
      getData(url)
      .then(resp => resp.json())
      .then(resp =>setInitialValues(resp))
      .catch(function (error) {
        console.log(error);
      });
    }, []);
  
  return (
    <div className="container">
      <div className={DetailsStyle.card}>
        <div className={DetailsStyle.card__wrapper}>
          {
            initialValues && 
            <>
              <img className={DetailsStyle.card__image} src={`https://image.tmdb.org/t/p/w300${initialValues?.poster_path}`} alt="image"/>
              <div className={DetailsStyle.card__info}>
                <div className={DetailsStyle.card__row}>
                  <div className={DetailsStyle.card__subtitle}>Title:</div>
                  <div className={DetailsStyle.card__value}>{initialValues?.title || initialValues?.name}</div>
                </div>
                <div className={DetailsStyle.card__row_start}>
                  <div className={DetailsStyle.card__subtitle}>Genres:</div>
                  <div>
                    {
                      initialValues?.genres.map(item => <div key={item.id}>{item.name}</div>)
                    }
                  </div>
                </div>
                <div className={DetailsStyle.card__row_start}>
                  <div className={DetailsStyle.card__subtitle}>Overview:</div>
                  <div className={DetailsStyle.card__value}>{initialValues?.overview}</div>
                </div>
                <div className={DetailsStyle.card__row}>
                  <div className={DetailsStyle.card__subtitle}>Release:</div>
                  <div className={DetailsStyle.card__value}>{initialValues?.release_date}</div>
                </div>
              </div>
            </> 
          }
        </div>
        <div className={DetailsStyle.card__links}>
          <Link to={`cast`}>
            Cast
          </Link>
          <Link to={`reviews`}>
            Reviews
          </Link>
        </div>
        <div className={DetailsStyle.card__content}>
          <Outlet />
        </div>
      </div>
    </div>
    
  );
}

export default Details;