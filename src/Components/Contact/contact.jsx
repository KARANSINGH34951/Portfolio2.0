import React, { useState } from 'react';
import img from '../../assets/contactimg.png'

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');
  };

  return (
    <div className="p-8 bg-black text-white min-h-screen flex items-center">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 w-full max-w-5xl mx-auto">
        
        <div className="flex items-center justify-center">
          <img
            src={img}
            alt="Contact Us"
            className="rounded-lg shadow-lg max-w-full h-auto"
          />
        </div>

        
        <div>
          <h2 className="text-4xl font-extrabold text-center mb-8 underline decoration-blue-500">
            Contact Me
          </h2>

          <form
            className="bg-gray-800 p-6 rounded-lg shadow-lg"
            onSubmit={handleSubmit}
          >
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-bold mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full p-3 rounded-lg bg-gray-900 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-bold mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-3 rounded-lg bg-gray-900 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="message" className="block text-sm font-bold mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full p-3 rounded-lg bg-gray-900 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows="4"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full p-3 bg-blue-500 text-white font-bold rounded-lg hover:bg-blue-600 transition duration-300"
            >
              Send Message
            </button>

            {status && (
              <p className="mt-4 text-center text-sm text-gray-400">{status}</p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
