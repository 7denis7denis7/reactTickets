import {useSearchParams} from 'react-router-dom';

function GetColorFromQuery() {
  const [searchParams, setSearchParams] = useSearchParams();
  return searchParams.get('color') || '';
}

export default GetColorFromQuery;