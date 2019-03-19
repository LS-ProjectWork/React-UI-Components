import React from 'react';
import './Card.css';
import CardBanner from './CardBanner';
import CardContent from './CardContent';

const CardContainer = () => {
    return (
        <div className='card-container'>
            <CardBanner />
            <CardContent />
            <link href="https://www.reactjs.org"/>
        </div>
    )
}

export default CardContainer