import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './orderlist.css';
import { useRef } from 'react';

import { Link , useNavigate } from 'react-router-dom';

const ItemCard = (props) => {
    const [ringItems, setRingItems] = useState([]);
    const [name, setName] = useState("");
    const navigate = useNavigate();
    const fileRef = useRef(null);

    const formattedDate = new Date(props.item.createdAt).toLocaleString('en-US', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        hour12: false // Use 24-hour format
    });
    let color = '';

     // Check the delivery status and set the background color accordingly
     if (props.item.delivery_status == 'Баталгаажсан') {
        color = '#FF6C6C';
     } else if(props.item.delivery_status == 'Хүргэгдсэн'){
        color = '#4cff4c';
     }

    const handleChange = (e) => {
        console.log(props.item._id);
        setName(props.item._id);
        console.log(name);
        axios.get("http://localhost:5000/api/order/getOrder")
            .then(res => {
                console.log(res.data);
                // Filter the items where the category is 'ring'
                const ringItems = res.data.filter(item => item._id === name);
                setRingItems(ringItems); // Set the filtered items
                navigate('/orderitemsproduct');
            })
            .catch(err => console.error("Error fetching data:", err));

        window.scrollTo(0, 0);
    };
    
    return (
        <div className="data_body_workers" onClick={() => fileRef.current.click()}>
            <div className="id_prod" >
                <p>
            </p>
            </div>
            <div className="code_prod">
                <p>
            {props.item._id && props.item._id.substring(20, 24)}
                </p>
            </div>
            <div className="catecore_prod">
                <p>
                {formattedDate}
                </p>
            </div>
            <div className="name_prod" style={{backgroundColor: color, height: '70%', display: 'flex', alignItems: 'center', borderRadius: '40px'}}>
                <p>
                {props.item.delivery_status}
                </p>
            </div>
            <button ref={fileRef} onClick={handleChange} hidden></button>
        </div>
    );
}

export default ItemCard;

