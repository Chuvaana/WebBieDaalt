
import './productlist.css';

const ItemCard = (props) => {
    return (
        <div className="data_body_products">
            <div className="code_prod">
                <p>
                    {props.itemKey+1}
                </p>
            </div>
            <div className="id_prod" >
                <p>
                    {props.item._id && props.item._id.substring(20, 24)}
                </p>
            </div>
            <div className="catecore_prod">
                <p>
                    {props.item.category}
                </p>
            </div>
            <div className="name_prod">
                <p>
                    {props.item.name}
                </p>
            </div>
            <div className="firstquinty_prod">
                <p>
                    {props.item.quantity}
                </p>
            </div>
            <div className="price_prod">
                <p>
                    {props.item.price} ₮
                </p>
            </div>
            <div className="date_prod">
                <p>
                    {props.item.createdAt && props.item.createdAt.substring(0, 10)}
                </p>
            </div>
            <div className="props_prod">
                <p>
                    {props.item.quantity}
                </p>
            </div>
        </div>
    );
}

export default ItemCard;

