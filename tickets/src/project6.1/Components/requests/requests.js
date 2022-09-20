const sendRequest = (url) => {
  const urlText = `https://api.themoviedb.org/3/${url}`;
  return fetch(urlText).then(resp => resp.json()).catch(error => console.log(error));
} 

function getCast (id) {
  const url = `movie/${id}/credits?api_key=f6dd169ff13f1a568425784d0d103598&language=en-US`;
  return sendRequest(url)
  .then(resp => resp ? resp.cast : null)
}

function getDetails (id) {
  const url = `movie/${id}?api_key=f6dd169ff13f1a568425784d0d103598&language=en-US`;
  return sendRequest(url)
}

function getReview (id) {
  const url = `movie/${id}/reviews?api_key=f6dd169ff13f1a568425784d0d103598&language=en-US&page=1`;
  return sendRequest(url)
  .then(resp => resp ? resp.results : null)
}

function getTrandingFilms () {
  const url = 'trending/all/week?api_key=f6dd169ff13f1a568425784d0d103598';
  return sendRequest(url)
  .then(resp => resp ? resp.results : null)
}

export {getCast, getDetails, getReview, getTrandingFilms}