import { useContext, useState} from 'react';
import { CartItemsContext } from '../../../Context/CartItemsContext';

import { useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';
import axios from 'axios';
import CartCard from './CartCard/CartCard';
import './Cart.css';

const Cart = () => {
    const [openCheckoutModal, setOpenCheckoutModal] = useState(false);
    const cartItems = useContext(CartItemsContext);
    const navigate = useNavigate();
    const handleCheckout = async () => {
        navigate("/delivery_form");
        // if (cartItems.totalAmount > 0) {
        //     const config = {
        //         reason: 'checkout',
        //         amount: cartItems.totalAmount
        //     };

        //     try {
        //         const res = await axios.post("http://localhost:5000/api/payment", config);
        //         console.log(res.data);
        //         window.location.replace(res.data);
        //         setOpenCheckoutModal(true);
        //     } catch (err) {
        //         console.error(err);
        //     }
        // }

    };

    return (
        <div className='cart_body'>
            <div className="cart__header">
                <div className="cart_header_in_head">
                    <div className="product_name_img">Бараа</div>
                    <div className="product_price">Үнэ</div>
                    <div className="product_number">Тоо</div>
                    <div className="product_number">Нийт үнэ</div>
                </div>
                <div className="cart__items__container">
                    <div className="cartItems">
                        {cartItems.items.length === 0 ? (
                            <div className="cart__empty">Empty cart!</div>
                        ) : (
                            <div className="shop__cart__items">
                                {cartItems.items.map((item) => (
                                    <CartCard key={item._id} item={item} />
                                ))}
                            </div>
                        )}
                        {cartItems.items.length > 0 && (
                            <div className="options">
                                <div className="tootsoo">Тооцоо</div>

                                <div className="total__amount">
                                    <div className="total__amount__label">Барааны нийт үнэ:</div>
                                    <div className="total__amount__value">{cartItems.totalAmount}.00₮</div>
                                </div>
                                <div className="total__amount">
                                    <div className="total__amount__label">Хүргэлт:</div>
                                    <div className="total__amount__value">8000.00₮</div>
                                </div>
                                <div className="total__amount">
                                    <div className="total__amount__label">Нийт төлөх дүн:</div>
                                    <div className="total__amount__value">{cartItems.totalAmount + 8000}.00₮</div>
                                </div>
                                <div className="checkout">
                                    <button onClick={handleCheckout}>Төлбөр төлөх</button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;
