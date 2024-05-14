import React, { useState } from 'react';
import './orderproductCart.css';

const ItemCard = (props) => {
    const { item, index } = props;
    const [buttonText, setButtonText] = useState(item.delivery_status);

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
    return (
        <div className="data_body_products_detail">
            <div className="header_product_card">
                <h1>Захиалгын дэлгэрэнгүй</h1>
            </div>
            <div className="body_product_card">
                <div className="order_body_first">
                    <div className="id_prod">
                        <label>Нийт үнийн дүн</label>
                        <p>{item.order_all_price}</p>
                    </div>
                    <div className="code_prod">
                        <label>CODE</label>
                        <p>{item._id && item._id.substring(20, 24)}</p>
                    </div>
                </div>
                <div className="order_body_two">
                    <div className="ore_21">
                        <label>Дүүрэг</label>
                        <p>{item.deliver_loc_District}</p>
                    </div>
                    <div className="ore_22">
                        <label>Хороо</label>
                        <p>{item.deliver_loc_Committee}</p>
                    </div>
                </div>
                <div className="order_body_three">
                    <div className="catecore_prod">
                        <label>Email</label>
                        <p>{item.deliver_email}</p>
                    </div>
                    <div className="name_proda">
                        <label>Phone Number</label>
                        <p>{item.deliver_phone}</p>
                    </div>
                </div>
                <div className="order_body_four">
                    <div className="catecore_proda">
                        <label>Location</label>
                        <p>{item.deliver_location}</p>
                    </div>
                    <div className="loly">
                        <label>Төлөв</label>
                        <p>{formattedDate}</p>
                    </div>
                </div>
                <div className="order_body_five">
                    <div className="effect_loose" style={{ backgroundColor: color, height: '70%', display: 'flex', alignItems: 'center', borderRadius: '40px' }}>
                        <button onClick={handleButtonClick}>{buttonText}</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ItemCard;
