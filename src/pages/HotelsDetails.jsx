import React from "react";
import Header from "../components/Header";
import {useParams} from "react-router-dom";
import { hotelsDb } from "../hotels";
import SliderDetail from "../components/SliderDetail";
import Footer from "../components/Footer";

const HotelsDetails = () => {
    const {id} = useParams();

    const hotel = [...hotelsDb].find(c => c.id === id);

    return (
        <div>
            <Header/>
            <div className="_container">
                <SliderDetail images={hotel.images} title={hotel.title}/>
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '24px',
                    marginTop: '24px',
                    marginBottom: '32px'
                }}>
                    <div>
                        <div style={{fontSize: '22px', marginBottom: '8px', fontWeight: 'bold'}}>Описание</div>
                        <div>{hotel.description}</div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default HotelsDetails
