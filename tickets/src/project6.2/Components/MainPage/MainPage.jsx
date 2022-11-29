import {useState, useEffect, useMemo} from 'react';
import {useSearchParams} from 'react-router-dom';

import GetNameFromQuery from '../../helpers/name.js';
import GetFuelFromQuery from '../../helpers/fuel.js';
import GetLowPriceFromQuery from '../../helpers/priceFrom.js';
import GetUpPriceToQuery from '../../helpers/priceTo.js';
import GetColorFromQuery from '../../helpers/color.js';
import { filterByName, filterByFuelType, filterByLowerPrice, filterByUpperPrice, filterByColor } from '../../helpers/filter.js';

import Header from '../Header/Header';
import CardProduct from '../CardProduct/CardProduct';
import Filters from '../Filters/Filter';

import Data from '../../db/data.json';

import MainPageStyle from './MainPage.module.scss';
import '../../assets/commonStyle.scss';

const arr = [...Data]

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


  const nameCarToLower = useMemo(() => {
    return nameCar.toLowerCase();
  }, [nameCar]) 

  const fuelCarToLower = useMemo(() => {
    return fuelCar.toLowerCase();
  }, [fuelCar])

  const filteredCars = cars?.filter(item => {
    const {name, fuel, price, color} = item;
    if(filterByName(name, nameCarToLower)
      && filterByFuelType(fuel, fuelCarToLower)
      && (filterByColor(colorsCar, color)) 
      && filterByLowerPrice(price, priceFromCar)
      && filterByUpperPrice(price, priceToCar)
    ){ 
      return item; 
    } 
  })



  return (
    <>
      <Header />
      <Filters 
        setSearchParams={setSearchParams} 
        searchParams={searchParams}
      />
      <div className="container">
        <div className={MainPageStyle.wrapper}>
          {cars?.length ?
            filteredCars.map(item =>{
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