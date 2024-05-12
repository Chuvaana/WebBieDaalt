import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useContext, useState } from 'react';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import './CartCard.css';
import { CartItemsContext } from '../../../../Context/CartItemsContext';
import { IconButton } from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';

const CartCard = (props) => {
    let cartItems  = useContext(CartItemsContext)
    const [size, setSize] = useState(props.item.size[0]);

    const handelQuantityIncrement = (event) => {
        cartItems.quantity(props.item._id, 'INC');
        console.log(props.item._id);
    };

    const handelQuantityDecrement = (event) => {
        if(props.item.itemQuantity >1){
            cartItems.quantity(props.item._id, 'DEC');
        }
    };

    const handelRemoveItem = () => {
        cartItems.removeItem(props.item)
    }

    const handleSizeChange = (event) => {
        setSize(event.target.value);
    };

    const local_price = props.item.price * props.item.itemQuantity;

    cartItems.totalAmount = local_price;


    return (
        <div className='cart__item__card'>
            <div className="cart__item__detail">
                <div className="cart__item__image">
                    <img src={`https://localhost:5000/${props.item.image[0].filename}`} width={120} height={80} alt="item" className="item__image"/>
                </div>
                <div className="cart__item__name">{props.item.name}</div>
            </div>
            <div className="cart__item__price">{props.item.price}₮</div>
            <div className="cart__item__quantity">
                <IconButton onClick={handelQuantityIncrement}>
                    <AddCircleIcon />
                </IconButton>
                <div type="text" name="quantity" className="quantity__input">{props.item.itemQuantity}</div>
                <IconButton onClick={handelQuantityDecrement}>
                    <RemoveCircleIcon fontSize='medium'/>
                </IconButton>
            </div>
            <div className='sum_price'>
                <p>{local_price}₮</p>
            </div>
            <div className="remove__item__icon">
                <IconButton>
                    <HighlightOffIcon onClick={handelRemoveItem}/>
                </IconButton>
            </div>
            

        </div>
     );
}
 
export default CartCard;