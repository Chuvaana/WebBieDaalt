import './orderproductCart.css';

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const ItemCard = (props) => {

    const { item, onClick, index } = props;
    const formattedDate = new Date(item.createdAt).toLocaleString('en-US', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        hour12: false // Use 24-hour format
    });
    let color = '';

    // Check the delivery status and set the background color accordingly
    if (item.delivery_status === 'Баталгаажсан') {
        color = '#FF6C6C';
    } else if (item.delivery_status === 'Хүргэгдсэн') {
        color = '#4cff4c';
    }
    // const [ringItems, setRingItems] = useState([]);
    // const navigate = useNavigate();
    // useEffect(() => {
    //     axios.get("http://localhost:5000/api/order/getOrder")
    //         .then(res => {
    //             setRingItems(res.data);
    //             // const ringItems = res.data.filter(item => item.category === props.item.deliver_phone);
    //             // setRingItems(ringItems); // Set the filtered items
    //         })
    //         .catch(err => console.error("Error fetching data:", err));

    //     const user = localStorage.getItem('user');
    //     if (!user) navigate("/login");
    // }, [navigate]);

    // console.log(ringItems);
    return (
        <div className="data_body_products_detail">
            <div className="header_product_card">
                <h1>Захиалгын дэлгэрэнгүй</h1>
            </div>
            <div className="body_product_card">
                <div className="order_body_first">
                    <div className="id_prod" >
                        <label>Нийт үнийн дүн</label>
                        <p>
                            {props.item.order_all_price}
                        </p>
                    </div>
                    <div className="code_prod">
                        <label>CODE</label>
                        <p>
                            {props.item._id && props.item._id.substring(20, 24)}
                        </p>
                    </div>
                </div>
                <div className="order_body_two">
                    <div className="ore_21">
                        <label>Дүүрэг</label>
                        <p>
                            {props.item.deliver_loc_District}
                        </p>
                    </div>
                    <div className="ore_22">
                        <label>Хороо</label>
                        <p>
                            {props.item.deliver_loc_Committee}
                        </p>
                    </div>
                </div>
                <div className="order_body_three">
                    <div className="catecore_prod">
                        <label>Email</label>
                        <p>
                            {props.item.deliver_email}
                        </p>
                    </div>
                    <div className="name_proda">
                        <label>Phone Number</label>
                        <p>
                            {props.item.deliver_phone}
                        </p>
                    </div>
                </div>
                <div className="order_body_four">
                    <div className="catecore_proda">
                        <label>Email</label>
                        <p>
                            {props.item.deliver_location}
                        </p>
                    </div>
                    <div className="loly">
                        <label>Төлөв</label>
                        <p>
                        {formattedDate}
                        </p>
                    </div>
                    
                </div>
                <div className="order_body_five">
                <div className="effect_loose" style={{ backgroundColor: color, height: '70%', display: 'flex', alignItems: 'center', borderRadius: '40px' }}>
                        <p>{item.delivery_status}</p>
                    </div>
                    </div>

            </div>
        </div>
    );
}

export default ItemCard;

