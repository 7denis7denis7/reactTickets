import {useSearchParams} from 'react-router-dom';

function GetUpPriceToQuery() {
  const [searchParams, setSearchParams] = useSearchParams();
  return searchParams.get('priceTo') || '';
}

export default GetUpPriceToQuery;