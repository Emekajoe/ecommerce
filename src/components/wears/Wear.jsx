import SubWear from "./SubWear";
import WearPhotos from "./WearPhotos";
const Wear = ({ image }) => {
  return (
    <div className="wr">
      <SubWear image={image} isSeller={true} name="Adidas Sports Wear" />
      <WearPhotos />
    </div>
  );
};

export default Wear;
