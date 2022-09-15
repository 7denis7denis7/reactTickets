function getDetails (id) {
  const url = `https://api.themoviedb.org/3/movie/${id}?api_key=f6dd169ff13f1a568425784d0d103598&language=en-US`;
  return fetch(url).then(resp => resp.json());
}

export default getDetails;
