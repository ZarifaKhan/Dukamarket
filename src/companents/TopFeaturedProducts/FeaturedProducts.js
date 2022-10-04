import productPioner from "../../assets/images/productPioner.webp";

const FeaturedProducts = () => {
  return (
    <div className="featuredProducts__container">
      <div className="featuredProducts__img">
        <img src={productPioner} alt="productPioner" />
      </div>

      <div className="featuredProducts__text">
        <h5>Pioneer High Performance Hi-Res Wired</h5>
        <div className="featuredProducts__icons">
          <i class="ri-star-s-line"></i>
          <i class="ri-star-s-line"></i>
          <i class="ri-star-s-line"></i>
          <i class="ri-star-s-line"></i>
          <i class="ri-star-s-line"></i>
        </div>
        <div className="eaturedProducts__price">
          <span>$65.00</span>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProducts;
