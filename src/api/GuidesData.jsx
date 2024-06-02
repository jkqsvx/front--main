import React from 'react';
import Guides from '../components/Guides';
import { guides } from '../guidesdb';
import "../App.css"

const guide = [...guides];

const GuidesPage = () => {
    return (
        <div className="guidesView" style={{width: '100%'}}>
            <Guides items={guide} />
        </div>
    );
};

export default GuidesPage;
