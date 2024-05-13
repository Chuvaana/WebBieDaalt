import SaleItemCard from '../Card/SaleItemCard/SaleItemCard';
import ReactLoading from 'react-loading';
import { TabTitle } from "../../utils/General";
import axios from "axios";
import { Fragment, useEffect, useState } from "react";
import './SaleItems.css';

const SaleItems = () => {
    TabTitle("Home - Shema");
    const [featuredItems, setFeaturedItems] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:5000/api/items")
            .then(res => {
                console.log(res.data);
                // Filter the items where the sale field is true
                const saleItems = res.data.filter(item => item.sale === true);
                setFeaturedItems(saleItems); // Set the filtered items
            })
            .catch(err => console.error("Error fetching data:", err));

        window.scrollTo(0, 0);
    }, []);



    return (
        <div className="sale_featured__products__container">
            <div className="itemsFrame">
                <div className='date'>
                    <p>Хямдралтай барааны жагсаалт ( {featuredItems.length} )</p>
                </div>
                <div className='cardlist'>
                    {!featuredItems.length ? (
                        <ReactLoading type="balls" color='#FFE26E' height={100} width={100} className='m-auto' />
                    ) : (
                        <div className="featured__products__card__container">
                            {featuredItems.map((item, index) => (
                                <SaleItemCard key={index} item={item} category="featured" />
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default SaleItems;
