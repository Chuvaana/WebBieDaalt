import { useContext } from 'react';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { IconButton } from '@mui/material';
import './WishCard.css'
import { Button, ConfigProvider } from 'antd';
import { WishItemsContext } from '../../../Context/WishItemsContext';
import { CloseCircleFilled } from '@ant-design/icons';

const WishCard = (props) => {

    const wishItems = useContext(WishItemsContext)

    const handelRemoveItem = () => {
        wishItems.removeItem(props.item)
    }

    const handelAddToCart = () => {
        wishItems.addToCart(props.item)
    };

    return (
        <div className="wishcard">
            <div className="wish__remove__item__icon">
                <IconButton>
                    <CloseCircleFilled style={{ color: "#E72929" }} onClick={handelRemoveItem} />
                </IconButton>
            </div>
            <div className="wish__item__image">
                <img src={props.item.image[0].path} alt="item" className="wish__image" />
            </div>
            <div className="wish__item__name">{props.item.name}</div>
            <div className="wish__item__price">{props.item.price}₮</div>
            <div className="add__to__cart">
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
                    <Button type="primary" style={{ height: '36px'}} onClick={handelAddToCart} >Сагсанд нэмэх</Button>
                </ConfigProvider>
            </div>
        </div>
    );
}

export default WishCard;