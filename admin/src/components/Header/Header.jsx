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
                                {/* <div className='item'>
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
                                </div> */}
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
