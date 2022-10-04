import { ListGroupItem } from "reactstrap";
import productImg from "../../assets/images/product_01.1.webp";
import "../../style/wishyListItem.css";
import { useDispatch } from "react-redux";
import { favoriteActions } from "./favoriteSlice";

const WishyListItem = ({ item }) => {
  const { id, title, price, image01 } = item;
  const dispatch = useDispatch();

  const deleteItem = () => {
    dispatch(favoriteActions.deleteItem(id));
  };
  return (
    <ListGroupItem className="wishyList__item">
      <div className="wishyList__item-info d-flex gap-2">
        <img src={image01} alt="" />

        <div className="wishyList__product-info d-flex align-items-center gap-4 justify-content-between w-100">
          <div className="wishyList__items">
            <h6 className="wishyList__product-title">{title}</h6>
            <span className="wishyList__product-price">${price}</span>
          </div>
          <div>
            <span className="delete__wishyList-item" onClick={deleteItem}>
              <i class="ri-close-line"></i>
            </span>
          </div>
        </div>
      </div>
    </ListGroupItem>
  );
};

export default WishyListItem;
