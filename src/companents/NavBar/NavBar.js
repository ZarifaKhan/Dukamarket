import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "../../style/navbar.css";

const navbar__links = [
  {
    display: "Computers",
    path: "/",
  },
  {
    display: "TV & Audios",
    path: "/",
  },
  {
    display: "Headphones",
    path: "/",
  },
  {
    display: "Printers & Ink",
    path: "/",
  },
  {
    display: "Home Theatres",
    path: "/",
  },
  {
    display: "PC Companents",
    path: "/",
  },
  {
    display: "Ultrabooks",
    path: "/",
  },
  {
    display: "Smartwatches",
    path: "/",
  },
  {
    display: "Cameras &Photography",
    path: "/",
  },
  {
    display: "Smartphones & Tablets",
    path: "/",
  },
];

const NavBar = () => {
  const [toggle, setToggle] = useState(false);

  const handleClick = () => {
    setToggle(!toggle);
  };
  return (
    <div className="navbar__container">
      <div className="navbar__left" onClick={handleClick}>
        <div className="icon__menu ">
          {!toggle ? (
            <i class="fa fa-regular fa-bars choose__icon"></i>
          ) : (
            <i class="fa-solid fa-xmark"></i>
          )}
        </div>
        {/* <span>
          <i class="fa fa-regular fa-bars choose__icon"></i>
          <span className="navbar__close">
            <i class="fa-solid fa-xmark"></i>
          </span>
        </span> */}
        <div className="navbar__left-container">
          <h5>SHOP BY DEPARTMENT</h5>

          <div
            className={
              !toggle ? "navbar__left-menu" : "navbar__left-menu active"
            }
          >
            <ul className="navbar__left-items">
              {navbar__links.map((item, index) => (
                <Link to={item.path} key={index}>
                  {item.display}
                </Link>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="navbar__">
        <div>
          <ul className="navbar__menu">
            <li className="home_li">
              <NavLink to="/">
                HOME <i class="fa fa-thin fa-angle-down"></i>
              </NavLink>
              <div className="dropDown__home flex">
                <div className="left_dropDown">
                  <Link to="/">Home Page1</Link>
                  <Link to="/homepage2">Home Page2</Link>
                  <Link to="/homepage3">Home Page3</Link>
                  {/* <Link to="/products/:id">Food Detail</Link> */}
                  <Link to="/">Home Page4</Link>
                  <Link to="/">Home Page5</Link>
                  <Link to="/">Home Page6</Link>
                  <Link to="/">Home Page7</Link>
                </div>
                <div className="right_dropDown">
                  <Link to="/">Home Page8</Link>
                  <Link to="/">Home Page9</Link>
                  <Link to="/">Home Page10</Link>
                  <Link to="/">Home Page11</Link>
                  <Link to="/">Home Page12</Link>
                  <Link to="/">Home Page13</Link>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div>
          <ul className="shop__menu">
            <li className="shop__li">
              <NavLink to="/">
                SHOP <i class="fa fa-thin fa-angle-down"></i>
              </NavLink>
              <div className="dropDown__shop">
                <div className="first__dropDown">
                  <h6>Shop Layout</h6>
                  <Link to="/">Sidebar Left</Link>
                  <Link to="/">Sidebar Right</Link>
                  <Link to="/">Top Sidebar</Link>
                  <Link to="/">Shop 5 Column</Link>
                  <Link to="/">Shop Full Width</Link>
                  <Link to="/">Product Zoom In</Link>
                  <Link to="/">Product Lens Zoom</Link>
                  <Link to="/">Product Mouse Zoom</Link>
                </div>

                <div className="second__dropDown">
                  <h6>Product Layout</h6>
                  <Link to="/">Thumb Left</Link>
                  <Link to="/">Thumb Right</Link>
                  <Link to="/">Thumb Bottom</Link>
                  <Link to="/">No Thumb</Link>
                  <Link to="/">Page Countdown</Link>
                  <Link to="/">Free Shipping</Link>
                  <Link to="/">Simple Product</Link>
                  <Link to="/">Variable Product</Link>
                </div>

                <div className="third__dropDown">
                  <h6>Other Shop Page</h6>
                  <Link to="/">Categories</Link>
                  <Link to="/">Collection</Link>
                  <Link to="/">LookBook</Link>
                  <Link to="/">Shopping Cart</Link>
                  <Link to="/">Wishlist</Link>
                  <Link to="/">Order Tracking</Link>
                  <Link to="/">Checkout</Link>
                  <Link to="/">Product 360</Link>
                </div>

                <div className="fourth__dropDown">
                  <h6>Product Categories</h6>
                  <Link to="/">Product-Bedroom</Link>
                  <Link to="/">Product-Outdoor</Link>
                  <Link to="/">Product-Decaration</Link>
                  <Link to="/">Product-Kitchen</Link>
                  <Link to="/">
                    Product-Pagination <br></br>Default
                  </Link>
                  <Link to="/">
                    Product-Load <br></br>More
                  </Link>
                  <Link to="/">Product-Infinit Scrolling</Link>
                  <Link to="/">Collection-2.0</Link>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div>
          <ul className="page__menu">
            <li className="page__li">
              <NavLink to="/">
                PAGE <i class="fa fa-thin fa-angle-down"></i>
              </NavLink>
              <div className="dropDown__page">
                <Link to="/">My Account</Link>
                <Link to="/">Contact Us</Link>
                <Link to="/">About Us</Link>
                <Link to="/">Faqs</Link>
                <Link to="/">Site Boxed</Link>
                <Link to="/">404</Link>
              </div>
            </li>
          </ul>
        </div>
        <div>
          <ul className="blog__menu">
            <li className="blog__li">
              <NavLink to="/">
                BLOG <i class="fa fa-thin fa-angle-down"></i>
              </NavLink>
              <div className="dropDown__blog">
                <Link to="/">Grid no sidebar</Link>
                <Link to="/">Grid left sidebar</Link>
                <Link to="/">Grid right sidebar</Link>
                <Link to="/">List no sidebar</Link>
                <Link to="/">List left sidebar</Link>
                <Link to="/">List right sidebar</Link>
              </div>
            </li>
          </ul>
        </div>

        <div>
          <ul className="about__menu">
            <li>
              <div className="about__li">
                <NavLink to="/">ABOUT</NavLink>
              </div>
            </li>
          </ul>
        </div>
        <div>
          <ul className="contact__menu">
            <li>
              <div className="contact__li">
                <NavLink to="/">CONTACT</NavLink>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div className="choose__right">
        <span>Spend $120 more and get free shipping!</span>
      </div>
    </div>
  );
};

export default NavBar;
