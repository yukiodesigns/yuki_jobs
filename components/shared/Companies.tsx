import { Image } from 'lucide-react';
import React from 'react';

const Companies = () => {
  const companyLogos = [
    '/icons/ember.png',
    '/icons/disney.png',
    '/icons/fedex.png',
    '/icons/google.png',
    '/icons/lyft.png',
    '/icons/netflix.png',
    '/icons/oracle.png',
  ];

  return (
    <div className="text-center  border-t-2">
      <h2 className="text-3xl font-bold mb-10 mt-10">Our Partners</h2>
      <div className="flex overflow-x-auto p-4 justify-center border-b-2">
        {companyLogos.map((logo, index) => (
          <div
            key={index}
            className="w-1/2  md:w-1/4 lg:w-1/4 lg:mx-12 mx-2 p-2 md:p-4 transition duration-300 flex items-center mb-2"
          >
            <img
              src={logo}
              alt={`Company Logo ${index + 1}`}
              className="w-full h-full object-contain "
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Companies;
