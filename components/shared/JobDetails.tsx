import React from 'react';
import Image from 'next/image';
import { FaMapMarkerAlt, FaRegClock, FaBriefcase } from 'react-icons/fa'; // Import additional icons as needed

const JobDetailsPage = () => {
  // Sample data (replace with actual data)
  const job = {
    title: 'Software Engineer',
    location: 'San Francisco, CA',
    type: 'Full-Time',
    responsibilities: [
      'Develop and maintain software applications.',
      'Collaborate with cross-functional teams.',
      // Add more responsibilities
    ],
    qualifications: [
      'Bachelor’s degree in Computer Science.',
      'Experience with JavaScript, React, Node.js.',
      // Add more qualifications
    ],
    employer: {
      name: 'Tech Company Inc.',
      image: '/assets/employer-logo.png',
      location: 'San Francisco, CA',
    },
  };

  return (
    <div className="relative bg-slate-200">
      {/* Hero Section */}
      <div className="relative h-96 bg-cover bg-center" >
        {/* <div className="absolute inset-0 bg-black opacity-50"></div> */}
        <div className="container mx-auto flex items-center justify-center h-full relative z-10">
          <div className="text-center text-white">
            <h1 className="text-3xl md:text-5xl font-bold mb-2">{job.title}</h1>
            <p className="text-gray-500">{job.location}</p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto p-4 relative z-20">
        {/* Connecting Card */}
        <div className="bg-white p-4 rounded-md shadow-md mb-8 -mt-16">
          <h2 className="text-xl font-bold mb-4">Overview</h2>
          <div className="flex items-center mb-2">
            <FaMapMarkerAlt className="mr-2 text-gray-500" />
            <span>{job.location}</span>
          </div>
          <div className="flex items-center mb-2">
            <FaRegClock className="mr-2 text-gray-500" />
            <span>{job.type}</span>
          </div>
          <div className="flex items-center">
            <FaBriefcase className="mr-2 text-gray-500" />
            <span>{job.title}</span>
          </div>
        </div>

        <div className="mb-8">
        <h1 className="text-3xl md:text-5xl font-bold mb-2">{job.title}</h1>
        <p className="text-gray-500">{job.location}</p>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Section */}
        <div className="mb-8">
          <h2 className="text-xl font-bold mb-4">Job Description</h2>
          <p className="text-gray-700 mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus fringilla nec nisl
            euismod ullamcorper.
          </p>

          <h2 className="text-xl font-bold mb-4">Responsibilities</h2>
          <ul className="list-disc list-inside text-gray-700 mb-4">
            {job.responsibilities.map((responsibility, index) => (
              <li key={index}>{responsibility}</li>
            ))}
          </ul>

          <h2 className="text-xl font-bold mb-4">Qualifications</h2>
          <ul className="list-disc list-inside text-gray-700">
            {job.qualifications.map((qualification, index) => (
              <li key={index}>{qualification}</li>
            ))}
          </ul>
        </div>

        {/* Right Section */}
        <div>
          {/* Overview Card */}
          <div className="bg-white p-4 rounded-md shadow-md mb-8">
            <h2 className="text-xl font-bold mb-4">Overview</h2>
            <div className="flex items-center mb-2">
              <FaMapMarkerAlt className="mr-2 text-gray-500" />
              <span>{job.location}</span>
            </div>
            <div className="flex items-center mb-2">
              <FaRegClock className="mr-2 text-gray-500" />
              <span>{job.type}</span>
            </div>
            <div className="flex items-center">
              <FaBriefcase className="mr-2 text-gray-500" />
              <span>{job.title}</span>
            </div>
          </div>

          {/* Map */}
          {/* Add your map component here */}

          {/* Employer Card */}
          <div className="bg-white p-4 rounded-md shadow-md">
            <h2 className="text-xl font-bold mb-4">About the Employer</h2>
            <div className="flex items-center mb-2">
              <Image
                src={job.employer.image}
                alt={`${job.employer.name}'s Logo`}
                className="w-12 h-12 object-cover rounded-full mr-4"
                width={48}
                height={48}
              />
              <div>
                <h3 className="text-lg font-semibold">{job.employer.name}</h3>
                <p className="text-gray-500">{job.employer.location}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default JobDetailsPage;
