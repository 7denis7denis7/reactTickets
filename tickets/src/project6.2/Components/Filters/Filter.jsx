import {useState, useMemo} from 'react';
import Select from 'react-select';
import Input from '../Input/Input';

import GetNameFromQuery from '../../helpers/name.js';
import GetLowPriceFromQuery from '../../helpers/priceFrom.js';
import GetUpPriceToQuery from '../../helpers/priceTo.js';
import GetFuelFromQuery from '../../helpers/fuel.js';
import GetColorFromQuery from '../../helpers/color.js';

import cn from 'classnames';

import FilterStyle from './Filter.module.scss';
import '../../assets/commonStyle.scss';


const colors = [
  { value: 'gray', label: 'Gray' },
  { value: 'black', label: 'Black' },
  { value: 'red', label: 'Red' },
  { value: 'green', label: 'Green' }
];

const fuelType = [
  { value: 'all', label: 'All' },
  { value: 'petrol', label: 'Petrol' },
  { value: 'diesel', label: 'Diesel' },
  { value: 'energy', label: 'Energy' },
  { value: 'hybrid', label: 'Hybrid' },
];

function Filters(props) {
  const {setSearchParams, searchParams} = props;

  const colorQuery = GetColorFromQuery();

  const filteredColor = useMemo(() => {
    const filteredColor = [];
    colors.forEach(item => {
      if(colorQuery.includes(item.value)){
        filteredColor.push(item);
      }
    })
    return filteredColor;
  }, []);

  
  const fuelname = GetFuelFromQuery();
  const [name, setName] = useState(GetNameFromQuery());
  const [fuel, setFuel] = useState(() => fuelType.find(item => item.value === fuelname) || null);
  const [color, setColor] = useState(colors || null);
  const [priceFrom, setPriceFrom] = useState(GetLowPriceFromQuery())
  const [priceTo, setPriceTo] = useState(GetUpPriceToQuery() || '')


  const handleSubmitForm = (e) => {
    e.preventDefault();
    const params = {};
    
    if(name.length) params.name = name;
    if(fuel && fuel.value) params.fuel = fuel.value;
    if(priceFrom) params.priceFrom = priceFrom;
    if(priceTo.length) params.priceTo = priceTo;
    if(color && color.length){
      const searchColors = color?.map(item => {
        return item.value;
      }) 
      params.color = searchColors.join(',');
    }
    setSearchParams(params);
  }


  return (
    <div className="container">
      <form 
        className={FilterStyle.filter}
        onSubmit={handleSubmitForm}
      >
        <div className={FilterStyle.filter__title}>Filters</div>
        <Input 
          type="text"
          className={FilterStyle.filter__input} 
          placeholder="Search by name" 
          value={name}
          action={(e) => setName(e.target.value)}
        />
        <Select
          className={FilterStyle.filter__select}
          defaultValue={fuel}
          onChange={setFuel}
          options={fuelType}
        />
        <Select
          isMulti
          defaultValue={filteredColor}
          className={FilterStyle.filter__select}
          onChange={setColor}
          options={colors}
        />
        <Input 
          type="number"
          className={cn(FilterStyle.filter__input, FilterStyle.filter__price)}
          placeholder="From"
          value={priceFrom || ''}
          action={(e) => setPriceFrom(e.target.value)}
          min="0"
          step="100"
        />
        <Input 
          type="number"
          className={cn(FilterStyle.filter__input, FilterStyle.filter__price)}
          placeholder="To"
          value={priceTo}
          action={(e) => setPriceTo(e.target.value)}
          min="0"
          step="100"
        />
        <button 
          className={FilterStyle.filter__button}
        >
          Search
        </button>
      </form> 
    </div>
  );
}

export default Filters;