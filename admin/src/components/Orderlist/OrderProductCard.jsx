
import './orderlist.css';

const ItemCard = (props) => {
    return (
        <div className="data_body_products">
            <div className="header_product_card">
                <h1>Захиалгын дэлгэрэнгүй</h1>
            </div>
            <div className="body_product_card">
                <div className="id_prod" >
                    <p>
                        {props.item._id && props.item._id.substring(20, 24)}
                    </p>
                </div>
                <div className="code_prod">
                    <p>
                        {props.item.product_code}
                    </p>
                </div>
                <div className="catecore_prod">
                    <p>
                        {props.item.deliver_email}
                    </p>
                </div>
                <div className="name_prod">
                    <p>
                        {props.item.deliver_phone}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default ItemCard;

