import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import '../../style/Header.css';

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

            </div>
        </div>
    )
}

export default Header
