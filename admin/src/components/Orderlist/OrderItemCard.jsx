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
    const handleChange = (e) => {
        console.log(props.item._id);
        setName(props.item._id);
        axios.get("http://localhost:5000/api/order")
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
            {props.item._id && props.item._id.substring(20, 24)}
            </p>
            </div>
            <div className="code_prod">
                <p>
                {props.item.product_code}
                </p>
            </div>
            <div className="catecore_prod">
                <p>
                {props.item.deliver_email}
                </p>
            </div>
            <div className="name_prod">
                <p>
                {props.item.deliver_phone}
                </p>
            </div>
            <button ref={fileRef} onClick={handleChange} hidden></button>
        </div>
    );
}

export default ItemCard;

