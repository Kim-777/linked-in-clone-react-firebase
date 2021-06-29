import React from 'react';
import '../../style/Header.css';

const Header = () => {
    return (
        <div className="header">
            <h1>Header</h1>
            <div className="header__left">
                <img src="" alt="" />
                <div className="header__search">
                    {/* SearchIcon */}
                    <input type="text" />
                </div>
            </div>
            <div className="header__right">

            </div>
        </div>
    )
}

export default Header
