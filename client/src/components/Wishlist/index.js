import { useContext } from 'react';
import { WishItemsContext } from '../../Context/WishItemsContext';
import { Button, ConfigProvider } from 'antd';

import WishCard from '../Card/Wishlist/WishCard';
import './index.css'

const Wishlist = () => {
    const wishItems = useContext(WishItemsContext)
    const handleAddToCart = () => {
        wishItems.items.forEach(async (item) => {
            try {
                console.log(item);
                await wishItems.addToCart(item); // Assuming addToCart function returns a Promise
            } catch (error) {
                console.error('Error adding item to cart:', error);
            }
        });
    };
    
    
    return (
        <div className="wishlist__container">
            <div className="wish_itemsFrame">
                <div className='wish_content_header'>
                    <p>Хүслийн  жагсаалт ( {wishItems.items.length} )</p>
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
                        {/* <Button onClick={handleAddToCart} style={{ height: '46px', paddingLeft: '20px', paddingRight: '20px', fontSize: '16px' }}>Бүгдийг сагсанд нэмэх</Button> */}
                    </ConfigProvider>
                </div>
                <div className="wishlist__items">
                    {wishItems.items.length > 0 ? wishItems.items.map((item) => <WishCard key={item._id} item={item} />) : <>No items</>}
                </div>
            </div>
        </div>
    );
}

export default Wishlist;
