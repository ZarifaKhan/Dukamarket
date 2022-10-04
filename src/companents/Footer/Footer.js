import { Link } from "react-router-dom";
import AppStore from "../../assets/images/appstore.avif";
import GooglePay from "../../assets/images/google.pay.avif";
import "../../style/footer.css";
const Footer = () => {
  const footerLeft__link = [
    {
      type: "Links",
      title: "Laptop & Computer",
      path: "/collections/laptop-computer",
    },
    {
      type: "Links",
      title: "Speaker & Audio",
      path: "/collections/speaker-audiod",
    },
    {
      type: "Links",
      title: "Cellphone",
      path: "/collections/cellphone",
    },
    {
      type: "Links",
      title: "Video Game",
      path: "/collections/video-game",
    },
    {
      type: "Links",
      title: "Accessorias",
      path: "/collections/accessories",
    },
    {
      type: "Links",
      title: "Delivery & Dispatch",
      path: "",
    },
  ];

  const myAccount__link = [
    {
      type: "Links",
      title: "Search",
      path: "/search",
    },
    {
      type: "Links",
      title: "Product Support",
      path: "/search#",
    },
    {
      type: "Links",
      title: "Checkout",
      path: "/checkout",
    },
    {
      type: "Links",
      title: "Shopping Cart",
      path: "/cart",
    },
    {
      type: "Links",
      title: "Wishlist",
      path: "/pages/wishlist",
    },
    {
      type: "Links",
      title: "New Arrivials",
      path: "*",
    },
  ];

  const quick__links = [
    {
      type: "Links",
      title: "Store Location",
      path: "*",
    },
    {
      type: "Links",
      title: "My Account",
      path: "/pages/account",
    },
    {
      type: "Links",
      title: "Order Tracking",
      path: "*",
    },
    {
      type: "Links",
      title: "FAQs",
      path: "/pages/faqs",
    },
  ];

  const customer__links = [
    {
      type: "Links",
      title: "Help Center",
      path: "*",
    },
    {
      type: "Links",
      title: "Contact Us",
      path: "*",
    },
    {
      type: "Links",
      title: "Report Abuse",
      path: "*",
    },
    {
      type: "Links",
      title: "Submit a Disput",
      path: "*",
    },
    {
      type: "Links",
      title: "Policies &Rules",
      path: "*",
    },
    {
      type: "Links",
      title: "Online Shopping",
      path: "",
    },
  ];
  return (
    <div className="footer__container">
      <div className="top__footer">
        <div className="top__footer__left">
          <h3 className="top__footer-h3">Follow us</h3>
          <p className="top__footer-text">
            We make consolidating, marketing and tracking your social media
            website easy.
          </p>
          <div className="top__footer-social">
            <i class="fa fa-brands fa-twitter"></i>
            <i class="fa fa-brands fa-facebook-f"></i>
            <i class="fa fa-brands fa-pinterest-p"></i>
            <i class="fa fa-brands fa-instagram"></i>
            <i class="fa fa-brands fa-youtube"></i>
          </div>
        </div>
        <div className="top__footer__center">
          <h3 className="top__footer-h3">Sign Up To Newsletter</h3>
          <p className="top__footer-text">
            Join 60.000+ subscribers and get a new discount coupon on every
            Saturday.
          </p>
        </div>
        <div className="top__footer__right">
          <h3 className="top__footer-h3">Download App</h3>
          <p className="top__footer-text">
            Dukamarket App is now available on App Store & Google Play. Get it
            now.
          </p>
          <div className="google__pay">
            <img src={AppStore} alt="appstore" />
            <img src={GooglePay} alt="googlepay" />
          </div>
        </div>
      </div>
      <div className="footer">
        <div className="footer__1__heading footer__head">
          <h3 className="footer__custom">
            Help & Customer <br></br>Care
          </h3>
          <ul>
            {footerLeft__link.map((item, index) => (
              <li key={index}>
                {item.type === "Link" ? (
                  <Link to={item.path}>{item.title}</Link>
                ) : (
                  <a href={item.path} target="blank" rel="noreferrer">
                    {item.title}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </div>
        <div className="footer__2__heading footer__head">
          <h3 className="footer__custom">My Account</h3>
          <ul>
            {myAccount__link.map((item, index) => (
              <li key={index}>
                {item.type === "Link" ? (
                  <Link to={item.path}>{item.title}</Link>
                ) : (
                  <a href={item.path} target="blank" rel="noreferrer">
                    {item.title}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </div>
        <div className="footer__3__heading footer__head">
          <h3 className="footer__custom">Quick Links</h3>
          <ul>
            {quick__links.map((item, index) => (
              <li key={index}>
                {item.type === "Link" ? (
                  <Link to={item.path}>{item.title}</Link>
                ) : (
                  <a href={item.path} target="blank" rel="noreferrer">
                    {item.title}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </div>
        <div className="footer__4__heading footer__head">
          <h3 className="footer__custom custom__services">Customer Service</h3>
          <ul>
            {customer__links.map((item, index) => (
              <li key={index}>
                {item.type === "Link" ? (
                  <Link to={item.path}>{item.title}</Link>
                ) : (
                  <a href={item.path} target="blank" rel="noreferrer">
                    {item.title}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </div>
        <div className="footer__5__heading footer__head">
          <h3 className="footer__custom about__store">About The Store</h3>
          <p className="footer__about-p">
            Our mission statement is to provide the absolute best customer
            experience available in the Electronic industry without exception.
          </p>

          <div className="footer__call">
            <p className="call__us">Got Question? Call us 24/7!</p>
            <span className="phone">+001 123 456 789</span>
            <p className="adress">
              Add: Walls Street 68, Mahattan, New York, USA
            </p>
            <span className="mail">Mail: alothemes@gmail.com</span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
