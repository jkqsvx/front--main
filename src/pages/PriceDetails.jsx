import React from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";
import './Price.css';


const PriceDetails = () => {
  
  return (
    <div className="card-container">
      <Header/>
      <div className="card">
        <h2>В стоимость входит</h2>
        <ul>
          <li>Трансфер от/до отеля</li>
          <li>Автобус с кондиционером</li>
          <li>Профессиональный гид</li>
          <li>Ужин в отеле</li>
          <li>Страховка во время путешествий</li>
          <li>Проживание в отеле</li>
          <li>Панорамная остановка Учхисар</li>
          <li>Посещение скального города Чавушин</li>
          <li>Посещение Учхисар (крепость)</li>
          <li>Подземный город</li>
  
        </ul>
        <h2 className="price-heading">Цена: 6000$</h2>
        
      </div>
      <div className="card">
        <h2>За дополнительную плату</h2>
        <ul>
          <li>Любые личные расходы</li>
          <li>Напитки</li>
          <li>Обед 1 и 2 день (шведский стол)</li>
          <li>Шоу программа "Ночь в Каппадокии"</li>
          <li>Полёт на воздушном шаре</li>
          <li>Трансфер вида на воздушные шары</li>
          <li>Проживание в одноместном номере</li>
          <li>Проживание в одноместном номере</li>
          <li>Проживание в одноместном номере</li>
          <li>Проживание в одноместном номере</li>
        </ul>
       {/* <div className='price1'> */}
       <h2 className="price-heading">Цена: 6000$</h2>
       {/* </div> */}
      </div>
  
      <Footer/>
    </div>
  );
};

export default PriceDetails;