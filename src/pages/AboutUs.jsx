import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import { FaWhatsapp } from 'react-icons/fa';


import heroImg from '../assets/a.png';
import team1 from '../assets/team1.jpg';
import team2 from '../assets/team2.jpg';
import team3 from '../assets/team3.jpg';
import team4 from '../assets/team4.jpg';
import team5 from '../assets/team5.jpg';
import missionImg from '../assets/mission.png';
import valueImg from '../assets/values.png';
import impactImg from '../assets/impact.jpg';


import whoImg from '../assets/who.png';
import missImg from '../assets/miss.png';
import impImg from '../assets/imp.png';


const AboutUs = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: false });
  }, []);

  return (
    <div className="pt-20 bg-white text-gray-800">
      {/* Hero Section */}
      <section className="relative w-full h-[60vh] md:h-[70vh] bg-black">
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
      Established in 2013, Namuna Biomass Pvt.Ltd is a leading provider of sustainable energy solutions in Nepal. Specializing in biomass energy, we are dedicated to harnessing renewable resources for a cleaner, greener future. Our expertise lies in producing high-quality biomass fuels and advanced equipment supporting industries, businesses and communities in their transition to sustainable energy.
    </p>
  </div>
  <div data-aos="fade-up" data-aos-duration="1200" className="overflow-hidden h-auto md:h-[px] rounded-xl shadow-md bg-white">
    <img
      src={whoImg}
      alt="Production process"
      className="w-full h-full object-cover object-top"
    />
  </div>
</section>





   {/* Our Team */}
<section className="py-16 px-6 md:px-20 bg-white">
  <h2 className="text-3xl md:text-4xl font-bold text-green-500 text-center mb-12" data-aos="fade-up">
    Our Team
  </h2>

  {[
    {
      img: team1,
      name: 'Krishna Bhattarai',
      role: 'Founder & Marketing Manager',
      desc: `At Namuna Biomass Pvt. Ltd., we are proud to lead Nepal toward a cleaner and more sustainable future. Our eco-friendly charcoal briquettes and cook stoves are made from locally sourced agricultural and forest waste—offering a smart alternative to traditional fuels.`,
    },
    {
      img: team2,
      name: 'Baburam Bhattarai',
      role: 'Founder & Chairman',
      desc: `Namuna Biomass was founded with a vision to turn local waste into clean, affordable energy for Nepal. Since 2013, we’ve been committed to reducing reliance on fossil fuels, protecting our forests, and creating opportunities in rural communities. Our products reflect this purpose—simple, sustainable solutions that power homes while preserving nature. Together, we can build a greener, more self-reliant Nepal.`,
    },
    {
      img: team3,
      name: 'Dr. Arjun Bhattarai',
      role: 'Advisor & Founder',
      desc: `We believe real change begins with local solutions. By converting agricultural and forest waste into clean energy, we’re offering Nepal an eco-friendly alternative to traditional fuels. Our journey is a testament to what local solutions can achieve when guided by purpose and responsibility. We are proud to support a greener Nepal—one briquette at a time.`,
    },
    {
      img: team4,
      name: 'Hari Bhattarai',
      role: 'Founder & Production Head',
      desc: `At Namuna Biomass, our focus in production is on quality, consistency, and sustainability. Every briquette and stove we manufacture is the result of careful sourcing, efficient processes, and a deep commitment to eco-friendly practices. We take pride in turning local waste into reliable energy products that serve homes across Nepal while caring for the environment every step of the way.`,
    },
    {
      img: team5,
      name: 'Moti Poudel',
      role: 'Environmental Analyst',
      desc: `Our work goes beyond energy—we’re addressing climate challenges at the grassroots level. By transforming invasive plants and agricultural waste into clean-burning fuel, we help reduce carbon emissions, deforestation, and landfill waste. Our approach supports both environmental health and community well-being, making every product a step toward a more sustainable and resilient Nepal.`,
    },
  ].map((member, idx) => (
    <div
      key={idx}
      className="bg-white shadow-lg rounded-xl p-6 mb-8 flex flex-col md:flex-row items-start gap-6 transition-transform duration-300 hover:scale-[1.02]"
      data-aos="fade-up"
      data-aos-delay={idx * 100}
    >
      <img
        src={member.img}
        alt={member.name}
        className="w-40 h-40 object-cover rounded-xl border"
      />
      <div>
        <h4 className="text-xl font-semibold">{member.name}</h4>
        <p className="text-sm text-gray-600 mb-3">{member.role}</p>
        <p className="text-gray-700 text-sm md:text-base">{member.desc}</p>
      </div>
    </div>
  ))}
</section>



{/* Our Values */}
<section className="px-6 md:px-20 py-16 grid grid-cols-1 md:grid-cols-2 gap-10 items-start bg-gray-50">
  <div data-aos="fade-right">
    <img
      src={missImg}
      alt="Our company values"
      className="rounded-xl shadow-md object-cover bg-white w-full h-64 md:h-96"
    />
  </div>
  <div data-aos="fade-left">
    <h2 className="text-3xl md:text-4xl font-bold text-green-500 mb-4">Our Mission</h2>
    <p className="text-gray-700 leading-relaxed text-sm md:text-base">
      To create a sustainable and eco-friendly environment by providing high-quality biomass products and services that contribute to cleaner energy solutions.We aim to be key player in the renewable energy sector, advancing the use of biomass as a reliable and efficient energy source.
    </p>
  </div>
</section>


      {/* Our Impact */}
<section className="px-6 md:px-20 py-16 grid grid-cols-1 md:grid-cols-2 gap-10 items-start bg-white">
  <div data-aos="fade-right">
    <h2 className="text-3xl md:text-4xl font-bold text-green-500 mb-4">Our Impact</h2>
    <p className="text-gray-700 leading-relaxed text-sm md:text-base">
      Namuna Biomass specializes in sourcing processing and supplying high-quality biomass products, including agricultural waste, wood pellets, and briquettes.Our Cost Effective and eco-friednly solutions support industries like manufacturing, agriculture and energy production.<br />
      <br />
      We also provide expert consulting services to help businesses and communities implement efficient biomass energy systems.Our team ensures customized solutions that align with your sustainability and energy goal.
      <br />
      <br />
      Choose Namuna Biomass for reliable, renewable energy solutions that drive efficiency and reduce envirnmental impact.
    </p>
  </div>
  <div data-aos="fade-left">
    <img
      src={impImg}
      alt="Environmental impact"
      className="rounded-xl shadow-md object-cover bg-white w-full h-64 md:h-96"
    />
  </div>
</section>


     {/* Roadmap - Zigzag Timeline (Updated with tight spacing) */}
<section className="px-6 md:px-20 py-16 bg-white">
  <h2 className="text-3xl md:text-4xl font-bold text-green-500 text-center mb-12" data-aos="fade-up">
    How Charcoal Briquette is made?
  </h2>

  <div className="relative">
    {/* Vertical line in center */}
    <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-green-300 hidden md:block"></div>

    <div className="flex flex-col gap-6">
      {[
        'Collection of Raw Materials',
        'Carbonization(Burning in a Drum)',
        'Charcoal Extraction',
        'Crushing & Mixing',
        'Mixing with Natural Binders',
        'Briquette Pressing',
        'Drying',
        'Packaging & Distribution',
      ].map((step, index) => {
        const isLeft = index % 2 === 0;
        return (
          <div
            key={index}
            className={`relative w-full md:w-1/2 px-6 py-2 ${isLeft ? 'md:ml-0 md:mr-auto text-left' : 'md:ml-auto md:mr-0 text-right'}`}
            data-aos={isLeft ? 'fade-right' : 'fade-left'}
            data-aos-delay={index * 100}
          >
            <div className="bg-green-50 border border-green-400 p-4 rounded-xl shadow-md">
              <h3 className="text-lg font-bold text-green-600">Step {index + 1}</h3>
              <p className="text-gray-700 text-sm md:text-base">{step}</p>
            </div>
            {/* Circle marker */}
            <div className={`absolute top-4 w-4 h-4 bg-green-500 rounded-full border-2 border-white ${isLeft ? '-right-2' : '-left-2'} md:block hidden`}></div>
          </div>
        );
      })}
    </div>
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

        {/* WhatsApp Floating Button */}
    <a
      href="https://wa.me/9779845138406"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-transform duration-300 hover:scale-110"
      aria-label="Chat on WhatsApp"
    >
      <FaWhatsapp size={28} />
    </a>
    </div>
  );
};

export default AboutUs;
