import ReactLoading from 'react-loading';
import { TabTitle } from "../../utils/General";
import axios from "axios";
import { useEffect, useState } from "react";
import './Ring.css'; // Assuming you have a CSS file named Sunglasses.css
import ItemCard from '../Card/ItemCard/ItemCard';
import SaleItemCard from '../Card/SaleItemCard/SaleItemCard';

const Hats = () => {
    TabTitle("Home - Shema");
    const [sunglassesItems, setSunglassesItems] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        axios.get("http://localhost:5000/api/items")
            .then(res => {
                console.log(res.data);
                // Filter the items where the category is 'sunglasses'
                const sunglassesItems = res.data.filter(item => item.category === 'hat');
                setSunglassesItems(sunglassesItems); // Set the filtered items
                setIsLoading(false); // Update loading state
            })
            .catch(err => {
                console.error("Error fetching data:", err);
                setIsLoading(false); // Update loading state even if there's an error
            });

        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="featured__products__container">
            <div className="itemsFrame">
                <div className='date'>
                    <p>Малгай ( {sunglassesItems.length} )</p>
                </div>
                <div className='cardlist'>
                    {isLoading ? (
                        <ReactLoading type="balls" color='#FFE26E' height={100} width={100} className='m-auto' />
                    ) : (
                        <div className="featured__products__card__container">
                            {sunglassesItems.length === 0 ? (
                                <p>Бараа олдсонгүй.</p>
                            ) : (
                                sunglassesItems.map((item, index) => (
                                    // Conditionally render SaleItemCard or ItemCard based on the 'sale' field
                                    item.sale ? (
                                        <SaleItemCard key={index} item={item} category="featured" />
                                    ) : (
                                        <ItemCard key={index} item={item} category="featured" />
                                    )
                                ))
                            )}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Hats;
