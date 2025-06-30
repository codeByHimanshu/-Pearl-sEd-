import React from 'react';

const companies = [
  { name: 'Google', logo: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg', bg: 'bg-[#F8F9FA]' },
  { name: 'Microsoft', logo: 'https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg', bg: 'bg-[#F3F3F3]' },
  { name: 'Amazon', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg', bg: 'bg-[#FCF7E2]' },
  { name: 'Facebook', logo: 'https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png', bg: 'bg-[#F0F4FF]' },
  { name: 'Apple', logo: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg', bg: 'bg-[#F5F5F7]' },
  { name: 'Netflix', logo: 'https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg', bg: 'bg-[#FFF6F6]' }
];

function Companies() {
  return (
    <div className="px-4 md:px-20 text-center py-16 bg-gradient-to-br from-green-50 via-white to-green-100">
      <h1 className="text-4xl md:text-5xl font-extrabold text-indigo-700 mb-4 animate__animated animate__fadeInDown tracking-tight">
        Trusted by Leading Tech Giants
      </h1>
      <p className="text-lg text-gray-600 mb-12 animate__animated animate__fadeInUp">
        Our students are hired by the world’s most innovative companies.
      </p>
      <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
        {companies.map((company, index) => (
          <div
            key={index}
            className={`${company.bg} rounded-2xl p-6 w-36 h-36 flex flex-col items-center justify-center shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-indigo-100 group`}
          >
            <img
              src={company.logo}
              alt={company.name}
              className="h-14 w-auto object-contain grayscale group-hover:grayscale-0 transition duration-300 mb-2"
            />
            <span className="text-sm font-semibold text-gray-700 opacity-70 group-hover:opacity-100 transition">
              {company.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Companies;
