function getTrandingFilms () {
  const url = 'https://api.themoviedb.org/3/trending/all/week?api_key=f6dd169ff13f1a568425784d0d103598';
  return fetch(url).then(resp => resp.json()).then(resp => resp.results)
}

export default getTrandingFilms;
