import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NotFound from './pages/NotFound/NotFound.jsx';
import Today from './pages/Today/Today.jsx';
import Hours from './pages/Hours/Hours.jsx';
import Days from './pages/Days/Days.jsx';
import Home from './pages/Home/Home.jsx';
import { CityProvider } from './contexts/CityContext.jsx';
import { TemperatureUnitProvider } from './contexts/TemperatureUnitContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <CityProvider>
    <TemperatureUnitProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route path="/" element={<Home />} />
            <Route path="/today" element={<Today />} />
            <Route path="/hours" element={<Hours />} />
            <Route path="/days" element={<Days />} />
            <Route path="/today/:cityId" element={<Today />} />
            <Route path="/hours/:cityId" element={<Hours />} />
            <Route path="/days/:cityId" element={<Days />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </TemperatureUnitProvider>
  </CityProvider>
);
