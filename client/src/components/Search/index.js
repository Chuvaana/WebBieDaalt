import { useContext } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SearchContext } from '../../Context/SearchContext';
import './index.css'
import ReactLoading from 'react-loading';
import { TabTitle } from "../../utils/General";
import axios from "axios";
import { useEffect, useState } from "react";


import ItemCard from '../Card/ItemCard/ItemCard';
import SaleItemCard from '../Card/SaleItemCard/SaleItemCard';

const Search = () => {
    const search = useContext(SearchContext)
    const [searchParam, setSearchParam] = useSearchParams()
    const [searchItems, setSearchItems] = useState([]);
    const searchQuery = {
        query: search.searchQuery
    }

    useEffect(() => {
        setSearchParam(searchQuery, { replace: true });
        axios.get("http://localhost:5000/api/items")
            .then(res => {
                // Filter the items where the category is 'ring'
                const searchItems = res.data.filter(item => item.name.toUpperCase().includes(searchQuery.query.toUpperCase()));
                setSearchItems(searchItems); // Set the filtered items
                console.log(res.data);
                console.log(searchItems);
            })
            .catch(err => console.error("Error fetching data:", err));

        window.scrollTo(0, 0);
    }, [searchQuery.query])

    return (
        <div className="search__container">
            <div className="search__container__header">
                {!searchItems.length ? (
                    <h1>Хайлт олдсонгүй "{search.searchQuery}"</h1>
                ) : (
                    <div className="featured__products__card__container">
                        {searchItems.map((item, index) => (
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
    );
}

export default Search;