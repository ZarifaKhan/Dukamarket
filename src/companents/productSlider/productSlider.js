import products from "../../assets/fake data/products";
import ProductCard from "../UI/ProductCard";

const productSlider = () => {
  return (
    <div>
      {products.map((item) => (
        <div key={item.id}>
          <ProductCard item={item} />
        </div>
      ))}
    </div>
  );
};

export default productSlider;
