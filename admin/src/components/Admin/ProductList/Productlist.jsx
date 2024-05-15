import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import './productlist.css';

// Assuming ItemCard is imported from another file
import ItemCard from './ProductItemCard';
import ProductCa from './ProductReportItem';

const AddItemForm = () => {
    const [ringItems, setRingItems] = useState([]);
    const [selectedItem, setSelectedItem] = useState(null);
    const navigate = useNavigate();
    useEffect(() => {
        const user = localStorage.getItem('user');
    console.log("item");
        if (!user)
            navigate("/login")
    });
    useEffect(() => {
        axios.get("http://localhost:5000/api/items")
            .then(res => {
                console.log(res.data);
                // Filter the items where the category is 'ring'
                const ringItems = res.data.filter(item => item.category === item.category);
                setRingItems(ringItems); // Set the filtered items
            })
            .catch(err => console.error("Error fetching data:", err));

        window.scrollTo(0, 0);
    }, []);

    const handleItemClick = (item) => {
        console.log("item");
        // setSelectedItem(item);
    };

    return (
        <div className="productlist">
            <div className="header_medeell">
                <h1 className="baraa_garchig">Барааны жагсаалт</h1>
                <button className="shuultuur">Ангиллаар шүүх</button>

                <Link to="/addproduct">
                    <button className="product_nemeh">Бараа бүртгэх</button>
                </Link>
            </div>
            <div className="main_body_product">
                <div className="id"><p>№</p></div>
                <div className="code"><p>Код</p></div>
                <div className="categore"><p>Ангилал</p></div>
                <div className="name"><p>Нэр</p></div>
                <div className="in_first_number"><p>Анх ирсэн тоо</p> </div>
                <div className="price"><p>Нэгж үнэ</p></div>
                <div className="dateas"><p>Хугацаа</p></div>
                <div className="residual"><p>Үлдэгдэл</p></div>
            </div>
            <div className="data_body_productsaa">
                {/* Mapping through ringItems and rendering ItemCard for each item */}
                {ringItems.map((item, index) => (
                    <ItemCard key={index} item={item} itemKey={index} category="ring" onClick={handleItemClick}/>
                ))}
            </div>
            <div className="order_data">
                {selectedItem ? (
                    <ProductCa item={selectedItem} />
                ) : (
                    <p>Захиалгын дэлгэрэнгүй хараахан сонгогдоогүй байна.</p>
                )}
            </div>
        </div>
    );
};

export default AddItemForm;
