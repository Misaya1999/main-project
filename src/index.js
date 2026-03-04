import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import MainLayout from './component/layouts/main-layout';
import SubLayout from './component/layouts/sub-layout';
import Home from './component/home';
import Blog from './component/blog';
import Login from './component/login';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter> 
      <Routes>
          {/* Layout có sidebar */}
          <Route element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="blog" element={<Blog />} />
          </Route>

          {/* Layout không sidebar */}
          <Route element={<SubLayout />}>
            <Route path="login" element={<Login />} />
          </Route>

      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);


reportWebVitals();
