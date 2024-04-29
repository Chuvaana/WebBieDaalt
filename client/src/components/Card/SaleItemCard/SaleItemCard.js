import './ItemCard.css';
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CartItemsContext } from "../../../Context/CartItemsContext";
import { IconButton } from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { WishItemsContext } from '../../../Context/WishItemsContext';

const SaleItemCard = (props) => {
    const [isHovered, setIsHovered] = useState(false)
    const cartItemsContext = useContext(CartItemsContext)
    const wishItemsContext = useContext(WishItemsContext)
    const navigate = useNavigate();

    const salePrice = props.item.price;
    const saleAmount = props.item.saleAmount;
    
    const price = salePrice - (salePrice * saleAmount / 100);

    const handleAddToWishList = () => {
        wishItemsContext.addItem(props.item)
    }

    const handleAddToCart = () => {
        cartItemsContext.addItem(props.item, 1)
    }

    const jump = () => {
        navigate(`/item/${props.item.category}/${props.item._id}`);
    }
    
    return (
        <div className="product__card__card">
            <div className="product__card">
                <div className="product__image"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    <div className='saleprecent'>
                        <p>-{props.item.saleAmount}%</p>
                    </div>
                    {/*<IconButton onClick={handleAddToWishList} sx={ {position: 'absolute', zIndex: 1, right: 0, top:0, margin: '10px',  borderRadius: '20px', width: '50px', height: '50px',   }>
                    <FavoriteBorderIcon sx={{width: '22px', height: '22px', color: 'black'}}/>
                 </IconButton> */}

                    <div className='wishlist-icon' onClick={handleAddToWishList}>
                        <svg fill="#000000" height="18px" width="18px" version="1.1" id="Capa_1" viewBox="0 0 471.701 471.701" >
                            <g>
                                <path d="M433.601,67.001c-24.7-24.7-57.4-38.2-92.3-38.2s-67.7,13.6-92.4,38.3l-12.9,12.9l-13.1-13.1
		c-24.7-24.7-57.6-38.4-92.5-38.4c-34.8,0-67.6,13.6-92.2,38.2c-24.7,24.7-38.3,57.5-38.2,92.4c0,34.9,13.7,67.6,38.4,92.3
		l187.8,187.8c2.6,2.6,6.1,4,9.5,4c3.4,0,6.9-1.3,9.5-3.9l188.2-187.5c24.7-24.7,38.3-57.5,38.3-92.4
		C471.801,124.501,458.301,91.701,433.601,67.001z M414.401,232.701l-178.7,178l-178.3-178.3c-19.6-19.6-30.4-45.6-30.4-73.3
		s10.7-53.7,30.3-73.2c19.5-19.5,45.5-30.3,73.1-30.3c27.7,0,53.8,10.8,73.4,30.4l22.6,22.6c5.3,5.3,13.8,5.3,19.1,0l22.4-22.4
		c19.6-19.6,45.7-30.4,73.3-30.4c27.6,0,53.6,10.8,73.2,30.3c19.6,19.6,30.3,45.6,30.3,73.3
		C444.801,187.101,434.001,213.101,414.401,232.701z"/>
                            </g>
                        </svg>
                    </div>
                    {/* {isHovered ? <img src={`https://shema-backend.vercel.app/public/${props.item.category}/${props.item.image[1].filename}`} alt="item" className="product__img" /> : <img src={`https://shema-backend.vercel.app/public/${props.item.category}/${props.item.image[0].filename}`} alt="item" className="product__img" />} */}
                    {isHovered ? <img src={props.item.image[0].path} alt="item" className="product__img" /> : <img src={props.item.image[1].path} alt="item" className="product__img" />}
                </div>
                <div className="product__card__detail">
                    <div className="product__card_button" onClick={handleAddToCart}>
                        {/* <IconButton onClick={handleAddToCart} sx={ {  width: '40px', height: '40px'}}>
                            <AddShoppingCartIcon sx={{width: '22px', height: '22px', color: 'black'}}/> 
                        </IconButton > */}
                        <div className='cart-icon' >
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