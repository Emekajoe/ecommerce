import "./Footer.scss";
import FilterBtn from "../../components/button/FilterBtn";
import { FiChevronRight } from "react-icons/fi";
import SubWear from "../../components/wears/SubWear";
import WearPhotos from "../../components/wears/WearPhotos";
import ProductItem from "../../components/product/ProductItem";
import Button from "../../components/button/Button";
import Logo from "../../components/logo/Logo";

const Footer = () => {
  return (
    <footer className="footer">
      <section className="section-store">
        <div className="related">
          <h4 className="heading-tertiary heading-tertiary--store">
            Related Store
          </h4>
          <FilterBtn
            name="View All"
            icon={FiChevronRight}
            hasBackground={false}
          />
        </div>
        <div className="seller">
          <div className="container">
            <div className="related__wear">
              <SubWear
                isSeller={false}
                image={process.env.PUBLIC_URL + "shoe-imgs/ad6.webp"}
                name="Tobi Wears"
              />
              <FiChevronRight />
            </div>
            <WearPhotos related={true} />
          </div>
          <div className="container">
            <div className="related__wear">
              <SubWear
                image={process.env.PUBLIC_URL + "shoe-imgs/ad2.png"}
                name="Nneka Wears"
                isSeller={false}
              />
              <FiChevronRight />
            </div>
            <WearPhotos related={true} />
          </div>
        </div>
        <div className="related">
          <h4 className="heading-tertiary heading-tertiary--store">
            Best Selling shoes product
          </h4>
          <FilterBtn
            name="View All"
            icon={FiChevronRight}
            hasBackground={false}
          />
        </div>
      </section>
      <section className="section-shoes">
        <div className="product">
          <ul className="product__list">
            <ProductItem
              image={process.env.PUBLIC_URL + "shoe-imgs/ad1.png"}
              name="Jansen show"
              price="$23,000"
              number="1"
              hasBackground={true}
              isPriceColored={true}
            />
            <ProductItem
              image={process.env.PUBLIC_URL + "shoe-imgs/ad2.png"}
              name="Nigeria Boot"
              price="$15,000"
              number="2"
            />
            <ProductItem
              image={process.env.PUBLIC_URL + "shoe-imgs/ad9.jpg"}
              name="Alaba Shoes"
              price="$99,999"
              number="3"
            />
            <ProductItem
              image={process.env.PUBLIC_URL + "shoe-imgs/ad10.webp"}
              name="Oshodi Shoes"
              price="$3,000"
              number="4"
            />
            <ProductItem
              image={process.env.PUBLIC_URL + "shoe-imgs/ad7.jpeg"}
              name="Stanley fash"
              price="$13,000"
              number="5"
              hasBackground={true}
            />
            <ProductItem
              image={process.env.PUBLIC_URL + "shoe-imgs/ad3.jpg"}
              name="Gogo shan"
              price="$400,000"
              number="6"
            />
            <ProductItem
              image={process.env.PUBLIC_URL + "shoe-imgs/ad6.webp"}
              name="Tilba Jakuta"
              price="$126,000"
              number="7"
            />
            <ProductItem
              image={process.env.PUBLIC_URL + "shoe-imgs/ad4.jpeg"}
              name="koko tal"
              price="$73,000"
              number="8"
            />
            <ProductItem
              image={process.env.PUBLIC_URL + "shoe-imgs/ad2.png"}
              name="Ventula Tonto"
              price="$83,000"
              number="9"
              hasBackground={true}
            />
          </ul>
        </div>
        <Button text="load more" loadMore={true} isShorter={true} />
      </section>
      <section className="section-copyright">
        <div className="logo-box">
          <Logo hasNoStyle={true} />
          <div className="text-box">
            <p>contact the original developer on facebook @adonisejoe</p>
            <p>copyright @2022 | AdonisJoe.Inc</p>
          </div>
        </div>
        <ul className="about">
          <li className="about__item">
            <h6 className="about__heading">About Us</h6>
          </li>
          <li className="about__item">
            <span className="about__text">Project</span>
          </li>
          <li className="about__item">
            <span className="about__text">Track Record</span>
          </li>
          <li className="about__item">
            <span className="about__text">Pricing</span>
          </li>
          <li className="about__item">
            <span className="about__text">Services</span>
          </li>
          <li className="about__item">
            <span className="about__text">Professional Worker</span>
          </li>
        </ul>
        <ul className="price">
          <li className="price__item">
            <h6 className="price__heading">Pricing</h6>
          </li>
          <li className="price__item">
            <span className="pricing__text">About Product</span>
          </li>
          <li className="price__item">
            <span className="price__text">Management</span>
          </li>
        </ul>
        <ul className="media">
          <li className="media__item">
            <h6 className="media__heading">Media</h6>
          </li>
          <li className="media__item">
            <span className="media__text">Privacy Police</span>
          </li>
          <li className="media__item">
            <span className="media__text">Development</span>
          </li>
          <li className="media__item">
            <span className="media__text">Terms & Service</span>
          </li>
        </ul>
        <ul className="contact">
          <li className="contact__item">
            <h6 className="price__heading">contact</h6>
          </li>
          <li className="contact__item">
            <span className="contact__text">+234908996558</span>
          </li>
        </ul>
      </section>
    </footer>
  );
};

export default Footer;
