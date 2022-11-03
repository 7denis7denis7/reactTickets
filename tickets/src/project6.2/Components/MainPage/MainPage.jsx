import {useState, useEffect, useMemo} from 'react';
import {useSearchParams} from 'react-router-dom';

import GetNameFromQuery from '../../helpers/name.js';
import GetFuelFromQuery from '../../helpers/fuel.js';
import GetLowPriceFromQuery from '../../helpers/priceFrom.js';
import GetUpPriceToQuery from '../../helpers/priceTo.js';
import GetColorFromQuery from '../../helpers/color.js';

import Header from '../Header/Header';
import CardProduct from '../CardProduct/CardProduct';
import Filters from '../Filters/Filter';

import Data from '../../db/data.json';

import MainPageStyle from './MainPage.module.scss';
import '../../assets/commonStyle.scss';

const fuelType = [
  { value: 'all', label: 'All' },
  { value: 'petrol', label: 'Petrol' },
  { value: 'diesel', label: 'Diesel' },
  { value: 'energy', label: 'Energy' },
  { value: 'hybrid', label: 'Hybrid' },
];

const arr = Data.map(item => item);

function MainPage() {
  const [cars, setCars] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  

  useEffect(() => {
    setCars(arr)
  }, [])

  const nameCar = GetNameFromQuery();
  const fuelCar = GetFuelFromQuery();
  const colorsCar = GetColorFromQuery();
  const priceFromCar = GetLowPriceFromQuery();
  const priceToCar = GetUpPriceToQuery();



  const filterByName = (searchName, selectedName) => searchName.toLowerCase().includes(selectedName) ? true : false;

  const filterByFuelType = (fuelType, selectedFuel) => fuelType.toLowerCase() === selectedFuel || selectedFuel === 'all' || selectedFuel === '' ? true : false;

  const filterByLowerPrice = (price, selectedPriceFrom) => price >= selectedPriceFrom ? true : false;

  const filterByUpperPrice = (price, selectedPriceTo) => price <= selectedPriceTo || selectedPriceTo === '' ? true : false;

  const filterByColor = (element) => {
    if(!colorsCar){
      return true
    }
    let filtered = colorsCar.split(',').some(function(color){
      return color.toLowerCase() === element.color.toLowerCase();
    })

    return filtered;
  }



  const nameCarToLower = useMemo(() => {
    return nameCar.toLowerCase();
  }, [nameCar]) 

  const fuelCarToLower = useMemo(() => {
    return fuelCar.toLowerCase();
  }, [fuelCar])



  return (
    <>
      <Header />
      <Filters 
        setSearchParams={setSearchParams} 
        fuelType={fuelType}
      />
      <div className="container">
        <div className={MainPageStyle.wrapper}>
          {cars?.length ?
            cars?.filter(item => {
              const {name, fuel, price} = item;
              if(filterByName(name, nameCarToLower)
                && filterByFuelType(fuel, fuelCarToLower)
                && (filterByColor(item)) 
                && filterByLowerPrice(price, priceFromCar)
                && filterByUpperPrice(price, priceToCar)
              ) 
              { 
                return item; 
              } 
            }) 
            .map(item =>{
              const {name, img, price, fuel, id, color} = item;
              return(
                <CardProduct 
                  key={id}
                  name={name}
                  img={img}
                  price={price}
                  fuel={fuel}
                  color={color}
                /> 
              )
            })
            :
            <h2>Empty state</h2>
          }
        </div>
      </div>
    </>
  );
}

export default MainPage;