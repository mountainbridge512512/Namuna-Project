import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import heroImg from '../assets/a.png';
import team1 from '../assets/team1.jpg';
import team2 from '../assets/team2.jpg';
import team3 from '../assets/team3.jpg';
import team4 from '../assets/team4.jpg';
import team5 from '../assets/team5.jpg';
import missionImg from '../assets/mission.png';
import valueImg from '../assets/values.png';
import impactImg from '../assets/impact.jpg';

const AboutUs = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="pt-20 bg-white text-gray-800">
      {/* Hero Section */}
      <section className="relative w-full h-[60vh] md:h-[80vh] bg-black">
        <img
          src={heroImg}
          alt="About Us Hero Banner"
          className="w-full h-full object-contain object-center bg-white"
        />
      </section>

      {/* Company Intro */}
      <section className="px-6 md:px-20 py-16 grid grid-cols-1 md:grid-cols-2 gap-10 items-start bg-gray-50">
        <div data-aos="fade-right">
          <h2 className="text-3xl md:text-4xl font-bold text-green-500 mb-4">Who We Are</h2>
          <p className="text-gray-700 leading-relaxed text-sm md:text-base">
            Namuna Biomass Pvt. Ltd. is committed to providing sustainable and eco-friendly biomass fuel alternatives.
            With an emphasis on environmental responsibility and quality, we serve industries and households alike.
          </p>
        </div>
        <div data-aos="fade-up" data-aos-duration="1200">
          <img
            src={missionImg}
            alt="Production process"
            className="rounded-xl shadow-md w-full h-auto"
          />
        </div>
      </section>

      {/* Our Team */}
      <section className="py-16 px-6 md:px-20 bg-white">
        <h2 className="text-3xl md:text-4xl font-bold text-green-500 text-center mb-12" data-aos="fade-up">
          Our Team
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
          {[
            { img: team1, name: 'John Doe', role: 'CEO' },
            { img: team2, name: 'Jane Smith', role: 'Operations Head' },
            { img: team3, name: 'Mike Johnson', role: 'Technical Lead' },
            { img: team4, name: 'Emily Davis', role: 'Marketing Head' },
            { img: team5, name: 'Robert Brown', role: 'Finance Manager' },
          ].map((member, idx) => (
            <div
              key={idx}
              className="bg-gray-100 p-6 rounded-xl shadow-md text-center hover:shadow-xl transform transition-transform duration-300 hover:scale-105"
              data-aos="fade-up"
              data-aos-delay={idx * 100}
            >
              <img
                src={member.img}
                alt={member.name}
                className="w-24 h-24 md:w-28 md:h-28 object-cover rounded-full mx-auto mb-4"
              />
              <h4 className="font-semibold text-base md:text-lg">{member.name}</h4>
              <p className="text-sm text-gray-600">{member.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Our Values */}
      <section className="px-6 md:px-20 py-16 grid grid-cols-1 md:grid-cols-2 gap-10 items-start bg-gray-50">
        <div data-aos="fade-right">
          <img
            src={valueImg}
            alt="Our company values"
            className="rounded-xl shadow-md object-contain bg-white w-full h-64 md:h-96"
          />
        </div>
        <div data-aos="fade-left">
          <h2 className="text-3xl md:text-4xl font-bold text-green-500 mb-4">Our Values</h2>
          <p className="text-gray-700 leading-relaxed text-sm md:text-base">
            Integrity, innovation, and sustainability guide everything we do. We strive to make a positive impact through
            ethical business practices and green energy solutions.
          </p>
        </div>
      </section>

      {/* Our Impact */}
      <section className="px-6 md:px-20 py-16 grid grid-cols-1 md:grid-cols-2 gap-10 items-start bg-white">
        <div data-aos="fade-right">
          <h2 className="text-3xl md:text-4xl font-bold text-green-500 mb-4">Our Impact</h2>
          <p className="text-gray-700 leading-relaxed text-sm md:text-base">
            By reducing dependency on fossil fuels, we help mitigate climate change and support rural economies through
            responsible sourcing of biomass.
          </p>
        </div>
        <div data-aos="fade-left">
          <img
            src={impactImg}
            alt="Environmental impact"
            className="rounded-xl shadow-md object-contain bg-white w-full h-64 md:h-96"
          />
        </div>
      </section>

      {/* Marquee Section */}
      <section className="py-6 bg-green-100 overflow-hidden">
        <div className="marquee whitespace-nowrap text-lg sm:text-xl text-green-700 font-semibold px-6">
          <span className="inline-block mx-6">♻️ Empowering Sustainability</span>
          <span className="inline-block mx-6">🌱 Clean Energy Solutions</span>
          <span className="inline-block mx-6">🔥 Eco-Friendly Biomass Fuels</span>
          <span className="inline-block mx-6">🌿 Join the Green Revolution</span>
        </div>
      </section>

      {/* Custom Tailwind Style for Marquee */}
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
        `}
      </style>
    </div>
  );
};

export default AboutUs;
