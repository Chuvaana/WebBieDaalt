import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './orderlist.css';

// Assuming ItemCard is imported from another file

const AddItemForm = () => {
    // const [ringItems, setRingItems] = useState([]);

    // useEffect(() => {
    //     axios.get("http://localhost:5000/api/items")
    //         .then(res => {
    //             console.log(res.data);
    //             // Filter the items where the category is 'ring'
    //             const ringItems = res.data.filter(item => item.category === 'ring');
    //             setRingItems(ringItems); // Set the filtered items
    //         })
    //         .catch(err => console.error("Error fetching data:", err));

    //     window.scrollTo(0, 0);
    // }, []);

    return (
        <div className="orderlist">
            <div className="orderlist_slide">
                <div className="orderlist_slide_header">
                    <p>Захиалгын жагсаалт</p>

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
                        {/* {ringItems.map((item, index) => (
                    <ItemCard key={index} item={item} category="ring" />
                ))} */}
                    </div>
                </div>
            </div>
            <div className="order_data">

            </div>
        </div>
    );
};

export default AddItemForm;
