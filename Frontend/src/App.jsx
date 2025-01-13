import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home'; // Your landing page is here
import Login from './pages/Login';
import Register from './pages/Register';
import Footer from './components/Footer';
import SilkCollection from './pages/SilkCollection';
import Contact from './pages/Contact';
import AboutUs from './pages/AboutUs';
import Cotton from './pages/Cotton';
import NewArrivals from './pages/NewArrivals';
import Men from './pages/Men';
import SareeCollection from './pages/SareeCollection';
import Laksha from './pages/Laksha';
import Brassware from './pages/Brassware';
import Masks from './pages/Masks';
import Ceramic from './pages/Ceramic';
import WoodCarving from './pages/WoodCarving';
import Cart from './pages/Cart';
import Shop from './pages/Shop';
import Context from './context/Context';
import { CartProvider } from './context/Context';
import CardDetailsForm from './components/CardDetailsForm';


function App() {
  return (
    <div className='flex flex-col min-h-screen'>
      {/* Navbar should appear at the top across all pages */}
      <Navbar />
      <div className='flex-grow'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register/>} />
          <Route path='/silk' element={<SilkCollection/>} />
          <Route path='/contact' element={<Contact/>} />
          <Route path='/about' element={<AboutUs/>} />
          <Route path='/cotton' element={<Cotton/>} />
          <Route path='/new' element={<NewArrivals/>} />
          <Route path='/saree' element={<SareeCollection/>} />
          <Route path='/men' element={<Men/>} />
          <Route path='/laksha' element={<Laksha/>} />
          <Route path='/brassware' element={<Brassware/>} />
          <Route path='/ceramic' element={<Ceramic/>} />
          <Route path='/masks' element={<Masks/>} />
          <Route path='/rush' element={<WoodCarving/>} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/CardDetails" element={<CardDetailsForm />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
