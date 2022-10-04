import products from "../assets/fake data/products";
import ProductCard from "../companents/UI/ProductCard";
import "../style/page3.css";
import { Container, Col, Row } from "reactstrap";
import { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import "../style/pagination.css";
const HomePage3 = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [pageNumber, setPageNumber] = useState(0);

  const productPerPage = 12;
  const visitedPage = pageNumber * productPerPage;
  const displayPage = products.slice(visitedPage, visitedPage + productPerPage);

  const pageCount = Math.ceil(products.length / productPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <div className="products-header">
      <div className="product__header-search">
        <div className="search__widget  ">
          <input
            className="search__input"
            type="text"
            placeholder="I'm looking for...."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <span>
            <i class="ri-search-line"></i>
          </span>
        </div>
        <div className="sorting__widget">
          <select className="select">
            <option>All Products</option>
            <option value="featured">Featured</option>
            <option value="alfa">Alphabetically,A-Z</option>
            <option value="des">Alphabetically,Z-A</option>
            <option value="high-price">Price,low to high</option>
            <option value="low-price">Price,high to low</option>
            <option value="old-date">Date,old to new</option>
            <option value="new-date">Date,new to old</option>
          </select>
        </div>
      </div>
      <div className="products">
        {displayPage
          .filter((item) => {
            if (searchTerm.value === "") return item;
            if (
              item.title.toLowerCase().includes(searchTerm.toLocaleLowerCase())
            )
              return item;
          })
          .map((item) => (
            <div>
              <ProductCard item={item} key={item.id} />
            </div>
          ))}
      </div>
      <div className="paginate">
        <ReactPaginate
          pageCount={pageCount}
          onPageChanege={changePage}
          previousLabel={"Prev"}
          nextLabel={"Next"}
          containerClassName="paginationBttns"
        />
      </div>
    </div>
  );
};

export default HomePage3;
