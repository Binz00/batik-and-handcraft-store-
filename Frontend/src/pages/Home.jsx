import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import cover from '../assets/images/Background .png';
import silk from'../assets/images/batikGallery/silk.jpg'
import sarees from'../assets/images/batikGallery/sarees.png'
import cotton from'../assets/images/batikGallery/cotton.jpg'
import NewArrivals from'../assets/images/batikGallery/NewArrivals.png'
import men from'../assets/images/batikGallery/men.png'
import laksha from'../assets/images/handcraftgallery/laksha.png'
import RushnReed from'../assets/images/handcraftgallery/RushnReed.png'
import Mask from'../assets/images/handcraftgallery/Mask.png'
import ceramic from'../assets/images/handcraftgallery/ceramic.png'
import brassware from'../assets/images/handcraftgallery/brassware.png'

const LandingPage = () => {
  const navigate = useNavigate(); 

  const handleShopNowClick = () => {
    navigate('/shop'); 
  };

  return (
    <div className="flex flex-col">
      {/* The relative parent for content */}
      <div className="relative flex items-center justify-center h-screen bg-gray-300">
        {/* Background image with object cover */}
        <img src={cover} alt="cover" className="object-cover w-full h-full" />
        {/* Button placed absolutely */}
        <button
          className="absolute px-5 py-2 font-bold text-black bottom-10 opacity-80 rounded-3xl bg-button hover:scale-110"
          onClick={handleShopNowClick} 
        >
          Shop Now
        </button>
      </div>

      {/* Sections for collections */}
      <div id="elegant-collection" className="flex items-center justify-center h-full ">
        <div className="flex flex-col items-center justify-center w-10/12 mx-auto bg-white">
          <h1 className="mt-12 text-4xl font-bold font-Lato">Shop Our Elegant Collection</h1>
          <h1 className="mt-3 text-2xl font-bold text-customcolor opacity-60 font-lemonada">Explore our unique Batik Collection</h1>
          <div className="flex w-10/12 h-full mt-8 mb-8">
            <div className="flex flex-col w-1/3 gap-5 p-5 bg-white">
              <div className="flex items-center justify-center h-2/4 rounded-3xl">
                <Link to="/silk">
                  <img src={silk} alt="Silk Collection" className="object-cover w-full h-full rounded-3xl hover:scale-110" />
                </Link>
              </div>
              <div className="flex items-center justify-center h-3/4 rounded-3xl">
                <Link to="/cotton">
                  <img src={cotton} alt="Cotton Collection" className="object-cover w-full h-full rounded-3xl hover:scale-110" />
                </Link>
              </div>
            </div>

            {/* Center section */}
            <div className="flex items-center justify-center w-1/3 mx-auto pb-13 rounded-3xl">
              <Link to="/saree">
                <img src={sarees} alt="Saree Collection" className="object-cover w-full h-full rounded-3xl hover:scale-110" />
              </Link>
            </div>

            {/* Right-side section */}
            <div className="flex flex-col w-1/3 gap-5 p-5 bg-white">
              <div className="flex items-center justify-center h-2/4 rounded-3xl">
                <Link to="/new">
                  <img src={NewArrivals} alt="New Arrivals" className="object-cover w-full h-full rounded-3xl hover:scale-110" />
                </Link>
              </div>
              <div className="flex items-center justify-center h-3/4 rounded-3xl">
                <Link to="/men">
                  <img src={men} alt="Men Collection" className="object-cover w-full h-full rounded-3xl hover:scale-110" />
                </Link>
              </div> 
            </div>
          </div>
        </div>
      </div>

      {/* Second section */}
      <div className="flex items-center justify-center h-full bg-white">
        <div className="flex flex-col items-center justify-center w-10/12 mx-auto bg-white">
          <h1 className="mt-24 text-4xl font-bold font-Lato">Shop Our Handcraft Gallery</h1>
          <h1 className="mt-3 text-2xl font-bold text-customcolor opacity-60">Discover the Beauty of Artisanal Creations</h1>
          <div className="flex w-10/12 h-full mt-8 mb-8">
            <div className="flex flex-col w-1/3 gap-5 p-5 bg-white">
              <div className="flex items-center justify-center h-2/4 rounded-3xl">
                <Link to="/laksha">
                  <img src={laksha} alt="Laksha Collection" className="object-cover w-full h-full rounded-3xl hover:scale-110" />
                </Link>
              </div>
              <div className="flex items-center justify-center h-3/4 rounded-3xl">
                <Link to="/rush">
                  <img src={RushnReed} alt="Rush & Reed Collection" className="object-cover w-full h-full rounded-3xl hover:scale-110" />
                </Link>
              </div>
            </div>

            {/* Center section */}
            <div className="flex items-center justify-center w-1/3 pb-13 rounded-3xl">
              <Link to="/masks">
                <img src={Mask} alt="Masks Collection" className="object-cover w-full h-full rounded-3xl hover:scale-110" />
              </Link>
            </div>

            {/* Right-side section */}
            <div className="flex flex-col w-1/3 gap-5 p-5 bg-white">
              <div className="flex items-center justify-center h-2/4 rounded-3xl">
                <Link to="/ceramic">
                  <img src={ceramic} alt="Ceramic Collection" className="object-cover w-full h-full rounded-3xl hover:scale-110" />
                </Link>
              </div>
              <div className="flex items-center justify-center h-3/4 rounded-3xl">
                <Link to="/brassware">
                  <img src={brassware} alt="Brassware Collection" className="object-cover w-full h-full rounded-3xl hover:scale-110" />
                </Link>
              </div> 
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
