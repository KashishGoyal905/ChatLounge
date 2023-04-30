import React from 'react'
import './TopBar.css';
import { Search } from '@mui/icons-material';

export const TopBar = () => {
    return (
        <nav className='topbarContainer'>
            <div className="topbarLeft">
                <span className='title'>ChatLounge</span>
            </div>
            <div className="topbarCenter">
                <div className="searchBar">
                    <Search className='searchIcon' />
                    <input type="text" placeholder='Search for friend, stranger' />
                </div>
            </div>
            <div className="topbarRight">
                <button className='btn'>Login</button>
            </div>
        </nav>
    )
}
