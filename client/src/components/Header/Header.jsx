import React from 'react';
import { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import Badge from '@mui/material/Badge';
import SearchIcon from '@mui/icons-material/Search';

import { WishItemsContext } from '../../Context/WishItemsContext';
import { CartItemsContext } from '../../Context/CartItemsContext';
import { SearchContext } from '../../Context/SearchContext';

import logo from './logo.jpg';
import Navbar from './Navbar';
import './Header.css';

function Header() {
    const wishItems = useContext(WishItemsContext);
    const cartItems = useContext(CartItemsContext);
    const searchContext = useContext(SearchContext)
    const [profileVisible, setProfileVisible] = useState(false);
    const [ searchInput, setSearchInput] = useState('')
    const navigate = useNavigate()

    const toggleProfileVisibility = () => {
        setProfileVisible(!profileVisible);
    };

    const handleClickOutsideProfile = (event) => {
        if (!event.target.closest('.profile')) {
            setProfileVisible(false);
        }
    };

    const handelChange = (e) => {
        setSearchInput(e.target.value)
    }

    const handelFormSubmit = (e) => {  
        e.preventDefault()
        searchContext.setSearchQuery(searchInput)
        navigate('/search')
    }

    return (
        <>
            <div className="header">
                <div className='container-header'>
                    <div className='menu'>
                        <div className='container-header-h1'>
                            <a href="/">
                                <img src={logo} className='logo' ></img>
                            </a>
                        </div>

                        <Navbar />
                    </div>
                    <div className='container-header-items'>
                        <div className='search-form' >
                            <form className="search__form" onSubmit={handelFormSubmit}>
                                <input type="text" placeholder='Бараа хайх' className="search__form__input" value={searchInput} onChange={handelChange} required />
                                <button className="search-button" type='submit'>
                                    <SearchIcon fontSize='medium' />
                                </button>
                            </form>
                        </div>

                        <div className='wishlist-icon-header'>
                            <Link to="/wishlist">
                                <Badge badgeContent={wishItems.items.length} color="error">
                                    <svg fill="#000000" height="24px" width="24px" version="1.1" id="Capa_1"
                                        viewBox="0 0 471.701 471.701" >
                                        <g>
                                            <path d="M433.601,67.001c-24.7-24.7-57.4-38.2-92.3-38.2s-67.7,13.6-92.4,38.3l-12.9,12.9l-13.1-13.1c-24.7-24.7-57.6-38.4-92.5-38.4c-34.8,0-67.6,13.6-92.2,38.2c-24.7,24.7-38.3,57.5-38.2,92.4c0,34.9,13.7,67.6,38.4,92.3l187.8,187.8c2.6,2.6,6.1,4,9.5,4c3.4,0,6.9-1.3,9.5-3.9l188.2-187.5c24.7-24.7,38.3-57.5,38.3-92.4C471.801,124.501,458.301,91.701,433.601,67.001z M414.401,232.701l-178.7,178l-178.3-178.3c-19.6-19.6-30.4-45.6-30.4-73.3s10.7-53.7,30.3-73.2c19.5-19.5,45.5-30.3,73.1-30.3c27.7,0,53.8,10.8,73.4,30.4l22.6,22.6c5.3,5.3,13.8,5.3,19.1,0l22.4-22.4c19.6-19.6,45.7-30.4,73.3-30.4c27.6,0,53.6,10.8,73.2,30.3c19.6,19.6,30.3,45.6,30.3,73.3C444.801,187.101,434.001,213.101,414.401,232.701z" />
                                        </g>
                                    </svg>
                                </Badge>
                            </Link>
                        </div>

                        <div className='cart-icon'>
                            <Link to="/cart">
                                <Badge badgeContent={cartItems.items.length} color="error">
                                    <svg
                                        viewBox="0 0 1024 1024"
                                        fill="currentColor"
                                        height="24px"
                                        width="24px"
                                    >
                                        <path d="M922.9 701.9H327.4l29.9-60.9 496.8-.9c16.8 0 31.2-12 34.2-28.6l68.8-385.1c1.8-10.1-.9-20.5-7.5-28.4a34.99 34.99 0 00-26.6-12.5l-632-2.1-5.4-25.4c-3.4-16.2-18-28-34.6-28H96.5a35.3 35.3 0 100 70.6h125.9L246 312.8l58.1 281.3-74.8 122.1a34.96 34.96 0 00-3 36.8c6 11.9 18.1 19.4 31.5 19.4h62.8a102.43 102.43 0 00-20.6 61.7c0 56.6 46 102.6 102.6 102.6s102.6-46 102.6-102.6c0-22.3-7.4-44-20.6-61.7h161.1a102.43 102.43 0 00-20.6 61.7c0 56.6 46 102.6 102.6 102.6s102.6-46 102.6-102.6c0-22.3-7.4-44-20.6-61.7H923c19.4 0 35.3-15.8 35.3-35.3a35.42 35.42 0 00-35.4-35.2zM305.7 253l575.8 1.9-56.4 315.8-452.3.8L305.7 253zm96.9 612.7c-17.4 0-31.6-14.2-31.6-31.6 0-17.4 14.2-31.6 31.6-31.6s31.6 14.2 31.6 31.6a31.6 31.6 0 01-31.6 31.6zm325.1 0c-17.4 0-31.6-14.2-31.6-31.6 0-17.4 14.2-31.6 31.6-31.6s31.6 14.2 31.6 31.6a31.6 31.6 0 01-31.6 31.6z" />
                                    </svg>
                                </Badge>
                            </Link>
                        </div>

                        <button onClick={toggleProfileVisibility} className='account-icon'>
                            <svg
                                fill="none"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                viewBox="0 0 24 24"
                                height="24px"
                                width="24px"

                            >
                                <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
                                <path d="M16 7 A4 4 0 0 1 12 11 A4 4 0 0 1 8 7 A4 4 0 0 1 16 7 z" />
                            </svg>
                        </button>

                        {profileVisible && (
                            <div className='profile' onClick={handleClickOutsideProfile}>
                                <div className='item'>
                                    <div className='pro_item_icon'>
                                        <svg fill="#fff" width="25px" height="25px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12,11A5,5,0,1,0,7,6,5.006,5.006,0,0,0,12,11Zm0-8A3,3,0,1,1,9,6,3,3,0,0,1,12,3ZM3,22V18a5.006,5.006,0,0,1,5-5h8a5.006,5.006,0,0,1,5,5v4a1,1,0,0,1-2,0V18a3,3,0,0,0-3-3H8a3,3,0,0,0-3,3v4a1,1,0,0,1-2,0Z" /></svg>
                                    </div>
                                    <a href='/account/me'>Профайл засварлах</a>
                                </div>
                                <div className='item'>
                                    <div className='pro_item_icon'>
                                        <svg width="25px" height="25px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#fff">

                                            <g id="SVGRepo_bgCarrier" stroke-width="0" />

                                            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" />

                                            <g id="SVGRepo_iconCarrier"> <path d="M15 11C15 12.6569 13.6569 14 12 14C10.3431 14 9 12.6569 9 11M20 7L18 3H6L4 7M20 7H4M20 7V18C20 19.1046 19.1046 20 18 20H6C4.89543 20 4 19.1046 4 18V7" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" /> </g>

                                        </svg>
                                    </div>
                                    <a href='/myorder'>Миний захиалгууд</a>
                                </div>
                                <div className='item'>
                                    <div className='pro_item_icon'>
                                        <svg width="25px" height="25px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#fff">

                                            <g id="SVGRepo_bgCarrier" stroke-width="0" />

                                            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" />

                                            <g id="SVGRepo_iconCarrier"> <path d="M15 12L2 12M2 12L5.5 9M2 12L5.5 15" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" /> <path d="M9.00195 7C9.01406 4.82497 9.11051 3.64706 9.87889 2.87868C10.7576 2 12.1718 2 15.0002 2L16.0002 2C18.8286 2 20.2429 2 21.1215 2.87868C22.0002 3.75736 22.0002 5.17157 22.0002 8L22.0002 16C22.0002 18.8284 22.0002 20.2426 21.1215 21.1213C20.3531 21.8897 19.1752 21.9862 17 21.9983M9.00195 17C9.01406 19.175 9.11051 20.3529 9.87889 21.1213C10.5202 21.7626 11.4467 21.9359 13 21.9827" stroke="#fff" stroke-width="1.5" stroke-linecap="round" /> </g>

                                        </svg>
                                    </div>
                                    <a href='/account/login'>Гарах</a>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>

        </>
    )
}

export default Header
