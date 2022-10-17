import {useState, useEffect} from 'react';
import {useSearchParams} from 'react-router-dom';

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

const colors = [
  { value: 'gray', label: 'Gray' },
  { value: 'black', label: 'Black' },
  { value: 'red', label: 'Red' },
  { value: 'green', label: 'Green' }
];

const arr = Data.map(item => item);

function MainPage() {
  const [cars, setCars] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  
  useEffect(() => {
    setCars(arr)
  }, [])

  const nameCar = searchParams.get('name') || '';
  const fuelCar = searchParams.get('fuel') || '';
  const colorsCar = searchParams.get('color' || '');
  const priceFromCar = searchParams.get('priceFrom') || '';
  const priceToCar = searchParams.get('priceTo') || '';



  const filterByColor = (element, arrColors) => {
    if(!arrColors){
      return true
    }
    let filtered = arrColors.filter(color1 => {
        if(color1.toLowerCase() === element.color.toLowerCase()){
          return element;
        }
    })
    return filtered.length > 0 ? true : false
  }




  return (
    <>
      <Header />
      <Filters searchParams={searchParams} setSearchParams={setSearchParams} fuelType={fuelType} colors={colors} />
      <div className="container">
        <div className={MainPageStyle.wrapper}>
          {cars?.length ?
            cars?.filter(item => {
              if(item.name.toLowerCase().includes(nameCar.toLocaleLowerCase())
                && (item.fuel.toLowerCase() === fuelCar.toLocaleLowerCase() || fuelCar.toLowerCase() === 'all' || fuelCar.toLowerCase() === '') 
                && (filterByColor(item, colorsCar === null ? null : colorsCar.split(',')) || colorsCar == 'all' || colorsCar == '')
                && item.price >= priceFromCar
                && (item.price <= priceToCar || priceToCar == '')
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