import { NavLink, Link } from "react-router-dom";
import "../../style/header.css";
import logo from "../../assets/images/logo.webp";
import NavBar from "../NavBar/NavBar";
import { useSelector, useDispatch } from "react-redux";
import { cartActions } from "../store/shopping-cart/CartSlice";
import { cartUIActions } from "../store/shopping-cart/cartUISlice";
import { favoriteUIActions } from "../WishyList/favoriteUiSlice";
const header__links = [
  {
    display: "My Account",
    path: "/pages/account",
  },
  {
    display: "About Us",
    path: "/pages/about-us",
  },

  {
    display: "Contact Us",
    path: "/pages/contact",
  },
  {
    display: "Cart",
    path: "/pages/cart",
  },
];

const Header = () => {
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const totalAmount = useSelector((state) => state.cart.totalAmount);

  const totalWishyList = useSelector((state) => state.favorite.totalQuantity);
  const dispatch = useDispatch();

  const toggleCart = () => {
    dispatch(cartUIActions.toggle());
  };

  const toggleWishyList = () => {
    dispatch(favoriteUIActions.toggle());
  };

  return (
    <div className="header">
      <div className="header__container">
        <div className="top__header">
          <div className="top__header-left">
            <div className="currency">
              <select className="select__option">
                <option>GBP</option>
                <option>USD</option>
                <option>EUR</option>
                <option>DKK</option>
                <option>ARS</option>
                <option>CNY</option>
                <option>BRL</option>
              </select>
            </div>
            <span className="line">|</span>
            <div className="language">
              <select className="select__option">
                <option>EN</option>
                <option>AR</option>
                <option>DE</option>
              </select>
            </div>
            <span className="line">|</span>
            <div className="help">
              <p className="need">
                Need Help?<span>+001 123 456 789</span>
              </p>
            </div>
          </div>
          <div className="top__header-right">
            <ul className="menu">
              {header__links.map((item, index) => (
                <NavLink to={item.path} key={index}>
                  {item.display}
                </NavLink>
              ))}
            </ul>
          </div>
        </div>
        <div className="dukamarket">
          <div className="duka__container">
            <div className="logo">
              <img src={logo} alt="logo" />
            </div>
            <div className="search__section">
              <div className="search__category">
                <select className="categories">
                  <option value="All Categories">All Categories</option>
                  <option value="Accessories">Accessories</option>
                  <option value="Basketball">Basketball</option>
                  <option value="Customise">Customise</option>
                  <option value="Decor">Decor</option>
                  <option value="Dining & Kitchen">Dining & Kitchen</option>
                  <option value="Exercise">Exercise</option>
                  <option value="Girls">Girls</option>
                  <option value="Lifestyle">Lifestyle</option>
                  <option value="Lighting">Lighting</option>
                  <option value="Living Room">Living Room</option>
                  <option value="Office Furniture">Office Furniture</option>
                  <option value="Outdoor & Gift">Outdoor & Gift</option>
                  <option value="Running">Running</option>
                  <option value="Sectional Sofas">Sectional Sofas</option>
                  <option value="Tables & Chair">Tables & Chair</option>
                  <option value="Top Selling">Top Selling</option>
                  <option value="Training">Training</option>
                </select>

                <div className="search__widget ">
                  <form>
                    <input
                      type="text"
                      placeholder="Search for products...."
                      className="search__w"
                    />
                  </form>
                  <button className="search__button">
                    <i class="fa fa-thin fa-magnifying-glass"></i>{" "}
                  </button>
                </div>
              </div>
            </div>

            <div className="duka__right">
              <div className="login">
                <div className="login__icon">
                  <span className="header__icon">
                    <i class="fa ri-user-line"></i>
                  </span>
                </div>
                <div className="login__mini">
                  <p className="opacity">Login</p>
                  <p>Login / Register</p>
                </div>
              </div>
              <div className="favorite login">
                <div className="login__icon">
                  <span
                    className="header__icon wishlist"
                    onClick={toggleWishyList}
                  >
                    <i class="ri-heart-line"></i>
                    <span className="cart__badge">{totalWishyList}</span>
                  </span>
                </div>
                <div className="login__mini">
                  <p className="opacity">Favorite</p>
                  <p>My Wishlist</p>
                </div>
              </div>
              <div className="your__cart login">
                <div className="login__icon">
                  <span
                    className="header__icon your__cart"
                    onClick={toggleCart}
                  >
                    <i class="ri-shopping-cart-line"></i>
                    <span className="cart__bdg">{totalQuantity}</span>
                  </span>
                </div>
                <div className="login__mini">
                  <p className="opacity">Your Cart :</p>

                  <span className="header__icon euro">
                    <i class="fa-solid fa-dollar-sign">{totalAmount}</i>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div>
          <NavBar />
        </div>
      </div>
    </div>
  );
};
export default Header;
