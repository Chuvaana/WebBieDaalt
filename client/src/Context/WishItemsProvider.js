import { useContext, useState, useEffect } from "react";
import { CartItemsContext } from "./CartItemsContext";
import { WishItemsContext } from "./WishItemsContext";

const WishItemsProvider = (props) => {
    const [wishItems, setWishItems] = useState([]);

    // Load wish items from localStorage when the component mounts
    useEffect(() => {
        const storedWishItems = localStorage.getItem("wishItems");
        if (storedWishItems) {
            setWishItems(JSON.parse(storedWishItems));
        }
    }, []);

    const cartItems = useContext(CartItemsContext);

    const addToCartHandler = (item) => {
        cartItems.addItem(item, 1);
    };

    const addToWishHandler = (item) => {
        const { _id, name, price, image, category, size } = item;
        removeFromWishHandler(item);
        const updatedWishItems = [...wishItems, { _id, name, price, image, category, size, itemQuantity: 1 }];
        setWishItems(updatedWishItems);
        // Store updated wish items in localStorage
        localStorage.setItem("wishItems", JSON.stringify(updatedWishItems));
    };

    const removeFromWishHandler = (item) => {
        const updatedWishItems = wishItems.filter((prevItem) => prevItem._id !== item._id);
        setWishItems(updatedWishItems);
        // Store updated wish items in localStorage
        localStorage.setItem("wishItems", JSON.stringify(updatedWishItems));
    };

    const wishItemsCtx = {
        items: wishItems,
        addItem: addToWishHandler,
        removeItem: removeFromWishHandler,
        addToCart: addToCartHandler
    };

    return ( 
        <WishItemsContext.Provider value={wishItemsCtx}>
            {props.children}
        </WishItemsContext.Provider>
    );
}
 
export default WishItemsProvider;
