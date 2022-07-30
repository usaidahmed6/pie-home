import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom';
import './header.css'

const Header = () => {
    const [activeTab, setActiveTab] = useState('home');
    const location = useLocation();
    useEffect(() => {
        if (location.pathname === '/') {
            setActiveTab('home')
        }
        else if (location.pathname === '/add'){
            setActiveTab('AddContact')

        }
        else if (location.pathname === '/about'){
            setActiveTab('About')

        }
    }, [location])
    return (

        <div className="header">
            <p className="logo">contact App</p>
            <div className="header-right">
                <Link to='/'>
                    <p className={`${activeTab === 'home' ? 'active' : ''}`}
                        onClick={() => setActiveTab('home')}>
                        Home
                    </p>
                </Link>

                <Link to='/add'>
                    <p className={`${activeTab === 'AddContact' ? 'active' : ''}`}
                        onClick={() => setActiveTab('AddContact')}>
                        Add Contact
                    </p>
                </Link>

                <Link to='/about'>
                    <p className={`${activeTab === 'About' ? 'active' : ''}`}
                        onClick={() => setActiveTab('About')}>
                        About
                    </p>
                </Link>
            </div>
        </div>
    )
}

export default Header
