import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import reportWebVitals from './reportWebVitals';

// import MainLayout from './component/layouts/main-layout';
// import SubLayout from './component/layouts/sub-layout';

import App from './App';

import Home from './component/home';
import Blog from './component/blog/blog';
import BlogDetail from './component/blog/blog-detail';
import Login from './component/login';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter> 
      <App>
        <Routes>
          <Route exact path='/' element={<Home/>} />
          <Route path='blog' element={<Blog />} />
          <Route path='blog/detail/:id' element={<BlogDetail />} />
          <Route path='login' element={<Login />} />
        </Routes>
      </App>
      
      <Routes>
          {/* <Route element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path='blog' element={<Blog />} />
          </Route>

          <Route element={<SubLayout />}>
            <Route path='login' element={<Login />} />
          </Route> */}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);


reportWebVitals();
