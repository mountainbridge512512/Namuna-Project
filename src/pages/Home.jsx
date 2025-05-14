import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import AOS from 'aos';
import 'aos/dist/aos.css';

import heroVideo from '../assets/video.mp4';

import a from '../assets/a.png';
import b from '../assets/b.jpg';
import c from '../assets/c.jpg';
import d from '../assets/d.jpg';
import e from '../assets/e.jpg';

import featured1 from '../assets/featured1.jpg';
import featured2 from '../assets/featured2.jpg';

import brand1 from '../assets/brand1.png';
import brand2 from '../assets/brand2.png';
import brand3 from '../assets/brand3.png';
import brand4 from '../assets/brand4.png';

import icon1 from '../assets/icon1.png';
import icon2 from '../assets/icon2.png';
import icon3 from '../assets/icon3.png';
import icon4 from '../assets/icon4.png';
import icon5 from '../assets/icon5.png';

import cert1 from '../assets/cert1.jpg';
import cert2 from '../assets/cert2.jpg';
import cert3 from '../assets/cert3.jpg';

const images = [a, b, c, d, e];

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="-pt-20">
      {/* Hero Section */}
      <section className="w-full h-screen relative overflow-hidden">
        <video
          src={heroVideo}
          autoPlay
          muted
          loop
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover -z-10"
        />
        <div className="absolute inset-0 bg-black/30 z-0"></div>
      </section>

      {/* Featured Products */}
      <section className="py-16 px-4 md:px-20 bg-white" data-aos="fade-up">
        <h2 className="text-3xl font-bold mb-10 text-center text-green-500">Featured Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {[featured1, featured2].map((img, i) => (
            <div
              key={i}
              className="bg-gray-100 rounded-xl shadow-md p-6 flex flex-col items-center transition duration-300 hover:scale-105 hover:shadow-xl"
            >
              <img src={img} alt={`Product ${i + 1}`} className="w-full max-h-64 object-contain rounded" />
              <h3 className="mt-4 text-xl font-semibold text-center">
                {i === 0 ? 'Namuna Briquettes' : 'Namuna Pellets'}
              </h3>
              <p className="mt-2 text-sm text-center text-gray-600">
                {i === 0
                  ? 'Eco-friendly biomass briquettes perfect for industrial use and reducing emissions.'
                  : 'Clean-burning pellets ideal for households and heating systems.'}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Product Availability Swiper */}
      <section className="py-16 px-4 md:px-20 bg-white" data-aos="fade-up">
        <h2 className="text-3xl font-bold mb-10 text-center text-green-500">Our Products Available At</h2>
        <Swiper
          modules={[Autoplay]}
          spaceBetween={30}
          loop
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          breakpoints={{
            320: { slidesPerView: 2 },
            640: { slidesPerView: 3 },
            768: { slidesPerView: 4 },
            1024: { slidesPerView: 5 },
          }}
          className="w-full max-w-6xl mx-auto"
        >
          {[brand1, brand2, brand3, brand4, brand1, brand2].map((brand, idx) => (
            <SwiperSlide key={idx} className="flex items-center justify-center">
              <img
                src={brand}
                alt={`Brand ${idx + 1}`}
                className="h-20 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-500 ease-in-out"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* Why Namuna Briquettes */}
      <section className="py-16 px-4 md:px-8 lg:px-16 bg-white" data-aos="fade-up">
        <h2 className="text-3xl font-bold mb-12 text-center text-green-500">Why Namuna Briquettes?</h2>
        <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 justify-center">
          {[icon1, icon2, icon3, icon4, icon5].map((icon, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center text-center transform transition-transform duration-300 hover:scale-110"
            >
              <img src={icon} alt={`Reason ${idx + 1}`} className="w-24 h-24 md:w-32 md:h-32 mb-4" />
            </div>
          ))}
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 px-4 md:px-8 lg:px-16 bg-white" data-aos="fade-up">
        <h2 className="text-3xl font-bold mb-12 text-center text-green-500">Our Certification</h2>
        <div className="max-w-6xl mx-auto space-y-10">
          <div className="flex flex-col md:flex-row gap-8">
            {[cert1, cert2].map((cert, idx) => (
              <div
                key={idx}
                className="flex-1 flex items-center justify-center bg-white rounded-lg shadow-md p-4 transition duration-300 transform hover:scale-105 hover:shadow-xl"
              >
                <img
                  src={cert}
                  alt={`Certificate ${idx + 1}`}
                  className="max-h-72 w-full object-contain"
                />
              </div>
            ))}
          </div>
          <div className="flex justify-center">
            <div className="w-full max-w-sm bg-white rounded-lg shadow-md p-4 transition duration-300 transform hover:scale-105 hover:shadow-xl">
              <img src={cert3} alt="Certificate 3" className="max-h-[30rem] w-full object-contain" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
