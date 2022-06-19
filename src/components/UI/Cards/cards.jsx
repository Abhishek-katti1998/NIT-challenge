import "./cards.css";
import { Link } from "react-router-dom";
const Cards = () => {
  return (
    <Link to="/medicines" className="link">
      <div className="cards--container">
        <div className="cards">
          <p>Order medicines</p>
          <button>Order Now</button>
        </div>
        <div className="cards">
          <p>Health care products</p>
          <button>Order Now</button>
        </div>
      </div>
    </Link>
  );
};
export default Cards;
