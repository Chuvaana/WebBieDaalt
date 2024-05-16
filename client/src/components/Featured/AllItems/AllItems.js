import ItemCard from "../../Card/ItemCard/ItemCard";
import ReactLoading from "react-loading";
import { useNavigate } from "react-router-dom";
import "./AllItems.css";

const AllItems = (props) => {
  const navigate = useNavigate();
  // Filter items where sale field is false

  const saleFalseItems = props.items
    ? props.items.filter((item) => !item.sale).slice(0, 8)
    : [];

  const handleViewAllItems = () => {
    navigate("/item/viewAll");
  };

  return (
    <div className="home_featured__products__container">
      <div className="itemsFrame">
        <div className="date">
          <div className="red"></div>
          <p>Бүтээгдэхүүн</p>
        </div>
        <div className="itemList">
          <div className="cardlist">
            {!props.items && (
              <ReactLoading
                type="balls"
                color="#FFE26E"
                height={100}
                width={100}
                className="m-auto"
              />
            )}
            {saleFalseItems.length > 0 && (
              <div className="featured__products__card__container">
                {saleFalseItems.map((item, index) => (
                  <ItemCard key={index} item={item} category="featured" />
                ))}
              </div>
            )}
          </div>
        </div>
        <div>
          <button type="button" onClick={handleViewAllItems}>
            Бүх барааг харах
          </button>
        </div>
      </div>
    </div>
  );
};

export default AllItems;
