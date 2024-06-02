import React from "react";
import Header from "../components/Header";
import {useParams} from "react-router-dom";
import {db} from "../db";
import SliderDetail from "../components/SliderDetail";
import Footer from "../components/Footer";

const Detail = () => {
    const {id} = useParams(); // Извлекаем параметр id из URL

    const flight = [...db].find(c => c.id === id);

    return (
        <div>
            <Header/>
            <div className="_container">
                <SliderDetail images={flight.images} title={flight.title}/>
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '24px',
                    marginTop: '24px',
                    marginBottom: '32px'
                }}>
                    <div>
                        <div style={{fontSize: '22px', marginBottom: '8px', fontWeight: 'bold'}}>Описание</div>
                        <div>{flight.description}</div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Detail
