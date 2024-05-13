import { useEffect, useState } from "react";
import { CartItemsContext } from "./CartItemsContext";

const CartItemsProvider = (props) => {

    const [cartItems, setCartItems] = useState([])
    const [totalAmountOfItems, setTotalAmountOfItems] = useState(0)

    useEffect(() => {
        const storedCartItems = JSON.parse(localStorage.getItem("cartItems"));
        if (storedCartItems) {
            setCartItems(storedCartItems);
        }
    }, []);

    const addToCartHandler = (item, quantity) => {
        const { _id, name, price, image, category, size } = item;
        removeFromCartHandler(item)
        setCartItems((prevItems) => [...prevItems, { _id, name, price, image, category, itemQuantity: quantity, size }])
    }

    const removeFromCartHandler = (item) => {
        setCartItems(cartItems.filter((prevItem) => prevItem._id !== item._id))
    }

    const calculateTotalAmount = (currentCartItems) => {
        let total = 0
        currentCartItems.forEach((item) => {
            total = total + (item.price * item.itemQuantity)
        })

        setTotalAmountOfItems(total)
    }

    const quantityHandler = (itemId, action) => {
        if (action === 'INC') {
            setCartItems(cartItems.map((item) => {
                console.log(item._id);
                if (item._id === itemId) {
                    item.itemQuantity += 1
                }
                return item
            }))
        }
        else {
            setCartItems(cartItems.map((item) => {
                if (item._id === itemId) {
                    item.itemQuantity -= 1
                }
                return item
            }))
        }
    }

    useEffect(() => {
        calculateTotalAmount(cartItems);
        // Save cart items to localStorage whenever it changes
        localStorage.setItem("cartItems", JSON.stringify(cartItems));
    }, [cartItems]);

    const clearCart = () => {
        setCartItems([]);
        setTotalAmountOfItems(0);
        localStorage.removeItem("cartItems"); // Optionally clear from localStorage
    };

    const cartItemCtx = {
        items: cartItems,
        totalAmount: totalAmountOfItems,
        addItem: addToCartHandler,
        removeItem: removeFromCartHandler,
        quantity: quantityHandler,
        clearCart: clearCart, // Include the clearCart function
    };

    return (
        <CartItemsContext.Provider value={cartItemCtx}>
            {props.children}
        </CartItemsContext.Provider>
    );
}

export default CartItemsProvider;