import { MdLocationOn } from "react-icons/md";
const SubWear = ({ image, isSeller, name }) => {
  return (
    <div className="wear">
      <div className="wear-photo-box">
        <img className="wear-photo" alt="shoe" src={image} />
      </div>
      <div
        className={
          isSeller ? "wear__details" : "wear__details wear__details--center"
        }
      >
        <h3 className="heading-secondary">{name}</h3>
        {isSeller && (
          <div className="wear__location">
            <span className="wear__location-name">Location</span>
            <MdLocationOn className="wear__location-icon" />
            <span className="wear__location-place">Ile-Ife, Nigeria</span>
          </div>
        )}
        <div className="wear__rating">
          <span className="wear__rating-name">star seller</span>
          <span className="wear__rating-times">100 items</span>
        </div>
      </div>
    </div>
  );
};

export default SubWear;
