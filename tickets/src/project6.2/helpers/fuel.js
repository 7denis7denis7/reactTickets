import {useSearchParams} from 'react-router-dom';

function GetFuelFromQuery() {
  const [searchParams, setSearchParams] = useSearchParams();
  return searchParams.get('fuel') || '';
}

export default GetFuelFromQuery;