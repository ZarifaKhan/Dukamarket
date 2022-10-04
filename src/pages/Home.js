import Helmet from "../companents/Helmet/Helmet";
import featureImg01 from "../assets/images/featureImg01.jpg";
import featureImg02 from "../assets/images/featureImg02.jpg";
import featureImg03 from "../assets/images/featureImg03.jpg";
import featureImg04 from "../assets/images/featureImg04.jpg";
import bannerImg01 from "../assets/images/banner1.png";
import bannerImg02 from "../assets/images/banner2.png";
import bannerImg03 from "../assets/images/banner3.png";
import Timer from "../companents/Timer/Timer";
import bannersection from "../assets/images/bannersection.jpg";

import "../style/home.css";
import Slider from "react-slick";
import HeaderSlider from "../companents/HeaderSlider/HeaderSlider";
import productSlider from "../companents/productSlider/productSlider";
import homeCenter from "../assets/images/homeCenter.jpg";

import SliderProductItem from "../companents/SliderPrductCart/SliderProductItem";
import centerImg from "../assets/images/centerImg.jpg";
import { Link } from "react-router-dom";

const featureData = [
  {
    title: "FREE DELIVERY",
    imgUrl: featureImg01,
    desc: "For all orders over $120",
  },

  {
    title: "SAFE PAYMENT",
    imgUrl: featureImg02,
    desc: "100% secure payment",
  },

  {
    title: "24/7 HELP CENTER",
    imgUrl: featureImg03,
    desc: "Dedicated 24/7 support",
  },

  {
    title: "FRIENDLY SERVICES",
    imgUrl: featureImg04,
    desc: "30 day satisfaction guarant",
  },
];

const banner = [
  {
    imgUrl: bannerImg01,
    title: "Intellegent",
    desc: "New Touch Control",
    text: "Discount 20% On Products",
  },
  {
    imgUrl: bannerImg02,
    title: "On-Sale",
    desc: "Best Prices Headphone",
    text: "Limited Time:Online Only!",
  },
  {
    imgUrl: bannerImg03,
    title: "Hot Sale",
    desc: "Super Laptops 2022",
    text: "Free Shipping All Order",
  },
];
const Home = () => {
  return (
    <Helmet title="Home">
      <div className="main__section">
        <HeaderSlider />
        <div className="feature__main">
          {featureData.map((item, index) => (
            <div className="feature" key={index}>
              <div className="feature__item">
                <div className="feature__item-img ">
                  <img
                    src={item.imgUrl}
                    alt="feature-img"
                    className="feature__img"
                  />
                </div>
                <div className="feature__item-text">
                  <h6 className="feature__title">{item.title}</h6>
                  <p className="feature__desc">{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="banner__section">
          <img
            src={bannersection}
            alt="banner"
            className="banner__section-img"
          />
        </div>
        {/*  <div className="banner__section">
          {banner.map((item, index) => (
            <div className="banner" key={index}>
              <img src={item.imgUrl} alt="banner_img" className="banner__img" />

              <div className="banner__item-text">
                <h5 className="banner__title">{item.title}</h5>
                <h5 className="banner__desc">{item.desc}</h5>
                <p className="banner__text">{item.text}</p>
              </div>
            </div>
          ))}
          </div>*/}

        <div className="top__deals">
          <div className="top__deals-left">
            <h6 className="deals__day">Top Deals Of Day</h6>
            <div className="yellow__line"></div>
          </div>
          <div>
            <Timer />
          </div>
        </div>

        <div>
          <SliderProductItem />
        </div>

        <div className="home__center">
          <img src={homeCenter} alt="homecenter" />
        </div>

        <div className="top__selling">
          <div className="top__selling-left">
            <h6 className="top_sell">Top Selling Products</h6>
            <div className="yellow__line"></div>
          </div>

          <div className="top__selling-right">
            <p>Laptop & Computer</p>
            <p>Cellphone</p>
            <p>Speaker & Audio</p>
            <p>Video Game</p>
          </div>
        </div>

        <div>
          <SliderProductItem />
        </div>
        <div className="blue__line"></div>

        <div className="slider-images">
          <div className="image">
            <img src={centerImg} alt="" className="centerImg" />
          </div>
        </div>

        <div className="view__all">
          <Link to="/homepage3">
            {" "}
            <span>VIEW ALL</span>
          </Link>
        </div>

        <div>
          <SliderProductItem />
        </div>

        <div className="food__category"></div>
      </div>
    </Helmet>
  );
};
export default Home;
