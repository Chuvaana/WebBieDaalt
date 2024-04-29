import ReactLoading from 'react-loading';
import { TabTitle } from "../../utils/General";
import axios from "axios";
import { useEffect, useState } from "react";
import './Ring.css';
import ItemCard from '../Card/ItemCard/ItemCard';
import SaleItemCard from '../Card/SaleItemCard/SaleItemCard';

const Necklaces = () => {
    TabTitle("Home - Shema");
    const [ringItems, setRingItems] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:5000/api/items")
            .then(res => {
                console.log(res.data);
                // Filter the items where the category is 'ring'
                const ringItems = res.data.filter(item => item.category === 'necklaces');
                setRingItems(ringItems); // Set the filtered items
            })
            .catch(err => console.error("Error fetching data:", err));

        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="featured__products__container">
            <div className="itemsFrame">
                <div className='date'>
                    <p>Хүзүүний зүүлт ( {ringItems.length} )</p>
                </div>
                <div className='cardlist'>
                    {!ringItems.length ? (
                        <ReactLoading type="balls" color='#FFE26E' height={100} width={100} className='m-auto' />
                    ) : (
                        <div className="featured__products__card__container">
                            {ringItems.map((item, index) => (
                                // Conditionally render SaleItemCard or ItemCard based on the 'sale' field
                                item.sale ? (
                                    <SaleItemCard key={index} item={item} category="featured" />
                                ) : (
                                    <ItemCard key={index} item={item} category="featured" />
                                )
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Necklaces;
