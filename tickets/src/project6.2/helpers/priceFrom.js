import {useSearchParams} from 'react-router-dom';

function GetLowPriceFromQuery() {
  const [searchParams, setSearchParams] = useSearchParams();
  return Number(searchParams.get('priceFrom')) || undefined;
}

export default GetLowPriceFromQuery;