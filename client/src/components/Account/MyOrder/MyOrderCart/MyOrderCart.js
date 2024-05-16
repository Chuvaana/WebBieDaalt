import React from 'react';
import './MyOrderCart.css'

const MyOrderCart = ({ item }) => {
    const formattedDate = new Date(item.createdAt).toLocaleString('en-US', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        hour12: false // Use 24-hour format
    });

     // Define a variable to hold the background color
     let color = '';

     // Check the delivery status and set the background color accordingly
     if (item.delivery_status == 'Баталгаажсан') {
        color = '#FF6C6C';
     } else if(item.delivery_status == 'Хүргэгдсэн'){
        color = '#4cff4c';
     }
     else if(item.delivery_status == 'Хүргэлтэнд гарсан'){
        color = '#FFF455';
     }

    return (
        <div className='header_myorder_cart'>
            <div className='twenty'>{item._id.substring(20, 24)}</div>
            <div className='twenty'>{item.product ? item.product.map(product => product.name).join(', ') : ''}</div>
            <div className='twenty' style={{backgroundColor: color, height: '70%', display: 'flex', alignItems: 'center', borderRadius: '40px'}}>{item.delivery_status}</div>
            <div className='twenty'>{item.order_all_price}</div>
            <div className='twenty'>{formattedDate}</div>
        </div>
    );
}

export default MyOrderCart;
