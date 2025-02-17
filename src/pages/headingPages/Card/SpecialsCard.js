import { MdDeliveryDining } from 'react-icons/md';
import { Link } from 'react-router-dom';
const SpecialCard = ({ title, price, description, imgURL }) => {
    return (
      <div className="specials-cards">
        <div className="cardImgContainer">
          <img src={imgURL} alt={title} className="cardImg" />
        </div>
        <div className="cardHeaderContainer">
          <h3 className="cardHeaderTitle">{title}</h3>
          <p className="cardHeaderPrice">$ {price.toFixed(2)}</p>
        </div>
        <div className="cardBodyContainer">
          <p className="cardBodyDescription">{description}</p>
        </div>
        <div className="cardOrderContainer">
        <Link to="/order">
        <button className="orderLink">
            Order a delivery <MdDeliveryDining />
        </button>
        </Link>
        </div>
      </div>
    );
  };
  export default SpecialCard;
  