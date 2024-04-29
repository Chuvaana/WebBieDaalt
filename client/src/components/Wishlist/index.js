// import { useContext } from 'react';
// import { WishItemsContext } from '../../Context/WishItemsContext';
// import WishCard from '../Card/Wishlist/WishCard';
// import './index.css'

// const Wishlist = () => {
//     const wishItems = useContext(WishItemsContext)

//     return ( 
//         <div className="wishlist">
//             <div className="wishlist__container">
//                 <div className="wishlist__header"><h2>Your Wishlist</h2></div>
//                 <div className="wishlist__items__container">
//                     <div className="wishlist__items">   
//                     {wishItems.items.length>0? wishItems.items.map((item) => <WishCard key={item._id} item={item}/>) : <>No items</>}
//                     </div>
//                 </div>
//             </div>
//         </div>
//      );
// }

// export default Wishlist;

import { useContext } from 'react';
import { WishItemsContext } from '../../Context/WishItemsContext';
import WishCard from '../Card/Wishlist/WishCard';
import './index.css'

const Wishlist = () => {
    const wishItems = useContext(WishItemsContext)


    return (
        <div className="featured__products__container">
            <div className="itemsFrame">
                <div className='date'>
                    <p>Хүслийн  жагсаалт ( {wishItems.items.length} )</p>
                </div>
                <div className="wishlist__items">
                    {wishItems.items.length > 0 ? wishItems.items.map((item) => <WishCard key={item._id} item={item} />) : <>No items</>}
                </div>
            </div>
        </div>
    );
}

export default Wishlist;
