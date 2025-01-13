import React from 'react';
import { FaServer, FaDesktop, FaCode, FaEdit, FaPen, FaBlog, FaEnvelope } from 'react-icons/fa';
import Card from './Card'; // Import reusable Card component

const Services = () => {
  return (
    <div className="p-8 bg-black">
      <h2 className="text-3xl text-white font-semibold text-center mb-8">Our Services</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
       
        <Card
          title="Backend Development"
          description="We build robust server-side applications with secure APIs and databases."
          icon={<FaServer className="text-4xl text-blue-500" />}
        />

       
        <Card
          title="Frontend Development"
          description="We create visually stunning and interactive front-end experiences."
          icon={<FaDesktop className="text-4xl text-blue-500" />}
        />

       
        <Card
          title="Full Stack Development"
          description="We handle both front-end and back-end development for your projects."
          icon={<FaCode className="text-4xl text-blue-500" />}
        />

       
        <Card
          title="Editing"
          description="Our professional editing services ensure content is polished and ready for publication."
          icon={<FaEdit className="text-4xl text-blue-500" />}
        />

        <Card
          title="Content Writing"
          description="We provide engaging and SEO-optimized content for websites and blogs."
          icon={<FaPen className="text-4xl text-blue-500" />}
        />

       

       
        <Card
          title="Email Marketing"
          description="We create effective email campaigns to boost engagement and drive sales."
          icon={<FaEnvelope className="text-4xl text-blue-500" />}
        />
      </div>
    </div>
  );
};

export default Services;
