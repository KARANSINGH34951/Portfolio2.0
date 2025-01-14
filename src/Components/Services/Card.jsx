const Card = ({ title, description, icon }) => {
  return (
    <div className="group bg-gray-800 rounded-lg shadow-lg hover:shadow-2xl transition duration-500 p-6 flex flex-col items-center text-center">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition duration-300">
        {title}
      </h3>
      <p className="text-gray-400 group-hover:text-gray-200 transition duration-300">
        {description}
      </p>
    </div>
  );
};

export default Card;