import './SaleItemCard.css';
import { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { CartItemsContext } from "../../../Context/CartItemsContext";
import { IconButton } from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { WishItemsContext } from '../../../Context/WishItemsContext';
import Heart from "react-animated-heart";

const SaleItemCard = (props) => {
    const cartItemsContext = useContext(CartItemsContext);
    const wishItemsContext = useContext(WishItemsContext);
    const navigate = useNavigate();
    const salePrice = props.item.price;
    const saleAmount = props.item.saleAmount;
    
    const [isClick, setClick] = useState(false);

    const price = salePrice - (salePrice * saleAmount / 100);

    const handleAddToWishList = () => {
        if (isClick) {
            // If already in wishlist, remove it
            wishItemsContext.removeItem(props.item);
            // Remove item from localStorage
            localStorage.removeItem(props.item._id);
        } else {
            // If not in wishlist, add it
            wishItemsContext.addItem(props.item);
            // Add item to localStorage
            localStorage.setItem(props.item._id, true);
        }
        // Toggle the click state
        setClick(!isClick);
    }

    const handleAddToCart = () => {
        cartItemsContext.addItem(props.item, 1);
    }

    const jump = () => {
        navigate(`/item/${props.item.category}/${props.item._id}`);
    }

    // Load heart click state from localStorage on component mount
    useEffect(() => {
        const heartClickState = localStorage.getItem(props.item._id);
        if (heartClickState === 'true') {
            setClick(true);
        }
    }, [props.item._id]);

    const renderImage = () => {
        if (props.item.image && props.item.image.length > 0) {
            console.log(props.item.image[0].path);
            return <img
                style={{ width: 245, height: 342 }}
                src={props.item.image[0].path}
                alt=""
            />;
        }
    }


    return (
        <div className="product__card__card">
            <div className="product__card">
                <div className="product__image">
                    <div className='saleprecent'>
                        <p>-{props.item.saleAmount}%</p>
                    </div>
                    <div className='wishlist-icon' onClick={handleAddToWishList}>
                        <Heart isClick={isClick} onClick={() => setClick(!isClick)} />
                    </div>
                    {renderImage()}
                </div>
                <div className="product__card__detail">
                    <div className="product__card_button" onClick={handleAddToCart}>
                        <div className='cart-icon'>
                            <svg
                                viewBox="0 0 1024 1024"
                                fill="currentColor"
                                height="24px"
                                width="24px"
                            >
                                <path d="M922.9 701.9H327.4l29.9-60.9 496.8-.9c16.8 0 31.2-12 34.2-28.6l68.8-385.1c1.8-10.1-.9-20.5-7.5-28.4a34.99 34.99 0 00-26.6-12.5l-632-2.1-5.4-25.4c-3.4-16.2-18-28-34.6-28H96.5a35.3 35.3 0 100 70.6h125.9L246 312.8l58.1 281.3-74.8 122.1a34.96 34.96 0 00-3 36.8c6 11.9 18.1 19.4 31.5 19.4h62.8a102.43 102.43 0 00-20.6 61.7c0 56.6 46 102.6 102.6 102.6s102.6-46 102.6-102.6c0-22.3-7.4-44-20.6-61.7h161.1a102.43 102.43 0 00-20.6 61.7c0 56.6 46 102.6 102.6 102.6s102.6-46 102.6-102.6c0-22.3-7.4-44-20.6-61.7H923c19.4 0 35.3-15.8 35.3-35.3a35.42 35.42 0 00-35.4-35.2zM305.7 253l575.8 1.9-56.4 315.8-452.3.8L305.7 253zm96.9 612.7c-17.4 0-31.6-14.2-31.6-31.6 0-17.4 14.2-31.6 31.6-31.6s31.6 14.2 31.6 31.6a31.6 31.6 0 01-31.6 31.6zm325.1 0c-17.4 0-31.6-14.2-31.6-31.6 0-17.4 14.2-31.6 31.6-31.6s31.6 14.2 31.6 31.6a31.6 31.6 0 01-31.6 31.6z" />
                            </svg>
                        </div>
                        <span>Сагсанд нэмэх</span>
                    </div>

                    <div className="product__name" onClick={jump}>
                        {props.item.name}
                    </div>
                    <div className="product__price">
                        <span className='strline'>{props.item.price}₮</span>
                        <span className='gray'>{price}₮</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SaleItemCard;
