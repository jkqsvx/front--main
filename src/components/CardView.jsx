import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom'; // Импортируем useNavigate

const CardView = ({description, price, img, id, title}) => {
    const navigate = useNavigate(); // Получа

    // Метод для изменения состояния при клике
    const handleClick = () => {
        navigate(`/detail/${id}`);
    };
    return (
        <div className='Card boxShadow' onClick={handleClick}>
            <img srcSet={img} alt=""/>
            <div className="Card-description">
                <div className="Card-title">{title}</div>
                <div
                    style={{color: 'grey', textAlign: 'center', fontWeight: 'bold', marginBottom: '8px'}}>{price}</div>
                <div className="Card-desc">{description}</div>
            </div>
        </div>
    )
};

export default CardView;
