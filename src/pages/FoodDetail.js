import products from "../assets/fake data/products";
import { useParams } from "react-router-dom";

import { cartActions } from "../companents/store/shopping-cart/CartSlice";
import { useDispatch } from "react-redux";
import Helmet from "../companents/Helmet/Helmet";

import productImg from "../assets/images/product_02.2.avif";
import "../style/foodDetail.css";
import { useState, useEffect } from "react";
const FoodDetail = (props) => {
  //const [tab, setTab] = useState("desc");
  const { id } = useParams();

  const dispatch = useDispatch();
  const product = products.find((product) => product.id === id);

  // const [title, price, category, desc, image01] = product;

  const [previewImg, setPreviewImg] = useState(product.image01);

  // /const [title, price, category, desc, image01] = product;

  // const addItem = () => {
  //   dispatch(
  //     cartActions.addItem({
  //       id,
  //       title,
  //       price,
  //       image01,
  //     })
  //   );
  // };

  useEffect(() => {
    setPreviewImg(product.image01);
  }, [product]);

  return (
    <Helmet title="product-detail">
      <div className="foodDetail">
        <div className="foodDetail-top">
          <div className="foodDetail__images">
            <div className="product__images">
              <div
                className="img__item"
                onClick={() => setPreviewImg(product.image01)}
              >
                <img src={product.image01} alt="" className="" />
                {/* <img src={product.image01} alt="" className="" /> */}
              </div>
              <div
                className="img__item"
                onClick={() => setPreviewImg(product.image02)}
              >
                {/* <img src={product.image02} alt="" className="" /> */}
                <img src={product.image02} alt="" className="" />
              </div>
              <div
                className="img__item"
                onClick={() => setPreviewImg(product.image03)}
              >
                {/* <img src={product.image03} alt="" className="" /> */}
                <img src={product.image03} alt="" className="" />
              </div>
            </div>
            <div className="product__main-img">
              <img src={previewImg} alt="" className="__main-img" />
            </div>
          </div>
          <div className="single__product-content">
            {/* <h2 className="product__title">{title}</h2> */}
            <h2 className="product__title">{product.title}</h2>
            <p className="product__detail-price">
              {" "}
              {/* Price: <span>{price}</span> */}
              Price: <span>${product.price}</span>
            </p>
            <p className="category">
              {/* Category:<span>{category}</span> */}
              Category:<span>phone</span>
            </p>
            <div className="padding__line"></div>
            {/* <button className="foodDetail__btn">Add To Cart</button> */}
            <div className="tabs">
              <div className="tabs__header">
                <h6>Description</h6>
                <h6>Review</h6>
              </div>
              {/* <p className="tabs__text">{desc}</p> */}
              <p className="tabs__text">{product.desc}</p>
            </div>
            {/* <button onClick={addItem} className="foodDetail__btn"> */}
            <button className="foodDetail__btn">Add To Cart</button>
          </div>
        </div>
      </div>
    </Helmet>
  );
};

export default FoodDetail;
