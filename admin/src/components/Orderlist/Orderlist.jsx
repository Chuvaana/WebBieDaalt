import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './orderlist.css';

// Assuming ItemCard is imported from another file
import ItemCard from "./OrderItemCard";
import ProductCard from "./OrderProductCard";

const AddItemForm = () => {
    const [ringItems, setRingItems] = useState([]);
    const [isConditionMet, setIsConditionMet] = useState(true); // Initial condition
    // const condition = true;

    const handleConditionChange = () => {
        setIsConditionMet(!isConditionMet); // Toggle the condition
    };

    useEffect(() => {
        axios.get("http://localhost:5000/api/order/getOrder")
            .then(res => {
                console.log(res.data);
                // Filter the items where the category is 'ring'
                const ringItems = res.data.filter(item => item.deliver_email === item.deliver_email);
                setRingItems(ringItems); // Set the filtered items
            })
            .catch(err => console.error("Error fetching data:", err));

        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="orderlist">
            <div className="orderlist_slide">
                <div className="orderlist_slide_header">
                    <div>
                        <p>Захиалгын жагсаалт</p>
                    </div>
                    <div className="shuultuur">
                        <button > Төлөвөөр шүүх</button>
                    </div>
                </div>
                <div className="orderlist_slide_body">
                    <div className="orderlist_slide_body_header">
                        <p>№</p>
                        <p>Код</p>
                        <p>Хугацаа</p>
                        <p>Төлөв</p>
                    </div>

                    <div className="data_body_productsaa">
                        {/* Mapping through ringItems and rendering ItemCard for each item */}
                        {ringItems.map((item, index) => (
                            <ItemCard key={index} item={item} />
                        ))}
                    </div>
                </div>
            </div>
            {/* <div className="order_data">

                <div className="header_product_card">
                    <h1>Захиалгын дэлгэрэнгүй</h1>
                </div>
                {condition ? (
                    <div>
                        <p>Захиалсан бараа</p>
                        {ringItems.map((item, index) => (
                            <ItemCard key={index} item={item} />
                        ))}
                    </div>
                ) : (
                    <p>No workers found.</p>
                )}
            </div> */}
        </div>
    );
};

export default AddItemForm;
