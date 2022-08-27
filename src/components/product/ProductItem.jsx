const ProductList = ({
  name,
  price,
  number,
  image,
  hasBackground,
  isPriceColored,
}) => {
  return (
    <li
      className={
        hasBackground ? "product__item product__item--bg" : "product__item"
      }
    >
      <div className="product__image">
        <span className="product__number">{number}</span>
        <img src={image} alt="" />
      </div>
      <div className="product__detail">
        <h6 className="product__name">{name}</h6>
        <p
          className={
            isPriceColored
              ? "product__price product__price--red"
              : "product__price"
          }
        >
          {price}
        </p>
      </div>
    </li>
  );
};

export default ProductList;
