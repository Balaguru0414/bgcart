import { Link } from "react-router-dom";
import "../styles/checkout.css";
import { AiFillCheckCircle } from "react-icons/ai";

const Checkout = () => {
  return (
    <>
      <div className="checkoutMessage center">
        <div className="checkoutTitleContainer">
          <AiFillCheckCircle className="checkoutIcon" />
          <h3>Thank you for your order!</h3>
        </div>
        <button className="addTOCart__btn center">
          <Link to="/buy">Continue Shopping</Link>
        </button>
      </div>
    </>
  );
};

export default Checkout;
