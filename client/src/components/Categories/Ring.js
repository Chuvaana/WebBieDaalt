import ReactLoading from 'react-loading';
import { TabTitle } from "../../utils/General";
import axios from "axios";
import { useEffect, useState } from "react";
import './Ring.css';
import ItemCard from '../Card/ItemCard/ItemCard';
import SaleItemCard from '../Card/SaleItemCard/SaleItemCard';
import { Slider, Switch } from 'antd';

const Ring = () => {
    TabTitle("Home - Shema");
    const [ringItems, setRingItems] = useState([]);
    const [minPrice, setMinPrice] = useState('');
    const [maxPrice, setMaxPrice] = useState('');

    useEffect(() => {
        axios.get("http://localhost:5000/api/items")
            .then(res => {
                console.log(res.data);
                // Filter the items where the category is 'ring'
                const ringItems = res.data.filter(item => item.category === 'ring');
                setRingItems(ringItems); // Set the filtered items
            })
            .catch(err => console.error("Error fetching data:", err));

        window.scrollTo(0, 0);
    }, []);

    const filterByPriceRange = () => {
        const min = parseInt(minPrice);
        const max = parseInt(maxPrice);
        const filteredItems = ringItems.filter(item => {
            const price = parseInt(item.price); // Assuming item.price contains the price
            return (isNaN(min) || price >= min) && (isNaN(max) || price <= max);
        });
        setRingItems(filteredItems);
    };

    const [rangeValue, setRangeValue] = useState(500000); // Initial value for the range input

    const handleRangeChange = (event) => {
        setRangeValue(event.target.value); // Update the state with the new value
    };
    return (
        <div className="featured__products__container">
            <div className='price-filter'>
            <Slider defaultValue={30} />
                <form>
                    <div className="form-group">
                        <div>
                            <label htmlFor="minPrice">Дээд үнэ:</label><br />
                            <input type="range" className="form-range" id="tempB" min="100000"
                                max="1000000" name="temp" list="values" value={rangeValue} // Bind the value to the state
                                onChange={handleRangeChange} />
                             
                            <datalist id="values">
                                <option value="100000" label="100'000₮"></option>
                                <option value="1000000" label="1'000'000₮"></option>
                            </datalist>
                            <p>Value: {rangeValue}</p> {/* Display the current value */}
                        </div>
                    </div>
                    <button type="button" onClick={filterByPriceRange}>Шүүлт хийх</button>
                </form>
            </div>
            <div className="itemsFrame">
                <div className='date'>
                    <p>Бөгж ( {ringItems.length} )</p>
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

export default Ring;
