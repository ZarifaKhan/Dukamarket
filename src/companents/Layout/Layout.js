import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Routes from "../../routes/Routers";
import Cart from "../UI/cart/cart";
import { useSelector } from "react-redux";
import WishyList from "../WishyList/WishyList";
const Layout = () => {
  const showCart = useSelector((state) => state.cartUI.cartIsVisible);
  const showWishyList = useSelector(
    (state) => state.favoriteUI.favoriteIsVisible
  );
  return (
    <div>
      <Header />
      {showWishyList && <WishyList />}
      {showCart && <Cart />}
      <div>
        <Routes />
      </div>
      <Footer />
    </div>
  );
};
export default Layout;
