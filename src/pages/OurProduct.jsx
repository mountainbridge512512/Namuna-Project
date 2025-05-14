import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { motion } from 'framer-motion';

import charcoalImg from '../assets/charcoal.jpg';
import charcoal1 from '../assets/charcoal1.jpg';
import biomassImg from '../assets/wood.jpg';
import biomass1 from '../assets/wood1.jpg';
import icon1 from '../assets/icon1.png';
import icon2 from '../assets/icon2.png';
import icon3 from '../assets/icon3.png';
import icon4 from '../assets/icon4.png';
import icon5 from '../assets/icon5.png';
import brand1 from '../assets/brand1.png';
import brand2 from '../assets/brand2.png';
import brand3 from '../assets/brand3.png';
import brand4 from '../assets/brand4.png';

const OurProduct = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const [charcoalPreview, setCharcoalPreview] = useState(charcoalImg);
  const [biomassPreview, setBiomassPreview] = useState(biomassImg);

  return (
    <div className="pt-20 bg-white text-gray-800">
      
      {/* Hero Section */}
      <section className="w-full py-20 bg-green-50 text-center px-4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-green-700 mb-4">
          "Save Energy-Save Money-Save Planet"
        </h1>
        <p className="text-gray-700 mb-10 text-base sm:text-lg">
          We offer clean, high-performance, and reliable fuel alternatives.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 px-2 md:px-20">
          {[
            { icon: '🌱', title: 'Sustainable' },
            { icon: '🔥', title: 'High Heat' },
            { icon: '♻️', title: 'Zero Waste' },
            { icon: '📦', title: 'Bulk Delivery' }
          ].map((item, idx) => (
            <motion.div
              key={idx}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + idx * 0.2 }}
            >
              <motion.div
                className="text-4xl"
                animate={{ y: [0, -8, 0] }}
                transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut', delay: idx * 0.2 }}
              >
                {item.icon}
              </motion.div>
              <h3 className="mt-4 text-lg font-semibold text-green-700">{item.title}</h3>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Product 1 - Charcoal */}
      <section className="px-4 md:px-20 py-16 grid md:grid-cols-2 gap-10">
        <div className="flex flex-col justify-center" data-aos="fade-right">
          <div className="w-full max-w-md mx-auto">
            <img
              src={charcoalPreview}
              alt="Charcoal Briquettes"
              className="rounded-xl shadow-md w-full h-auto"
            />
          </div>
          <div className="flex gap-4 mt-4 justify-center">
            {[charcoalImg, charcoal1].map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt={`Charcoal angle ${idx + 1}`}
                className={`w-16 h-16 sm:w-20 sm:h-20 object-cover rounded-md border-2 cursor-pointer ${
                  charcoalPreview === img ? 'border-green-600' : 'border-gray-300'
                }`}
                onClick={() => setCharcoalPreview(img)}
              />
            ))}
          </div>
        </div>
        <div className="flex flex-col justify-center" data-aos="fade-left">
          <h2 className="text-2xl md:text-3xl font-bold text-green-500 mb-4">Charcoal Briquettes</h2>
          <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
            Our charcoal briquettes are made from 100% organic waste and deliver high heat with low ash content.
            Perfect for grilling, heating, and industrial use.
          </p>
        </div>
      </section>

      {/* Product 2 - Biomass */}
      <section className="px-4 md:px-20 py-16 grid md:grid-cols-2 gap-10 bg-gray-50">
        <div className="flex flex-col justify-center" data-aos="fade-right">
          <h2 className="text-2xl md:text-3xl font-bold text-green-500 mb-4">Biomass Pellets</h2>
          <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
            Our biomass pellets are compact, efficient, and made for clean combustion. Ideal for biomass stoves and boilers.
          </p>
        </div>
        <div className="flex flex-col justify-center" data-aos="fade-left">
          <div className="w-full max-w-md mx-auto">
            <img
              src={biomassPreview}
              alt="Biomass Pellets"
              className="rounded-xl shadow-md w-full h-auto"
            />
          </div>
          <div className="flex gap-4 mt-4 justify-center">
            {[biomassImg, biomass1].map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt={`Pellet angle ${idx + 1}`}
                className={`w-16 h-16 sm:w-20 sm:h-20 object-cover rounded-md border-2 cursor-pointer ${
                  biomassPreview === img ? 'border-green-600' : 'border-gray-300'
                }`}
                onClick={() => setBiomassPreview(img)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Brand Carousel */}
      <section className="py-16 px-4 md:px-20 text-center bg-white">
        <h2 className="text-3xl font-bold text-green-500 mb-12">Our Brand Partners</h2>
        <div className="relative overflow-hidden w-full max-w-7xl mx-auto">
          <motion.div
            className="flex gap-20 w-max"
            animate={{ x: ['0%', '-50%'] }}
            transition={{
              repeat: Infinity,
              duration: 20,
              ease: 'linear',
            }}
          >
            {[...Array(2)].flatMap(() =>
              [brand1, brand2, brand3, brand4].map((logo, idx) => (
                <div key={idx + Math.random()} className="w-28 md:w-36 h-20 md:h-28 flex items-center justify-center">
                  <img src={logo} alt={`Brand ${idx + 1}`} className="w-full h-full object-contain" />
                </div>
              ))
            )}
          </motion.div>
        </div>
      </section>

      {/* Why Namuna Briquettes */}
      <section className="py-16 px-4 md:px-20 text-center">
        <h2 className="text-3xl font-bold text-green-500 mb-12">Why Namuna Briquettes</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 justify-items-center">
          {[icon1, icon2, icon3, icon4, icon5].map((icon, idx) => (
            <motion.div
              key={idx}
              className="flex flex-col items-center space-y-3 cursor-pointer"
              data-aos="fade-up"
              data-aos-delay={idx * 100}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
            >
              <img
                src={icon}
                alt={`Icon ${idx + 1}`}
                className="w-20 sm:w-24 md:w-28 h-auto object-contain"
              />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Marquee */}
      <section className="py-6 bg-green-100 overflow-hidden">
        <div className="marquee whitespace-nowrap text-base sm:text-lg md:text-xl text-green-700 font-semibold px-6">
          <span className="inline-block mx-6">♻️ Sustainable Energy</span>
          <span className="inline-block mx-6">🔥 High Heat Low Ash</span>
          <span className="inline-block mx-6">🌿 100% Eco-Friendly Fuel</span>
          <span className="inline-block mx-6">🏭 For Industry and Home</span>
        </div>
      </section>

      <style>
        {`
          .marquee {
            display: inline-block;
            animation: scroll-left 20s linear infinite;
          }
          @keyframes scroll-left {
            0% { transform: translateX(100%); }
            100% { transform: translateX(-100%); }
          }
          .scrollbar-hide::-webkit-scrollbar {
            display: none;
          }
        `}
      </style>
    </div>
  );
};

export default OurProduct;
