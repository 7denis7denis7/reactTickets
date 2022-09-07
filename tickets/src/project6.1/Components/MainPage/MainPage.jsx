import {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';

import getData from '../requests/getData';

import MainPageStyle from './MainPage.module.scss';

const url = 'https://api.themoviedb.org/3/trending/all/week?api_key=f6dd169ff13f1a568425784d0d103598';


function MainPage() {
  const [initialValues, setInitialValues] = useState([]);

  useEffect(() => {
    getData(url)
    .then(resp => resp.json())
    .then(resp => setInitialValues(resp.results))
    .catch(function (error) {
      console.log(error);
    });
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