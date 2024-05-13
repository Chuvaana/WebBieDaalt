import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button, Slider, ConfigProvider } from 'antd';
import { Checkbox } from 'antd';
import ItemCard from '../Card/ItemCard/ItemCard';
import SaleItemCard from '../Card/SaleItemCard/SaleItemCard';
import './Ring.css';

const CheckboxGroup = Checkbox.Group;
const plainOptions = ['Силк', 'Ноос', 'Ноолуур']; // Add your color options here

const Scarf = () => {
    const [initialRingItems, setInitialRingItems] = useState([]);
    const [ringItems, setRingItems] = useState([]);
    const [minPrice, setMinPrice] = useState(0);
    const [maxPrice, setMaxPrice] = useState(1000000);
    const [checkedColors, setCheckedList] = useState([]);
    // const [checkedColors, setCheckedColors] = useState([]); // New state for checked colors

    useEffect(() => {
        axios.get("http://localhost:5000/api/items")
            .then(res => {
                console.log(res.data);
                // Filter the items where the category is 'ring'
                const ringItems = res.data.filter(item => item.category === 'scarf');
                setInitialRingItems(ringItems);
                setRingItems(ringItems); // Initialize ringItems with all items
            })
            .catch(err => console.error("Error fetching data:", err));

        window.scrollTo(0, 0);
    }, []);

    const filterByPriceRange = () => {
        const filteredItems = initialRingItems.filter(item => {
            let price;
            if (item.sale) {
                // Calculate sale price if sale is true
                price = item.price * (1 - item.saleAmount / 100);
            } else {
                price = item.price;
            }
            return price >= minPrice && price <= maxPrice && (checkedColors.length === 0 || checkedColors.includes(item.color)); // Include color filter
        });
        setRingItems(filteredItems);
    };

    const onChange = (value) => {
        setMinPrice(value[0]);
        setMaxPrice(value[1]);
    };

    const onChangeCheck = (list) => {
        setCheckedList(list);
    };

    const onCheckAllChange = (e) => {
        setCheckedList(e.target.checked ? plainOptions : []);
    };

    const onColorChange = (checkedValues) => {
        setCheckedList(checkedValues);
    };

    return (
        <div className="featured__products__container">
            <div className='price-filter'>
                <ConfigProvider
                    theme={{
                        components: {
                            Button: {
                                colorPrimary: '#DB4444',
                                algorithm: true, // Enable algorithm
                            },
                            Slider: {
                                colorPrimary: '#424242',
                                algorithm: true, // Enable algorithm
                            },
                            Checkbox: {
                                colorPrimary: '#424242',
                                algorithm: true, // Enable algorithm
                            }
                        },
                    }}
                >
                    <form>
                        <div className="form-group">
                            <h4>Үнэ</h4>
                            <div>
                                <Slider
                                    range
                                    step={10}
                                    min={0}
                                    max={1000000}
                                    defaultValue={[0, 1000000]}
                                    onChange={onChange}
                                />
                            </div>
                            <div className='price_slide'>
                                <p>{minPrice}₮</p>
                                <p>{maxPrice}₮</p>
                            </div>

                            <h4>Материал</h4>
                            <Checkbox style={{ fontSize: '16px' }} indeterminate={checkedColors.length > 0 && checkedColors.length < plainOptions.length} onChange={onCheckAllChange} checked={checkedColors.length === plainOptions.length}>
                                Бүгд
                            </Checkbox>
                            <CheckboxGroup style={{ fontSize: '16px' , display: 'flex', flexDirection:'column' }} options={plainOptions} value={checkedColors} onChange={onColorChange} />

                            {/* <h4>Өнгө</h4> 
                            <CheckboxGroup options={plainOptions} value={checkedColors} onChange={onColorChange} /> */}
                        </div>

                        <div className='filter_button'>
                            <Button style={{ height: '46px', paddingLeft: '20px', paddingRight: '20px', fontSize: '16px' }} type="primary" onClick={() => filterByPriceRange()}>Шүүлт хийх</Button>
                        </div>
                    </form>
                </ConfigProvider>
            </div>
            <div className="itemsFrame">
                <div className='date'>
                    <p>Ороолт ( {ringItems.length} )</p>
                </div>

                <div className='cardlist'>
                    {!ringItems.length ? (
                        <h2>Бараа олдсонгүй</h2>
                    ) : (
                        <div className="featured__products__card__container">
                            {ringItems.map((item, index) => (
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

export default Scarf;
