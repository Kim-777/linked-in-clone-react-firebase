import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import '../../style/Header.css';
import HeaderOption from './HeaderOption';
import HomeIcon from '@material-ui/icons/Home';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';


const Header = () => {
    return (
        <div className="header">
            <div className="header__left">
                <img src="/images/linkedin.png" alt="" />
                <div className="header__search">
                    <SearchIcon />
                    <input type="text" />
                </div>
            </div>
            <div className="header__right">
                <HeaderOption Icon={HomeIcon} title="home" />
                <HeaderOption Icon={SupervisorAccountIcon} title="My Network" />
            </div>
        </div>
    )
}

export default Header

