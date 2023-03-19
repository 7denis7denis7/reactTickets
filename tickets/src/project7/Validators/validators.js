const validator = (value, message, callback) => {
    if(!value) return false
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



const moreEightSymbols = (value) => value.length > 8;
const noDigitFive = (value) => value.includes('5');

const countSymbols = (value) => validator(value, 'Typed more then 8 symbols', moreEightSymbols);
const noFive = (value) => validator(value, 'No 5 number!', noDigitFive);

const validators = [
  countSymbols,
  noFive
];


export default validators;