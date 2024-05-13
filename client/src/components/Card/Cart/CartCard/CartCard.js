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
import { CloseCircleFilled } from '@ant-design/icons';
import { ConfigProvider } from 'antd';
const CartCard = (props) => {
    let cartItems = useContext(CartItemsContext)
    const [size, setSize] = useState(props.item.size[0]);

    const handelQuantityIncrement = (event) => {
        cartItems.quantity(props.item._id, 'INC');
        console.log(props.item._id);
    };

    const handelQuantityDecrement = (event) => {
        if (props.item.itemQuantity > 1) {
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
        <div className='cart__item__card'>
            {/* <ConfigProvider
                theme={{
                    components: {
                        CloseCircleFilled: {
                            colorPrimary: '#E72929',
                            algorithm: true, // Enable algorithm
                        }
                    },
                }}
            > */}

                <div className="cart__item__detail">
                    <div className="cart__item__image">
                        {renderImage()}
                        {/* <img src={`https://localhost:5000/${props.item.image[0].filename}`} width={120} height={80} alt="item" className="item__image"/> */}
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
                        <RemoveCircleIcon fontSize='medium' />
                    </IconButton>
                </div>
                <div className='sum_price'>
                    <p>{local_price}₮</p>
                </div>
                <div className="remove__item__icon">
                    <IconButton className='remove_icon'>
                        <CloseCircleFilled style={{color: "#E72929"}} onClick={handelRemoveItem} />
                    </IconButton>
                </div>

            {/* </ConfigProvider> */}
        </div>
    );
}

export default CartCard;