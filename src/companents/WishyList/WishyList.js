import { ListGroup } from "reactstrap";
import WishyListItem from "./WishyListItem";
import "../../style/wishyList.css";
import { useDispatch, useSelector } from "react-redux";
import { favoriteUIActions } from "./favoriteUiSlice";
const WishyList = () => {
  const toggleWishyList = () => {
    dispatch(favoriteUIActions.toggle());
  };
  const dispatch = useDispatch();
  const wishylistProducts = useSelector(
    (state) => state.favorite.favoriteItems
  );
  return (
    <div className="wishyList__container">
      <ListGroup className="wishyList">
        <div className="wishyList__close">
          <h6 className="wishyList__header">WishyList</h6>
          <span className="close__wishy" onClick={toggleWishyList}>
            <i class="ri-close-line"></i>
          </span>
        </div>

        <div className="wishyList__item-list">
          {wishylistProducts.length === 0 ? (
            <h6>No item add to the cart</h6>
          ) : (
            wishylistProducts.map((item, index) => (
              <WishyListItem item={item} key={index} />
            ))
          )}
        </div>
      </ListGroup>
    </div>
  );
};

export default WishyList;
