import React from 'react';
import './Header.css';
import ImageThumbnail from './components/HeaderComponents/ImageThumbnail';
import HeaderTitle from './components/HeaderComponents/HeaderTitle';
import HeaderContent from './components/HeaderComponents/HeaderContent';

const HeaderContainer = () => {
    return (
        <div className="social-card">
            <ImageThumbnail />;
            <HeaderTitle />;
            <HeaderContent />;
        </div>
    )
}

export default HeaderContainer;