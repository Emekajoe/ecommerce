import Form from "../form/Form";
import FormCheck from "../form/FormCheck";

const Filter = ({
  icon,
  filter: FilterBtn,
  name,
  btnName,
  hasIcon,
  isPrice,
  isCity,
  isShipping,
}) => {
  return (
    <div
      className={isPrice || isCity ? "filtering filtering--price" : "filtering"}
    >
      <div
        className={
          !isCity
            ? "filtering__container"
            : "filtering__container filtering__container--no-mb"
        }
      >
        <h5 className="filtering__name">{name}</h5>
        <FilterBtn
          name={btnName}
          hasBackground={false}
          icon={icon}
          hasNoIcon={hasIcon}
        />
      </div>
      {isPrice && (
        <div className="filtering__container-1">
          <form className="form-price">
            <input
              className="form-price__input"
              type="range"
              name="price"
              id=""
            />
          </form>
          <span className="max">Max. $100.00</span>
        </div>
      )}
      {isCity && (
        <>
          <FormCheck name={isShipping ? "Regular" : "Lagos"} />
          <FormCheck name={isShipping ? "Economical" : "Ile-Ife"} />
          <FormCheck name={isShipping ? "Same Day" : "Onitsha"} />
          <FormCheck name={isShipping ? "Express" : "Benin"} />
          <FormCheck name={isShipping ? "Cargo" : "Kano"} />
          {!isShipping && <FormCheck name="Abuja" />}
        </>
      )}
    </div>
  );
};

export default Filter;
