
import './worklist.css';

const ItemCard = (props) => {
    return (
        <div className="data_body_workers2">
            <div className="id_prod" >
                <p>
            {props.item._id && props.item._id.substring(20, 24)}
            </p>
            </div>
            <div className="code_prod">
                <p>
                {props.item.deliver_ovog}
                </p>
            </div>
            <div className="catecore_prod">
                <p>
                {props.item.deliver_name}
                </p>
            </div>
            <div className="name_prod2">
                <p>
                {props.item.deliver_rd}
                </p>
            </div>
            <div className="firstquinty_prod">
                <p>
                {props.item.deliver_phone}
                </p>
            </div>
            <div className="price_prod">
                <p>
                {props.item.deliver_email}
                </p>
            </div>
            <div className="date_prod">
                <p>
            {props.item.deliver_address}
            </p>
            </div>
            <div className="props_prod">
                <p>
            {props.item.deliver_date && props.item.deliver_date.substring(0, 10)}
                </p>
            </div>
            <div className="props_prod">
                <p>
                {props.item.deliver_type}
                </p>
            </div>
        </div>
    );
}

export default ItemCard;

