import {useSearchParams} from 'react-router-dom';

function GetLowPriceFromQuery() {
  const [searchParams, setSearchParams] = useSearchParams();
  return searchParams.get('priceFrom') || '';
}

export default GetLowPriceFromQuery;