import './ItemCard.css';
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CartItemsContext } from "../../../Context/CartItemsContext";
import { IconButton } from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { WishItemsContext } from '../../../Context/WishItemsContext';

const ItemCard = (props) => {
    const [isHovered, setIsHovered] = useState(false)
    const  cartItemsContext  = useContext(CartItemsContext)
    const wishItemsContext = useContext(WishItemsContext)

    const handleAddToWishList = () => {
        wishItemsContext.addItem(props.item)
    }

    const handleAddToCart = () => {
        cartItemsContext.addItem(props.item, 1)
    }

    return ( 
        <div className="product__card__card">
            <div className="product__card">
                <div className="product__image" 
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                > 
                <div className='saleprecent'>
                    <p>{props.item.saleAmount}</p>                    
                </div>
                <IconButton onClick={handleAddToWishList} sx={ {position: 'absolute', zIndex: 1, right: 0, top:0, margin: '10px',  borderRadius: '20px', width: '50px', height: '50px', /* borderWidth: '3px', borderStyle: 'solid', borderColor: '#FFE26E' */ }  }>
                    <FavoriteBorderIcon sx={{width: '22px', height: '22px', color: 'black'}}/>
                </IconButton>

                    
                    {isHovered? <img src={`https://shema-backend.vercel.app/public/${props.item.category}/${props.item.image[1].filename}`} alt="item" className="product__img"/>: <img src= {`https://shema-backend.vercel.app/public/${props.item.category}/${props.item.image[0].filename}`} alt="item" className="product__img"/> }
                </div>
                <div className="product__card__detail">
                    <div className="product__card_button">
                        <IconButton onClick={handleAddToCart} sx={ {  width: '40px', height: '40px'/*  borderWidth: '3px', borderStyle: 'solid', borderColor: '#FFE26E' */}}>
                            <AddShoppingCartIcon sx={{width: '22px', height: '22px', color: 'black'}}/> 
                        </IconButton >
                        <span>Сагсанд нэмэх</span>
                    </div>
                    
                    <div className="product__name">
                        <Link to={`/item/${props.item.category}/${props.item._id}`}>
                           {props.item.name}
                        </Link>
                    </div>
                    <div className="product__description">
                        <span>{props.item.description}</span>
                    </div>
                    <div className="product__price">
                        <span>${props.item.price}</span>
                    </div>
                    <div className="product__card__action">
                        
                        
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default ItemCard;