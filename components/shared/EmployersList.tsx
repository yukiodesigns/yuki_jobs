import Image from 'next/image';
import React from 'react';

const EmployerCardList = () => {
    const employers = [
        {
          image: '/assets/logo.png',
          name: 'Company A',
          location: 'City, Country',
          jobsOpen: 10,
        },
        {
          image: '/icons/accounting.png',
          name: 'Company B',
          location: 'City, Country',
          jobsOpen: 5,
        },
       
      ];
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 container px-4 py-10 mx-auto">
  {employers.map((employer, index) => (
    <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md items-center">
      <Image
        src={employer.image}
        alt={`${employer.name}'s Logo`}
        className="object-cover rounded-full w-12 h-12 mb-3 inline-block"
        width={24}
        height={24}
      />
      <div className="p-2 sm:p-4">
        <h3 className="text-md sm:text-lg font-semibold mb-2">{employer.name}</h3>
        <p className="text-gray-500 mb-2">{employer.location}</p>
        <p className="text-gray-500 mb-4">{`${employer.jobsOpen} Jobs Open`}</p>
      </div>
    </div>
  ))}
</div>

  );
};

export default EmployerCardList;
