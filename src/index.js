import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import reportWebVitals from './reportWebVitals';

import App from './App';
import App2 from './App2';
import Home from './component/home';
import Blog from './component/blog/blog';
import BlogDetail from './component/blog/blog-detail';
import Login from './component/member/login';
import Index from './component/member';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>

        {/* Layout có sidebar */}
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="blog" element={<Blog />} />
          <Route path="blog/detail/:id" element={<BlogDetail />} />
        </Route>

        {/* Layout không có sidebar */}
        <Route path="/" element={<App2 />}>
          <Route path="/member/login-register" element={<Index />} />
        </Route>

      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);


reportWebVitals();
