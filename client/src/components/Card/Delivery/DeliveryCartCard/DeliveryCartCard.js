import { useContext } from 'react';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import './DeliveryCartCard.css';
import { CartItemsContext } from '../../../../Context/CartItemsContext';
import { IconButton } from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';

const DeliveryCartCard = (props) => {
    let cartItems = useContext(CartItemsContext)

    const handelRemoveItem = () => {
        cartItems.removeItem(props.item)
    }

    const local_price = props.item.price * props.item.itemQuantity;

    cartItems.totalAmount = local_price;
    const renderImage = () => {
        if (props.item.image && props.item.image.length > 0) {
            console.log(props.item.image[0].path);
            return <img
                style={{ width: 80, height: 60 }}
                src={props.item.image[0].path}
                alt=""
            />;
        }
    }

    return (
        <div className='delivery_cart__item__card'>
            <div className="cart__item__detail">
                <div className="cart__item__image">
                    {renderImage()}
                </div>
                <div className="cart__item__name">{props.item.name}</div>
            </div>
            <div className="cart__item__quantity">
                <div type="text" name="quantity" className="quantity__input">{props.item.itemQuantity}</div>
            </div>
            <div className='sum_price'>
                <p>{local_price}₮</p>
            </div>

        </div>
    );
}

export default DeliveryCartCard;