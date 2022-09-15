import {Outlet, useParams, Link} from 'react-router-dom';
import {useEffect, useState} from 'react';

import getDetails from '../requests/getDetails';
import EmptyPlaceholder from '../EmptyPlaceholder/EmptyPlaceholder'

import '../assets/commonStyle.scss';
import DetailsStyle from './Details.module.scss';


function Details() {
    const [initialValues, setInitialValues] = useState(null);
    const {id} = useParams();

    useEffect(() => {
      getDetails(id)
      .then(resp =>setInitialValues(resp))
      .catch(error => console.log(error))
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
                      initialValues?.genres?.length ? 
                        initialValues?.genres.map(item => <div key={item.id}>{item.name}</div>)
                      :
                      <EmptyPlaceholder 
                        text='This film has no genres'
                      />
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
        <Outlet />
      </div>
    </div>
    
  );
}

export default Details;