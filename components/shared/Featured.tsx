import React from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa'; // Example icon, replace with your preferred icon
import { HiOutlineBriefcase } from 'react-icons/hi'; // Example icon, replace with your preferred icon
import { MdAccessTime } from 'react-icons/md'; // Example icon, replace with your preferred icon
import { BsArrowRight } from 'react-icons/bs'; // Example icon, replace with your preferred icon
import Image from 'next/image';
import { Button } from '../ui/button';

const FeaturedJobs = () => {
  const jobsData = [
    {
      title: 'Software Engineer',
      type: 'Full-Time',
      location: 'San Francisco, CA',
      datePosted: '2 days ago',
      image: '/assets/location.png',
    },
    {
      title: 'Graphic Designer',
      type: 'Part-Time',
      location: 'New York, NY',
      datePosted: '5 days ago',
      image: '/assets/location.png',
    },
    {
      title: 'Software Engineer',
      type: 'Full-Time',
      location: 'San Francisco, CA',
      datePosted: '2 days ago',
      image: '/assets/location.png',
    },
    {
      title: 'Graphic Designer',
      type: 'Part-Time',
      location: 'New York, NY',
      datePosted: '5 days ago',
      image: '/assets/location.png',
    },
    {
      title: 'Software Engineer',
      type: 'Full-Time',
      location: 'San Francisco, CA',
      datePosted: '2 days ago',
      image: '/assets/location.png',
    },
    {
      title: 'Graphic Designer',
      type: 'Part-Time',
      location: 'New York, NY',
      datePosted: '5 days ago',
      image: '/assets/location.png',
    },
    
  ];

  return (
    <div className="text-center mt-10 mb-10  text-gray-600 body-font">
      <h2 className="text-3xl font-bold mb-4">Featured Jobs</h2>
      <p className="text-gray-500 mb-6">Explore our featured job opportunities</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 container px-5 py-20 mx-auto">
        {jobsData.map((job, index) => (
          <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md flex items-m-4 flex-wrap">
            <div className=" md:h-32 w-24 h-20 inline-flex items-center justify-center rounded-full bg-green-100 text-green-500 mb-4 ml-4">
              <img src={job.image} alt={`Job Image ${index + 1}`} className="w-24 h-24 md:w-full md:h-full object-cover " />
            </div>
            <div className="p-2 md:p-4">
              <h3 className="text-lg md:text-xl font-semibold mb-2">{job.title}</h3>
              <div className="flex flex-col">
                <div className="flex items-center mb-1 text-xs md:text-sm">
                  <span className="mr-1 md:mr-2">
                    <HiOutlineBriefcase />
                  </span>
                  <span>{job.type}</span>
                </div>
                <div className="flex items-center mb-1 text-xs md:text-sm">
                  <span className="mr-1 md:mr-2">
                    <FaMapMarkerAlt />
                  </span>
                  <span>{job.location}</span>
                </div>
                <div className="flex items-center text-xs md:text-sm">
                  <span className="mr-1 md:mr-2">
                    <MdAccessTime />
                  </span>
                  <span>{`Posted ${job.datePosted}`}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    
      <div className="mt-4 md:mt-8">
        <button className="transition duration-300 text-xs md:text-sm inline-flex items-center bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-700 rounded-md text-white">
          View All Jobs
         <span className='ml-2'><BsArrowRight /></span> 
        </button>
      </div>
    </div>
  );
};

export default FeaturedJobs;
