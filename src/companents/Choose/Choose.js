import "../../style/choose.css";
import { Link, NavLink } from "react-router-dom";
const Choose = () => {
 { const menuItems = [
    {
      title: "Home",
      submenu: [
        {
          title: "Home Page 1",
        },
        {
          title: "Home Page 2",
        },
        {
          title: "Home Page 3",
        },
        {
          title: "Home Page 4",
        },
        {
          title: "Home Page 5",
        },
        {
          title: "Home Page 6",
        },
        {
          title: "Home Page 7",
        },
        {
          title: "Home Page 8",
        },
        {
          title: "Home Page 9",
        },
        {
          title: "Home Page 10",
        },
        {
          title: "Home Page 11",
        },
        {
          title: "Home Page 12",
        },
        {
          title: "Home Page 13",
        },
      ],
    },

    {
      /*{
      title: "Shop",
      submenu: [
        {
          head: "Shop Layout",
        },
        {
          title: "Sidebar Left",
        },
        {
          title: "Sidebar Left",
        },
        {
          title: "Sidebar Left",
        },
        {
          title: "Sidebar Left",
        },
        {
          title: "Sidebar Left",
        },
        {
          title: "Sidebar Left",
        },
      ],
    },*/
    },
  ];
  {
    /* const choose__link = [
    {
      name: "Home",

      submenu: [
        { name: "Home Page 1", link: "/" },
        { name: "Home Page 2", link: "/homepage2" },
        { name: "Home Page 3", link: "/homepage3" },
        { name: "Home Page 4", link: "/homepage4" },
        { name: "Home Page 5", link: "/homepage5" },
        { name: "Home Page 6", link: "/homepage6" },
        { name: "Home Page 7", link: "/homepage7" },
        { name: "Home Page 8", link: "/homepage8" },
        { name: "Home Page 9", link: "/homepage9" },
        { name: "Home Page 10", link: "/homepage10" },
        { name: "Home Page 11", link: "/homepage11" },
        { name: "Home Page 12", link: "/homepage12" },
        { name: "Home Page 13", link: "/homepage13" },
      ],
    },
  ];*/
  }
  return (
    <div className="choose__container">
      <div className="choose__left">
        <span>
          <i class="fa fa-regular fa-bars choose__icon"></i>
        </span>
        <h5>SHOP BY DEPARTMENT</h5>
      </div>

      {/*
      <div className="choose__center">
        <div className="choose__home flex">
          <h6>HOME</h6>
          <i class="fa fa-thin fa-chevron-down"></i>
        </div>
        <div className="choose__shop flex">
          <h6>SHOP</h6>
          <i class="fa fa-thin fa-chevron-down"></i>
        </div>
        <div className="choose__page flex">
          <h6>PAGE</h6>
          <i class="fa fa-thin fa-chevron-down"></i>
        </div>

        <div className="choose__blog flex">
          <h6>BLOG</h6>
          <i class="fa fa-thin fa-chevron-down"></i>
        </div>
        <div className="chooose_about flex">
          <h6>About</h6>
          <i class="fa fa-thin fa-chevron-down"></i>
        </div>

        <div className="choose__about flex">
          <h6>ABOUT</h6>
        </div>
        <div className="choose__contact flex">
          <h6>CONTACT</h6>
        </div>
      </div>*/}
      <div className="choose__right">
        <span>Spend $120 more and get free shipping!</span>
      </div>
    </div>
  );
};

export default Choose;
