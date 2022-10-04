import products from "../../assets/fake data/products";
import SliderProductCart from "./SliderProductCart";
import Slider from "react-slick";
const SliderProductItem = () => {
  const settings = {
    dots: false,
    autoplay: true,
    infinite: true,
    speed: 1000,
    autoplaySpeed: 3000,
    swipeToSlide: true,
    slidesToShow: 5,
    slidesToScroll: 3,
  };
  return (
    <div className="slider__products-item">
      <Slider {...settings}>
        {products.map((item) => (
          <div>
            <SliderProductCart item={item} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SliderProductItem;
