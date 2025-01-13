import React from 'react';
import cover from '../assets/images/contactUs.png';

const Contact = () => {
  return (
    <section className="pb-24 contact" id="contact">
      <div className="container mx-auto">
        {/* Image Poster */}
        <div className="w-full mb-8">
          <img src={cover} alt="Contact Poster" className="w-full h-auto rounded-lg shadow-lg" />
        </div>
        <div className="max-w-3xl mx-auto mb-16 contact-content-wrapper"> 
          <h2 className="py-3 text-4xl font-bold text-center text-white rounded-2xl bg-blue-950 font-Lato head">
            Contact Us
          </h2>
          <form id="basic-form" action="" method="post">
            <div className="flex flex-wrap gap-8 p-10 contact-inner rounded-xl">
              <div className="flex flex-col w-full md:flex-row md:gap-8">
                <div className="flex-1 input-block form-item">
                  <label className="block mb-1 text-lg font-medium text-black capitalize">
                    First name
                  </label>
                  <input
                    type="text"
                    name="first name"
                    required
                    className="w-full h-12 p-3 text-lg text-black transition-all bg-gray-300 border border-gray-300 rounded-lg focus:border-blue-500 hover:border-blue-500"
                  />
                </div>
                <div className="flex-1 input-block form-item">
                  <label className="block mb-1 text-lg font-medium text-black capitalize">
                    Last name
                  </label>
                  <input
                    type="text"
                    name="last name"
                    required
                    className="w-full h-12 p-3 text-lg text-black transition-all bg-gray-300 border border-gray-300 rounded-lg focus:border-blue-500 hover:border-blue-500"
                  />
                </div>
              </div>
              <div className="flex flex-col w-full md:flex-row md:gap-8">
                <div className="flex-1 input-block form-item">
                  <label className="block mb-1 text-lg font-medium text-black capitalize">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="w-full h-12 p-3 text-lg text-black transition-all bg-gray-300 border border-gray-300 rounded-lg focus:border-blue-500 hover:border-blue-500"
                  />
                </div>
                <div className="flex-1 input-block form-item">
                  <label className="block mb-1 text-lg font-medium text-black capitalize">
                    Phone
                  </label>
                  <input
                    type="text"
                    name="phone"
                    required
                    className="w-full h-12 p-3 text-lg text-black transition-all bg-gray-300 border border-gray-300 rounded-lg focus:border-blue-500 hover:border-blue-500"
                  />
                </div>
              </div>
              <div className="w-full textarea form-item">
                <label className="block mb-1 text-lg font-medium text-black capitalize">
                  Your message
                </label>
                <textarea
                  name=""
                  id=""
                  required
                  className="w-full h-48 p-5 text-lg text-black transition-all bg-gray-300 border border-gray-300 rounded-lg focus:border-blue-500 hover:border-blue-500"
                ></textarea>
              </div>
              <div className="w-full submit-btn form-item">
                <button
                  type="submit"
                  value="submit"
                  className="px-6 py-3 text-white rounded-lg bg-blue-950 btn btn-blue hover:scale-110"
                >
                  Send message
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
