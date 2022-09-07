import {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import getData from '../requests/getData';

import CastStyle from './Cast.module.scss';

function Cast() {
  const [infoCast, setInfoCast] = useState([]);
  const {id} = useParams();

  useEffect(() => {
    const url = `https://api.themoviedb.org/3/movie/${id}/credits?api_key=f6dd169ff13f1a568425784d0d103598&language=en-US`;
    
    getData(url)
    .then(data => data.json())
    .then(data => setInfoCast(data.cast))
    .catch(error => {
      console.log(error);
    })
  }, [])
  return (
    <div>
      {
        infoCast.map(item => {
          const {id, character, original_name} = item;
          return(
            <div className={CastStyle.cast__row} key={id}>
              <div className={CastStyle.cast__character}>{character}</div>
              <div className={CastStyle.cast__name}>{original_name}</div>
            </div>
          )
        })
      }
    </div>
  );
}

export default Cast;