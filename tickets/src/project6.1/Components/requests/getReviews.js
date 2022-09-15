function getReview (id) {
  const url = `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=f6dd169ff13f1a568425784d0d103598&language=en-US&page=1`;
  return fetch(url).then(resp => resp.json()).then(resp => resp.results);
}

export default getReview;
