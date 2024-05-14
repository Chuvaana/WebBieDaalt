import React, { Fragment, useEffect, useState } from 'react';
import axios from 'axios';
import { Table } from 'antd';
import MyOrderCart from './MyOrderCart/MyOrderCart';
import './MyOrder.css';

const MyOrder = () => {
    const [orderlist, setOrderlist] = useState([]);

    const userString = localStorage.getItem('user');
    let userObject;
    try {
        userObject = JSON.parse(userString);
    } catch (error) {
        console.error('Error parsing user data:', error);
        userObject = {}; // Set an empty object as default
    }

    const phoneNumber = userObject && userObject.phoneNumber ? userObject.phoneNumber : '';

    useEffect(() => {
        axios.get("http://localhost:5000/api/order/getOrder")
            .then(res => {
                if (phoneNumber) {
                    const filteredOrders = res.data.filter(item => item.deliver_phone == phoneNumber);
                    setOrderlist(filteredOrders);
                } else {
                    console.error("Phone number is not defined.");
                }
            })
            .catch(err => console.error("Error fetching data:", err));

        window.scrollTo(0, 0);
    }, [phoneNumber]); // Add phoneNumber as a dependency

    return (
        <div className='myorder_list_frame'>
            <div className='header_myorder'>
                <div className='twenty'>ДУГААР</div>
                <div className='twenty'>БҮТЭЭГДЭХҮҮН</div>
                <div className='twenty'>ТӨЛӨВ</div>
                <div className='twenty'>НИЙТ ҮНЭ</div>
                <div className='twenty'>ОГНОО</div>
            </div>
            <div className='body_myorder'>
                {orderlist.map((item, index) => (
                    <MyOrderCart key={index} item={item} />
                ))}
            </div>
        </div>
    );
};

export default MyOrder;
