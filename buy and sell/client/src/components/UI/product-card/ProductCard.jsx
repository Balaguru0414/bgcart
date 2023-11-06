import "../../../styles/product-card.css";

// import productImg from "../../../assets/images/product_2.1.jpg";

import { useDispatch } from "react-redux";
import { cartActions } from "../../../store/shopping-cart/cartSlice";
import { Spinner } from "reactstrap";

const ProductCard = (props) => {
  const { id, title, image, price } = props.item;
  // console.log("***item", props.item);
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(
      cartActions.addItem({
        id,
        title,
        image,
        price,
      })
    );
  };

  return (
    <div className="product__item d-flex flex-column justify-content-between">
      <div className="product__content">
        <img className="product__img cart-img" src={image} alt="product" />
      </div>

      <h5 className="">
        {/* {title} */}
        {title.slice(0, 25)}
        {title.slice(0, 25) ? "" : "..."}
      </h5>

      <div className="d-flex flex-column align-items-center justify-content-between">
        <span className="product__price mb-2">{price} ₹ </span>
        <button className="addTOCART__btn" onClick={addToCart}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
