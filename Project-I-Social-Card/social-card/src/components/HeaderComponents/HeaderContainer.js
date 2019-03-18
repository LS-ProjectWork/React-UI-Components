import React from 'react';
import './Header.css';

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