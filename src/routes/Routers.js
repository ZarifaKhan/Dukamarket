import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import Cart from "../pages/Carts";
import HomePage2 from "../pages/HomePage2";
import HomePage3 from "../pages/HomePage3";
import FoodDetail from "../pages/FoodDetail";
//import MyAccount from "../pages/MyAccount";
//import About from "../pages/About";
// import Contact from "../pages/Contact";
//import FAQs from "../pages/FAQs";
//import Login from "../pages/Login";
//import Favorite from "../pages/Favorite";
//import Checkout from "../pages/Checkout";
const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/homepage2" element={<HomePage2 />} />
      <Route path="/homepage3" element={<HomePage3 />} />
      <Route path="/products/:id" element={<FoodDetail />} />
      <Route path="/pages/cart" element={<Cart />} />
      {/* <Route path="/homepage4" element={<HomePage4 />} />
      <Route path="/homepage5" element={<HomePage5 />} />
      <Route path="/homepage6" element={<HomePage6 />} />
      <Route path="/homepage7" element={<HomePage7 />} />
      <Route path="/homepage8" element={<HomePage8 />} />
      <Route path="/homepage9" element={<HomePage9 />} />
      <Route path="/homepage10" element={<HomePage10 />} />
      <Route path="/homepage11" element={<HomePage11 />} />
      <Route path="/homepage12" element={<HomePage12 />} />
      <Route path="/homepage13" element={<HomePage13 />} />
      <Route path="/homepage14" element={<HomePage14 />} />*/}
      {/* <Route path="pages/account" element={<MyAccount />} /> */}
      {/* <Route path="pages/about-us" element={<About />} /> */}
      {/* <Route path="pages/contact" element={<Contact />} /> */}
      {/* <Route path="/pages/faqs" element={<FAQs />} /> */}
      {/* <Route path="/pages/login" element={<Login />} /> */}
      {/* <Route path="/pages/wishlist" element={<Favorite />} /> */}
      {/* <Route path="/pages/checkout" element={<Checkout />} /> */}
    </Routes>
  );
};
export default Routers;
