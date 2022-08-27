import "./Main.scss";
import { FiChevronDown } from "react-icons/fi";
import Wear from "../../components/wears/Wear";
import Card from "../../components/card/Card";
import Button from "../../components/button/Button";
import FilterBtn from "../../components/button/FilterBtn";
import Filter from "../../components/filter/Filter";
const Main = () => {
  return (
    <div className="main">
      <section className="section-sidebar">
        <Filter
          icon={FiChevronDown}
          filter={FilterBtn}
          name="Filter"
          btnName="filter"
          hasIcon={true}
        />
        <Filter
          icon={FiChevronDown}
          filter={FilterBtn}
          name="Price"
          btnName="Hide"
          isPrice={true}
        />
        <Filter
          icon={FiChevronDown}
          filter={FilterBtn}
          name="City"
          btnName="Hide"
          isPrice={false}
          isCity={true}
        />
        <Filter
          icon={FiChevronDown}
          filter={FilterBtn}
          name="Shipping options"
          btnName="Hide"
          isPrice={false}
          isCity={true}
          isShipping={true}
        />
      </section>
      <section className="section-main">
        <Wear image={process.env.PUBLIC_URL + "shoe-imgs/ad1.png"} />
        <div className="filter">
          <h5 className="filter__heading">
            Found <span className="filter__heading--red">100</span> items on
            search
          </h5>
          <div className="filter__details">
            <span className="filter__head">Sort by</span>
            <FilterBtn
              name="Review"
              icon={FiChevronDown}
              hasBackground={true}
            />
          </div>
        </div>
        <div className="card-holder">
          <Card
            purchaseNow={false}
            name="Adidas Yellow Fit"
            photo={process.env.PUBLIC_URL + "shoe-imgs/ad8.jpg"}
          />
          <Card
            purchaseNow={true}
            name="Adidas kaki Fit"
            photo={process.env.PUBLIC_URL + "shoe-imgs/ad3.jpg"}
          />

          <Card
            purchaseNow={false}
            name="Adidas Black Fit"
            photo={process.env.PUBLIC_URL + "shoe-imgs/ad2.png"}
          />
          <Card
            purchaseNow={false}
            name="Adidas Air Fit"
            photo={process.env.PUBLIC_URL + "shoe-imgs/ad6.webp"}
          />
          <Card
            purchaseNow={false}
            name="Adidas Move Fit"
            photo={process.env.PUBLIC_URL + "shoe-imgs/ad7.jpeg"}
          />
          <Card
            purchaseNow={false}
            name="Adidas Dark Blue Fit"
            photo={process.env.PUBLIC_URL + "shoe-imgs/ad10.webp"}
          />
        </div>
        <Wear image={process.env.PUBLIC_URL + "shoe-imgs/ad10.webp"} />

        <div className="card-holder">
          <Card
            purchaseNow={true}
            name="Adidas kaki Fit"
            photo={process.env.PUBLIC_URL + "shoe-imgs/ad3.jpg"}
          />
          <Card
            purchaseNow={false}
            name="Adidas Yellow Fit"
            photo={process.env.PUBLIC_URL + "shoe-imgs/ad8.jpg"}
          />
          <Card
            purchaseNow={false}
            name="Adidas Black Fit"
            photo={process.env.PUBLIC_URL + "shoe-imgs/ad2.png"}
          />
        </div>
        <Button text="load more" loadMore={true} />
      </section>
    </div>
  );
};

export default Main;
