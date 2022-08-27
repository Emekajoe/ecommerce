import { MdLocationOn } from "react-icons/md";
import { RiShoppingBasketFill } from "react-icons/ri";
import { AiFillStar } from "react-icons/ai";
import "./Card.scss";

const Card = ({ purchaseNow, name, photo }) => {
  return (
    <div className={`${purchaseNow ? "card card--big" : "card"}`}>
      <div className="card__image-box">
        <img src={photo} alt="card" className="card__photo" />
      </div>
      <div className="card__details">
        <h5 className="card__name">{name}</h5>
        <div className="location">
          <MdLocationOn className="location__map" />
          <span className="location__title">
            Adidas Sports Wear{" "}
            <span className="location__title location__title--separator">
              |
            </span>{" "}
            Joksel
          </span>
        </div>
        <div className="card__rating">
          <AiFillStar className="card__rating-star" />
          <span className="card__rating-value">
            4.8{" "}
            <span className="card__rating-value card__rating-value--gray">
              (87)
            </span>
          </span>
        </div>
        <div className="pricing">
          <span className="pricing__value">$99,00</span>
          <span className="pricing__off">5%</span>
          <span className="pricing__old">$99,00</span>
        </div>
      </div>
      {purchaseNow ? (
        <div className="purchase">
          <RiShoppingBasketFill />
          <span className="purchase__text">purchase now</span>
        </div>
      ) : null}
    </div>
  );
};

export default Card;
