import SaleItemCard from '../../Card/ItemCard/ItemCard';
import ReactLoading from 'react-loading';
import { TabTitle } from "../../../utils/General";
import axios from "axios";
import { Fragment, useEffect, useState } from "react";
import './ViewAll.css';

const ViewAll = () => {
    TabTitle("Home - Shema");
    const [allItems, setAllItems] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:5000/api/items")
            .then(res => {
                console.log(res.data);
                // Filter the items where the sale field is false
                const filteredItems = res.data.filter(item => !item.sale);
                setAllItems(filteredItems); // Set the filtered items
            })
            .catch(err => console.error("Error fetching data:", err));
    
        window.scrollTo(0, 0);
    }, []);
    


    return (
        <div className="featured__products__container">
            <div className="itemsFrame">
                <div className='date'>
                    <p>Бүх барааны жагсаалт ( {allItems.length} )</p>
                </div>
                <div className='cardlist'>
                    {!allItems.length ? (
                        <ReactLoading type="balls" color='#FFE26E' height={100} width={100} className='m-auto' />
                    ) : (
                        <div className="featured__products__card__container">
                            {allItems.map((item, index) => (
                                <SaleItemCard key={index} item={item} category="featured" />
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default ViewAll;
