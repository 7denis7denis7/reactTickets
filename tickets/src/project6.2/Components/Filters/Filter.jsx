import {useState} from 'react';
import Select from 'react-select';

import cn from 'classnames';

import FilterStyle from './Filter.module.scss';
import '../../assets/commonStyle.scss';


function Filters(props) {
  const {searchParams, setSearchParams, fuelType, colors, nameCar, fuelQuery, priceFromCar, priceToCar} = props;
  const colorCar = searchParams.get('color') || '';

  const currentFuel = fuelType.filter(item => {
    return item.value === fuelQuery;
  })

  const filteredColor = [];

  let filteredColors = colors.filter(item => {
    colorCar.split(',').forEach(itemInner => {
      if(itemInner === item.value){
        filteredColor.push(item);
      }
    })
    return item;
  })


  const [name, setName] = useState(nameCar);
  const [fuel, setFuel] = useState(...currentFuel || null);
  const [color, setColor] = useState(...filteredColors || null);
  const [priceFrom, setPriceFrom] = useState(priceFromCar)
  const [priceTo, setPriceTo] = useState(priceToCar)


  const handleSubmitForm = (e) => {
    e.preventDefault();
    const params = {};
    
    if(name.length) params.name = name;
    if(fuel && fuel.value) params.fuel = fuel.value;
    if(priceFrom.length) params.priceFrom = priceFrom;
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
        onSubmit={(e) => handleSubmitForm(e)}
      >
        <div className={FilterStyle.filter__title}>Filters</div>
        <input 
          className={FilterStyle.filter__input} 
          type="text" 
          value={name}
          placeholder="Search by name" 
          onChange={(e) => setName(e.target.value)}
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
        <input 
          className={cn(FilterStyle.filter__input, FilterStyle.filter__price)}
          type="number"
          placeholder="From"
          min="0"
          step="100"
          value={priceFrom}
          onChange={(e) => setPriceFrom(e.target.value)}
        />
        <input 
          className={cn(FilterStyle.filter__input, FilterStyle.filter__price)}
          type="number"
          placeholder="To"
          value={priceTo}
          min="0"
          step="100"
          onChange={(e) => setPriceTo(e.target.value)}
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