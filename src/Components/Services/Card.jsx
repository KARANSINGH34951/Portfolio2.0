import React from 'react';

const Card = ({ title, description, icon, onClick }) => {
  return (
    <div
      className="bg-light p-6 rounded-lg shadow-md hover:shadow-xl transition-all transform hover:scale-105 cursor-pointer"
      onClick={onClick}
      style={{ transition: 'transform 0.3s ease-in-out' }}
    >
    
      <div className="flex justify-center mb-4">
        {icon}
      </div>

     
      <h3 className="text-xl font-semibold text-center mb-4 text-gray-800">{title}</h3>

     
      <p className="text-gray-600 text-center">{description}</p>
    </div>
  );
};

export default Card;
