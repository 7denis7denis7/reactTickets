const filterByName = (searchName, selectedName) => searchName.toLowerCase().includes(selectedName);
const filterByFuelType = (fuelType, selectedFuel) => fuelType.toLowerCase() === selectedFuel || selectedFuel === 'all' || selectedFuel === '';
const filterByLowerPrice = (price, selectedPriceFrom) => {
  if(!!selectedPriceFrom){
    return price >= selectedPriceFrom;
  }
  return price;
};
const filterByUpperPrice = (price, selectedPriceTo) => {
  if(!!selectedPriceTo){
    return price <= selectedPriceTo || selectedPriceTo === false;
  }
  return price;
}

const filterByColor = (colorsCar, color) => {
  if(!colorsCar.length){
    return true
  }

  const colorElement = color.toLowerCase();
  try{
    return colorsCar?.some(color => color.toLowerCase() === colorElement);
  }catch{
    return false;
  }
}

export { filterByName };
export { filterByFuelType };
export { filterByLowerPrice };
export { filterByUpperPrice };
export { filterByColor };