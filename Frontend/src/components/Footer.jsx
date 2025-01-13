import React from 'react';
import logo from '../assets/images/Logo.png';
import FootImg from '../assets/images/navIamge.jpg';
import { FaSquareFacebook, FaInstagram, FaWhatsapp, FaPhoneVolume } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { ImLocation } from "react-icons/im";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div 
    className='grid w-full gap-2 px-4 py-8 mx-auto text-white bg-black lg:grid-cols-4 sm:grid-cols-1'
    style={{
      backgroundImage: `url(${FootImg})`, 
      backgroundSize: 'cover',    // Ensures the image covers the entire div
      backgroundPosition: 'center',  // Centers the background image
      backgroundRepeat: 'no-repeat'  // Prevents the background image from repeating
    }}
  >
      <div>
        <img src={logo} alt='logo' className='object-contain h-24 w-60' />
        <p className='text-sm'>Celebrating the Art of Batik<br/> 
          and Handcrafted Elegance. <br/> 
          Discover unique, artisan-made <br/> 
          pieces that blend tradition <br/> 
          and creativity</p>
        <div className='flex justify-between md:w-[35%] my-6 ml-7'>
          <FaSquareFacebook size={20} />
          <FaInstagram size={20} />
          <FaWhatsapp size={20} />
        </div>
      </div>

      <div className='flex footer-columns'>
        <div className="mr-8">
          <h6 className='text-xl font-bold text-white-400'>Quick Links</h6>
          <ul>
            <li className='py-2 mt-5 text-sm'><Link to='/'>Home</Link></li>
            <li className='py-2 text-sm'><Link to='/about'>About Us</Link></li>
            <li className='py-2 text-sm'><Link to='/shop'>shop</Link></li>
          </ul>
        </div>
      </div>

      <div className='flex footer-columns'>
        <div className="mr-10">
          <h6 className='text-xl font-bold text-white-400'>Contact Us</h6>
          <ul>
            <li className='py-2 mt-5 text-md'>
              <span className="inline-block mr-2"><FaPhoneVolume /></span>
              <a href="tel:0777901155">0766356862</a>
            </li>
            <li className='py-5 text-md'>
              <span className="inline-block mr-2"><IoMdMail /></span>
              <a href="mailto:undergraduplift@gmail.com">user1@gmail.com</a>
            </li>
            <li className='py-5 text-md'>
              <span className="inline-block mr-2"><ImLocation /></span>
              <a href="https://maps.app.goo.gl/HVKgPZxhgtJZVEfj9" target="_blank" rel="noopener noreferrer">University of Ruhuna(FOE)</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
