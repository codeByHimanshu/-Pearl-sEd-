import React from 'react';

const companies = [
  { name: 'Google', logo: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg' },
  { name: 'Microsoft', logo: 'https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg' },
  { name: 'Amazon', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg' },
  { name: 'Facebook', logo: 'https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png' },
  { name: 'Apple', logo: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg' }
];

function Companies() {
  return (
    <div className="bg-gray-100 py-10 flex flex-col items-center">
      <h1 className="text-3xl font-bold text-gray-800 mb-6 animate__animated animate__fadeInDown">
        The Companies Collaborated With Us
      </h1>
      <div className="flex space-x-6 overflow-x-auto p-4">
        {companies.map((company, index) => (
          <div key={index} className="p-4 bg-white shadow-lg rounded-xl hover:scale-105 transition-transform duration-300 animate__animated animate__zoomIn">
            <img
              src={company.logo}
              alt={company.name}
              className="h-20 w-auto object-contain mx-auto"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Companies;