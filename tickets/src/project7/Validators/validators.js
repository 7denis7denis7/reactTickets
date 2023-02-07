const validator = (value, message, callback) => {
  if(!Array.isArray(value)) {
    if(callback(value)) return message;
  }else{
    const valueKeys = Object.keys(value);

    for (const key of valueKeys) {
      if (callback(value[key])) {
        return message;
      };
    }
  }
}

const moreEightSymbols = (value) => value !== null ? value.length > 8 : false;
const noDigitFive = (value) => value !== null ? value.includes('5') : false;


const countSymbols = (value) => validator(value, 'Typed more then 8 symbols', moreEightSymbols);
const noFive = (value) => validator(value, 'No 5 number!', noDigitFive);

const validators = [
  countSymbols,
  noFive
];


export default validators;