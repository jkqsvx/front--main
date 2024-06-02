import React from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";
import './Price.css';


const PriceDetails = () => {
  
  return (
    <div className="card-container">
      <Header/>
      <h2 style={{marginBottom: '24px', marginTop: '24px', textAlign: 'center'}}>В стоимость входит</h2>
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
        </ul>
      </div>
      <Footer/>
    </div>
  );
};

export default PriceDetails;