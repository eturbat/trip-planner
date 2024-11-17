import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import "./styles.css"

export default function SubNavBar() {
    const [show, setShow] = useState(true);
    const showClass = show ? `d-flex text-center` : `d-none`;

    const getWindowSize = () => (window.innerWidth <= 768) ? setShow(false) : setShow(true);

    useEffect(() => {
        window.addEventListener('resize', getWindowSize);
        getWindowSize();
    }, []);

    return (
        <header className='header'>
            <nav className='container d-flex align-items-center justify-content-center py-3 nav'>
                <NavLink to='/' className='mobile-nav'>
                    <img src='/images/logo.png' alt='Cocos' height='36' />
                </NavLink>
                <div className={`menu ${showClass}`}>
                    <NavLink to='/Flights' exact>
                        Flights
                    </NavLink>
                    <NavLink to='/Restaurants'>
                        Restaurants
                    </NavLink>
                    <NavLink to='/'>
                        Restaurant
                    </NavLink>
                    <NavLink to='/Hotels'>
                        Hotels
                    </NavLink>
                </div>
                <div className='mobile-nav' onClick={() => setShow(!show)}>
                    <button className='navbar-toggle'>
                        <span className='icon-bar'></span>
                        <span className='icon-bar'></span>
                        <span className='icon-bar'></span>
                    </button>
                </div>
            </nav>
        </header>
    )
}
