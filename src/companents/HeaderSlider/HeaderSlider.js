import Slider from "react-slick";
import "../../style/headerSlider.css";
import galaxybuds from "../../assets/images/galaxy.jpg";
import football from "../../assets/images/footbal.jpg";
import mashine from "../../assets/images/mashine.jpg";

const HeaderSlider = () => {
  const settings = {
    dots: false,
    autoplay: true,
    infinite: true,
    speed: 1000,
    autoplaySpeed: 3000,
    swipeToSlide: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
      <div className="slider d-flex justify-content-between ">
        <div className="slider__text">
          <span className="slider__arrial">NEW ARRIVIALS</span>
          <h5 className="slider__h5">SPORT EDITION</h5>
          <h3 className="slider__h3">BEST CHOICE OF THE YEAR</h3>
          <p className="slider__p">Discount 20% On Products & Free Shipping</p>
          <button className="discover">DISCOVER NOW</button>
        </div>
        <div className="slider__img">
          <img src={mashine} alt="mashine" className="mashine__img" />
        </div>
      </div>
      <div className="slider d-flex justify-content-between">
        <div className="slider__text">
          <span className="slider__arrial">HOT DEAL</span>
          <h5 className="slider__h5">SALE 30% OFF</h5>
          <h3 className="slider__h3">FUTURED FOOTBALL BOOTS</h3>
          <p className="slider__p">Discount 30% On Products & Free Shipping</p>
          <button className="discover">DISCOVER NOW</button>
        </div>
        <div className="slider__img">
          <img src={football} alt="football" className="football__img" />
        </div>
      </div>
      <div className="slider d-flex justify-content-between">
        <div className="slider__text">
          <span className="slider__arrial">HOT DEAL</span>
          <h5 className="slider__h5">SALE 20% OFF</h5>
          <h3 className="slider__h3">SAMSUNG GALAXY BUDS</h3>
          <p className="slider__p">Discount 20% On Products & Free Shipping</p>
          <button className="discover">DISCOVER NOW</button>
        </div>
        <div className="slider__img">
          <img src={galaxybuds} alt="buds" className="galaxy__img" />
        </div>
      </div>
    </Slider>
  );
};
export default HeaderSlider;
