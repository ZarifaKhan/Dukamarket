import "../style/page2.css";
import Slider from "react-slick";

const HomePage2 = () => {
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
    <div className="page__2">
      <div className="page2__left">
        <Slider {...settings}>
          <div className="slide__first">
            <h3 className="slide__h3">
              Gaming Headset <br></br>Brilliant Lighting Effect
            </h3>
            <p className="slide__p">
              Wireless Connection With TV, Computer, Laptop...
            </p>
            <button className="slide__button">DISCOVER NOW</button>
          </div>

          <div className="slide__second">
            <h3 className="slide__h3">
              Sport Edition <br></br>Red Special Edition
            </h3>
            <p className="slide__p">
              Wireless Connection With TV, Computer, Laptop...
            </p>
            <button className="slide__button">DISCOVER NOW</button>
          </div>

          <div className="slide__third">
            <h3 className="slide__h3">
              Sport Edition <br></br>Best Choice Of Your
            </h3>
            <p className="slide__p">
              Wireless Connection With TV, Computer, Laptop...
            </p>
            <button className="slide__button">DISCOVER NOW</button>
          </div>
        </Slider>
      </div>
      <div className="page2__right">
        <div className="page2__right-top">
          <div className="page2__right-1">
            <h3>
              Canyon <br></br> Star Raider
            </h3>
            <p>Headphone & Audio</p>
          </div>

          <div className="page2__right-2">
            <h3>
              Phone<br></br> Galaxy S20
            </h3>
            <p>Cellphone & Tablets</p>
          </div>
        </div>

        <div className="oage2__right-bottom">
          <div className="page2__right-3">
            <h3>
              Galaxy<br></br> Buds Plus
            </h3>
            <p>Wireless Earbuds</p>
          </div>

          <div className="page2__right-4">
            <h3>
              Chair<br></br> Swoon Lounge
            </h3>
            <p>Decor & Furniture</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage2;
