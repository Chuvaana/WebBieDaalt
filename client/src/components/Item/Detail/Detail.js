import { useContext, useState, useEffect } from 'react';
import './Detail.css';
import { Button, ConfigProvider } from 'antd';
import { IconButton } from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import AddBoxRoundedIcon from '@mui/icons-material/AddBoxRounded';
import IndeterminateCheckBoxRoundedIcon from '@mui/icons-material/IndeterminateCheckBoxRounded';
import RemoveRoundedIcon from '@mui/icons-material/RemoveRounded';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import { CartItemsContext } from '../../../Context/CartItemsContext';
import { WishItemsContext } from '../../../Context/WishItemsContext';
import Heart from "react-animated-heart";

const Detail = (props) => {
    const [quantity, setQuantity] = useState(1);
    const [size, setSize] = useState(props.item.size[0]);
    const [isWished, setIsWished] = useState(() => {
        // Check if the item is already in the wishlist based on local storage
        return localStorage.getItem(props.item._id) === "true";
    });

    const cartItems = useContext(CartItemsContext)
    const wishItems = useContext(WishItemsContext)

    useEffect(() => {
        // Update isWished state based on local storage
        setIsWished(localStorage.getItem(props.item._id) === "true");
    }, [props.item._id]);

    const handleSizeChange = (event) => {
        setSize(event.target.value);
    };

    const handelQuantityIncrement = (event) => {
        setQuantity((prev) => prev += 1);
    };

    const handelQuantityDecrement = (event) => {
        if (quantity > 1) {
            setQuantity((prev) => prev -= 1);
        }
    };

    const handelAddToCart = () => {
        cartItems.addItem(props.item, quantity, size)
    }

    const handelAddToWish = () => {
        if (isWished) {
            // If already wished, remove from wishlist
            wishItems.removeItem(props.item);
            localStorage.removeItem(props.item._id);
        } else {
            // If not wished, add to wishlist
            wishItems.addItem(props.item);
            localStorage.setItem(props.item._id, true);
        }
        // Toggle the state of isWished
        setIsWished(!isWished);
    }

    return (
        <div className="product__detail__container">
            <div className="product__detail">
                <div className="product__main__detail">
                    <div className="product__name__main">{props.item.name}</div>
                    <div className="product__price__detail">{props.item.price}₮</div>
                    <div className="product__detail__description">{props.item.description}</div>
                </div>
                <form onSubmit={handelAddToCart} className="product__form">
                    <div className="product__quantity__and__size">
                        <div className="product__quantity">
                            <IconButton onClick={handelQuantityDecrement}>
                                <RemoveRoundedIcon style={{height:'30px', width:'30px'}}/>
                            </IconButton>
                            <div type="text" name="quantity" style={{height:'44px', width:'70px', borderLeft:'0.5px solid #424242',borderRight:'0.5px solid #424242'}} className="quantity__input">{quantity}</div>
                            <IconButton style={{backgroundColor:'#db4444', borderRadius:'0'}}onClick={ handelQuantityIncrement}>
                                <AddRoundedIcon style={{height:'30px', width:'30px', margin:'0', color:'white'}} fontSize='medium' />
                            </IconButton>
                        </div>

                        <div className="add__cart__add__wish">
                            <div className="add__cart">
                                <ConfigProvider
                                    theme={{
                                        components: {
                                            Button: {
                                                colorPrimary: '#DB4444',
                                                algorithm: true, // Enable algorithm
                                            }
                                        },
                                    }}
                                >
                                    <Button type='primary' style={{ height: '46px', fontSize: '16px' }} onClick={handelAddToCart}>Сагсанд нэмэх</Button>
                                </ConfigProvider>
                            </div>
                            <div className="add__wish">
                                <Heart isClick={isWished} onClick={handelAddToWish} />
                            </div>
                        </div>
                    </div>
                </form>

            </div>
        </div>
    );
}

export default Detail;
