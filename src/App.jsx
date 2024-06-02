import './App.css';
import "./components/Header"
import Header from './components/Header';
import 'react-bootstrap';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Slider from './components/Slider';
import DataBase from './api/DataBase';
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PriceDetails from './pages/PriceDetails';

function App() {
    return (
        // <Router>
            <div className="App">
                <Header/>
                <Slider/>
                <DataBase/>
                {/*<Comments*/}
                {/*  commentsUrl="http://localhost:3004/comments"*/}
                {/*  currentUserId="1"*/}
                {/*/>*/}
            {/* / <Routes> */}
                    {/* <Route path="/price" element={<PriceDetails />} /> {/* Добавляем маршрут для PriceDetails */}
                {/* </Routes> */} 
                <Footer/>
            </div>
        /* </Router> */
    )
}

export default App;

