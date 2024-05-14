// AddItemForm.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './orderlist.css';

import ItemCard from "./OrderItemCard";
import ProductCard from "./OrderProductCard";

const AddItemForm = () => {
    const [ringItems, setRingItems] = useState([]);
    const [selectedItem, setSelectedItem] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get("http://localhost:5000/api/order/getOrder")
            .then(res => {
                setRingItems(res.data);
            })
            .catch(err => console.error("Error fetching data:", err));

        const user = localStorage.getItem('user');
        if (!user) navigate("/login");
    }, [navigate]);

    const handleItemClick = (item) => {
        setSelectedItem(item);
    };

    return (
        <div className="orderlist">
            <div className="orderlist_slide">
                <div className="orderlist_slide_header">
                    <div>
                        <p>Захиалгын жагсаалт</p>
                    </div>
                    <div className="shuultuur">
                        <button> Төлөвөөр шүүх</button>
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
                        {ringItems.map((item, index) => (
                            <ItemCard key={index} index={index} item={item} onClick={handleItemClick} />
                        ))}
                    </div>
                </div>
            </div>
            <div className="order_data">
                {selectedItem ? (
                    <ProductCard item={selectedItem} />
                ) : (
                    <p>Захиалгын дэлгэрэнгүй хараахан сонгогдоогүй байна.</p>
                )}
            </div>
        </div>
    );
};

export default AddItemForm;
