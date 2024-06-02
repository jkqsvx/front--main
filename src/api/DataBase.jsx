import React from 'react';
import Cards from "../components/Cards";
import "../App.css"
import {db} from "../db";
const flights = [...db];

const DataBase = () => {
    return (
        <div className="cardsView">
            <Cards items={flights}/>
        </div>
    )
}

export default DataBase;
