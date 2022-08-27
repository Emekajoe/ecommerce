const WearPhotos = ({ related }) => {
  return (
    <div className="wears-photo">
      <ul
        className={
          related
            ? "wears-photo__list wears-photo__list--related"
            : "wears-photo__list"
        }
      >
        <li className="wears-photo__item">
          <img
            className="wears-photo__img"
            alt="shoe"
            src={process.env.PUBLIC_URL + "shoe-imgs/ad1.png"}
          />
        </li>
        <li className="wears-photo__item">
          <img
            className="wears-photo__img"
            alt="shoe"
            src={process.env.PUBLIC_URL + "shoe-imgs/ad2.png"}
          />
        </li>
        <li className="wears-photo__item">
          <img
            className="wears-photo__img"
            alt="shoe"
            src={process.env.PUBLIC_URL + "shoe-imgs/ad6.webp"}
          />
        </li>
        <li className="wears-photo__item">
          <img
            className="wears-photo__img"
            alt="shoe"
            src={process.env.PUBLIC_URL + "shoe-imgs/ad8.jpg"}
          />
        </li>
        <li className="wears-photo__item">
          <img
            className="wears-photo__img"
            alt="shoe"
            src={process.env.PUBLIC_URL + "shoe-imgs/ad9.jpg"}
          />
        </li>
      </ul>
    </div>
  );
};

export default WearPhotos;
