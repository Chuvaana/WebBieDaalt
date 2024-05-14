// ItemCard.js
import React from 'react';
import './orderlist.css';

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

    return (
        <div className="data_body_workers" onClick={() => onClick(item)}>
            <div className="id_prod">
                <p>{index + 1}</p>
            </div>
            <div className="id_prod">
                <p>{item._id && item._id.substring(20, 24)}</p>
            </div>
            <div className="code_prod">
                <p>{formattedDate}</p>
            </div>
            <div className="name_prod" style={{ backgroundColor: color, height: '70%', display: 'flex', alignItems: 'center', borderRadius: '40px' }}>
                <p>{item.delivery_status}</p>
            </div>
        </div>
    );
};

export default ItemCard;
