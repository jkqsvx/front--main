import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './pages/About';
import Contacts from './pages/Contacts';
import { Provider } from 'react-redux';
import store from './redux/store';
import Detail from './pages/Detail';
import GuidesData from './api/GuidesData';
import GuidesDetails from './pages/GuidesDetails';
import FormContacts from './pages/FormContacts';
import HotelsData from './api/HotelsData';
import HotelsDetails from './pages/HotelsDetails';
import PriceDetails from './pages/PriceDetails'; 

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path='/' element={<App />} />
          <Route path='/about' element={<About />} />
          <Route path='/contacts' element={<Contacts />} />
          <Route path='/detail/:id' element={<Detail />} />
          <Route path='/guides' element={<GuidesData />} />
          <Route path='/guide/:id' element={<GuidesDetails />} />
          <Route path='/form' element={<FormContacts />} />
          <Route path='/hotels' element={<HotelsData />} />
          <Route path='/hotels/:id' element={<HotelsDetails />} />
          <Route path='/price' element={<PriceDetails />} /> {/* Используйте PriceDetails здесь */}
        </Routes>
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
