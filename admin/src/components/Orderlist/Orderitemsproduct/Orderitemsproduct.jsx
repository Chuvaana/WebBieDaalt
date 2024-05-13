// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import './orderlist.css';
// import { useRef } from 'react';

// import { Link , useNavigate } from 'react-router-dom';

const ItemCard = (props) => {
    
    return (
        <div className="data_body_workers">
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
        </div>
    );
}

export default ItemCard;

