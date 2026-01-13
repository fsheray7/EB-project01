import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Home from './pages/home/Home.jsx';
import Shop from './pages/shop/ShopPage.jsx';
import Login from './pages/login/Login.jsx';
import Signup from './pages/login/Signup.jsx';
import MainLayout from './layout/MainLayout.jsx';
import ProductPage from './pages/shop/ProductPage.jsx';
import Cart from './pages/shop/CartPage.jsx';
import Checkout from './pages/shop/Checkout.jsx';
import MyProfile from './pages/accountpages/MyAccount.jsx';
import Blogs from './pages/blog/Blogs.jsx';
import BlogDetail from './pages/blog/BlogDetail.jsx';
import Contact from './pages/contact/ContactPage.jsx';



function App() {
  return (


    <>
      <ToastContainer position="top-right" autoClose={3000} />
      <Routes>

        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path='/blog' element={<Blogs />} />
          <Route path='/blog/:slug' element={<BlogDetail />} />
          <Route path='/contact' element={<Contact />} />
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/profile" element={<MyProfile />} />
          <Route path='/address' element={<MyProfile />} />
          <Route path='/payment' element={<MyProfile />} />
          <Route path='/subscription-active' element={<MyProfile />} />
          <Route path='/subscription-paused' element={<MyProfile />} />
          <Route path='/subscription-cancelled' element={<MyProfile />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </>


  )
}

export default App
