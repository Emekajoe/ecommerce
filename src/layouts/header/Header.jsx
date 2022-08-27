import "./Header.scss";
import Form from "../../components/form/Form";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { BsChatDots } from "react-icons/bs";
import { BiBasket, BiBell } from "react-icons/bi";
import Button from "../../components/button/Button";
import Logo from "../../components/logo/Logo";

const Header = () => {
  return (
    <header className="header">
      <section className="header-primary">
        <span className="deal">deal</span>
        <h4 className="heading-tertiary">we got a special deal for you</h4>
      </section>
      <section className="header-secondary">
        <div className="download">
          <IoPhonePortraitOutline className="download__icon" />{" "}
          <p className="download__text">download fojj app here.</p>
        </div>
        <nav className="nav">
          <ul className="nav__list">
            <li className="nav__item">
              <a href="#" className="nav__link">
                home
              </a>
            </li>
            <li className="nav__item">
              <a href="#" className="nav__link">
                contact us
              </a>
            </li>
            <li className="nav__item">
              <a href="#" className="nav__link">
                about us
              </a>
            </li>
          </ul>
        </nav>
      </section>
      <section className="header-tertiary">
        <Logo />
        <div className="cat">
          <ul className="cat__list">
            <li className="cat__item">
              {" "}
              <BsChatDots className="cat__photo" />
            </li>
            <li className="cat__item">
              {" "}
              <BiBasket className="cat__photo" />
            </li>
            <li className="cat__item">
              {" "}
              <BiBell className="cat__photo" />
            </li>
          </ul>
        </div>
        <div className="profile">
          <div className="profile__image-box">
            <img
              src={process.env.PUBLIC_URL + "img/profile.jpg"}
              alt="profile"
              className="profile__photo"
            />
          </div>
          <span className="profile__name">Charlene</span>
        </div>
        <a href="#" className="merchant">
          become merchant
        </a>
      </section>
      <section className="header-form">
        <Form />
      </section>
      <h1 className="heading-primary">Fojj Sneakers</h1>
      <section className="header-shoe">
        <span className="related">Related</span>
        <Button text="converse Shoes" />
        <Button text="Nike Air Jordan" />
        <Button text="feo Shoes" />
        <Button text="Offwhite Shoes" />
      </section>
    </header>
  );
};

export default Header;
