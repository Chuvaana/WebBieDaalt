import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './worklist.css';
import { Link } from 'react-router-dom';
import ItemCard from './workItemCard';

const AddItemForm = () => {
    const [workers, setWorkers] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        axios.get("http://localhost:5000/api/worker")
            .then(res => {
                console.log(res.data);
                setWorkers(res.data);
            })
            .catch(err => console.error("Error fetching data:", err));
    }, []);

    // Function to handle search input change
    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
    };

    // Filter workers based on search query
    const filteredWorkers = workers.filter(worker => {
        const fullName = `${worker.deliver_ovog} ${worker.deliver_name}`;
        return fullName.toLowerCase().includes(searchQuery.toLowerCase());
    });

    return (
        <div className="productlist">
            <div className="header_medeell_work">
                <h1 className="baraa_garchig">Хүргэлтийн ажилтан</h1>
                {/* Search input */}
                <input 
                    type='text' 
                    className="search_worker" 
                    placeholder="Хайлт" 
                    value={searchQuery} 
                    onChange={handleSearchChange} 
                />
            </div>
            <div className="main_body_product">
                <div className="id"><p>№</p></div>
                <div className="code"><p>Овог</p></div>
                <div className="categore"><p>Нэр</p></div>
                <div className="name"><p>РД</p></div>
                <div className="in_first_number"><p>Утас</p> </div>
                <div className="in_first_number"><p>Емайл</p> </div>
                <div className="price"><p>Гэрийн хаяг</p></div>
                <div className="dateas"><p>Ажилд орсон огноо</p></div>
                <div className="residual"><p>Төлөв</p></div>
            </div>
            <div className="data_body_productsaa">
                {/* Mapping through filtered workers and rendering ItemCard for each worker */}
                {filteredWorkers.length > 0 ? (
                    filteredWorkers.map((worker, index) => (
                        <ItemCard key={worker._id} item={worker} category="worker" />
                    ))
                ) : (
                    <p>No workers found.</p>
                )}
            </div>
            <div className="footer_button">
                <Link to="/addworker">
                    <button className="worker_add_btn">Ажилтан нэмэх</button>
                </Link>
            </div>
        </div>
    );
};

export default AddItemForm;
