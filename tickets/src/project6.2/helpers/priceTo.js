import {useSearchParams} from 'react-router-dom';

function GetUpPriceToQuery() {
  const [searchParams, setSearchParams] = useSearchParams();
  return Number(searchParams.get('priceTo')) || undefined;
}

export default GetUpPriceToQuery;