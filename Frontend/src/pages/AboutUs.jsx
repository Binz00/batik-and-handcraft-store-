import React from 'react';

import coverImage from '../assets/images/coverimage.jpeg'; 
import shopImage from '../assets/images/shopimage.jpeg'; 
import floral from '../assets/images/floral.png'; 

const AboutUs = () => {
  return (
    <div>
     
      <section className="relative h-[110vh] mb-12 overflow-hidden">
        <img
          src={coverImage}
          alt="Shop Cover"
          className="absolute inset-0 object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative flex items-center justify-start h-full p-10">
          <div className="text-left">
            <h1 className="text-5xl font-bold text-white md:text-6xl">About Us</h1>
          </div>
        </div>
      </section>
      <section className="container px-5 py-24 mx-auto">
        <div className="flex flex-col items-center mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl title-font">
            Our Story
          </h2>
          <p className="mb-8 text-lg leading-relaxed ">
            At Liora Batik Shop, we are dedicated to offering a stunning array of batik-inspired clothing for women. With our exclusive store located in Nugegoda, Sri Lanka, and our expanding online presence serving Australia and New Zealand, we invite you to explore our unique collections at www.liora.lk.
            <br />
            Our batik designs are crafted with passion and creativity by our in-house designers. Each piece reflects a blend of traditional techniques and modern aesthetics, brought to life through our distinctive production methods. Our batik collection stands out for its originality and the meticulous care that goes into every design.
            <br />
            In addition to our renowned batik collection, Liora also features a limited-edition linen wear line. Our clothing is size-inclusive and made from exceptional materials sourced from our local factories, where we uphold the highest quality standards. We pride ourselves on using rare and luxurious handloom fabrics, including raw silk, Indian cotton, viscose, linen, and satin silk, to create pieces that are both elegant and durable.
          </p>
        </div>
        <div className="flex justify-center">
          <img
            src={shopImage}
            alt="Shop"
            className="object-cover w-full rounded-lg shadow-lg h-100"
          />
        </div>

        <div className="flex flex-col items-center mt-10 mb-5 text-center">
  <h2 className="py-5 mb-4 text-xl italic font-bold text-gray-900 sm:text-2xl title-font">
    <img
            src={floral}
            alt="Shop"
            className="object-cover w-full h-20 "
          />
           <br />
    Discover the beauty 
     <br />
    of batik and the craftsmanship
     <br />
    of local textiles with Liora,
     <br />
    where tradition meets
     <br />
     sophistication.
    <br />
     <img
            src={floral}
            alt="Shop"
            className="object-cover w-full h-20 mt-10 "
          />
  </h2>
</div>

        
      </section>
    </div>
  );
};

export default AboutUs;
