import {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';

import getTrandingFilms from '../requests/getTrandingFilms';

import MainPageStyle from './MainPage.module.scss';

function MainPage() {
  const [initialValues, setInitialValues] = useState([]);

  useEffect(() => {
    getTrandingFilms()
    .then(result => setInitialValues(result))
    .catch(error => console.log(error))
  }, []);

  return (
    <div className="container">
      <div className={MainPageStyle.MainPage__wrapper}>
        {
          initialValues.map(item => {
            const {id, poster_path, name, title} = item;
            return(
              <Link to={`/movies/${id}`} className={MainPageStyle.MainPage__card} key={id}>
                <img className={MainPageStyle.MainPage__card_image} src={`https://image.tmdb.org/t/p/w200${poster_path}`} alt="image"/>
                <div className={MainPageStyle.MainPage__card_title}>{name || title}</div>
              </Link>
            ) 
          })
        }
      </div>
    </div>
  )
}

export default MainPage;