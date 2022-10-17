import CardProductStyle from './CardProduct.module.scss';

function CardProduct({name, img, price, fuel, color}) {
  return (
    <div className={CardProductStyle.card}>
      <div className={CardProductStyle.card__image}>
        <img src={img} alt="car"/>
      </div>
      <div className={CardProductStyle.card__content}>
        <div className={CardProductStyle.card__title}>{name}</div>
        <div className={CardProductStyle.card__price}>{price}$</div>
        <div className={CardProductStyle.card__type}>{fuel}</div>
        <div className={CardProductStyle.card__type}>{color}</div>
      </div>
      
    </div>
  );
}

export default CardProduct;