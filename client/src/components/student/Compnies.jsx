import React from 'react';

const companies = [
  { name: 'Google', logo: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg' },
  { name: 'Microsoft', logo: 'https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg' },
  { name: 'Amazon', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg' },
  { name: 'Facebook', logo: 'https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png' },
  { name: 'Apple', logo: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg' },
  { name: 'Netflix', logo: 'https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg' }
];

function Companies() {
  return (
    <div className="bg-gradient-to-br from-indigo-50 via-green-50 to-white px-4 md:px-20 text-center">
      <h1 className="text-4xl font-extrabold text-indigo-700 mb-10 animate__animated animate__fadeInDown tracking-tight">
        Trusted by Leading Tech Giants
      </h1>

      <div className="flex flex-wrap justify-center items-center gap-6">
        {companies.map((company, index) => (
          <div
            key={index}
            className="bg-white rounded-xl p-6 w-36 h-36 flex items-center justify-center shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-indigo-100"
          >
            <img
              src={company.logo}
              alt={company.name}
              className="h-12 w-auto object-contain grayscale hover:grayscale-0 transition duration-300"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Companies;
