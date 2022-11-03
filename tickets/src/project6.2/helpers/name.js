import {useSearchParams} from 'react-router-dom';

function GetNameFromQuery() {
  const [searchParams, setSearchParams] = useSearchParams();
  return searchParams.get('name') || '';
}

export default GetNameFromQuery;