import React from 'react';
import Hotels from '../components/Hotels';
import "../App.css"
import { hotelsDb } from '../hotels';

const hotel = [...hotelsDb];

const HotelsPage = () => {
    return (
        <div className="hotelsView" style={{width: '100%'}}>
            <Hotels items={hotel} />
        </div>
    );
};

export default HotelsPage;
