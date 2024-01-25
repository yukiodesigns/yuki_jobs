'use client'
import { useState }from 'react';
import { BsArrowRight } from 'react-icons/bs'; 
import { Button } from '../ui/button';
import Pagination from './Pagination';
import JobCard from './JobCard';
import Link from 'next/link';

const FeaturedJobs: React.FC<{ type: string }> = ({ type }) => {
  const jobsData = [
    {
      id:1,
      title: 'Software Engineer',
      type: 'Full-Time',
      location: 'San Francisco, CA',
      datePosted: '2 days ago',
      image: '/assets/location.png',
    },
    {
      id:2,
      title: 'Graphic Designer',
      type: 'Part-Time',
      location: 'New York, NY',
      datePosted: '5 days ago',
      image: '/assets/location.png',
    },
    {
      id:3,
      title: 'Software Engineer',
      type: 'Full-Time',
      location: 'San Francisco, CA',
      datePosted: '2 days ago',
      image: '/assets/location.png',
    },
    {
      id:4,
      title: 'Graphic Designer',
      type: 'Part-Time',
      location: 'New York, NY',
      datePosted: '5 days ago',
      image: '/assets/location.png',
    },
    {
      id:5,
      title: 'Software Engineer',
      type: 'Full-Time',
      location: 'San Francisco, CA',
      datePosted: '2 days ago',
      image: '/assets/location.png',
    },
    {
      id:6,
      title: 'Graphic Designer',
      type: 'Part-Time',
      location: 'New York, NY',
      datePosted: '5 days ago',
      image: '/assets/location.png',
    },
    {
      id:7,
      title: 'Graphic Designer',
      type: 'Part-Time',
      location: 'New York, NY',
      datePosted: '5 days ago',
      image: '/assets/location.png',
    },
    
  ];
  const itemsPerPage = 10;
  const totalPages = Math.ceil(jobsData.length / itemsPerPage);
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
  };

  const visibleJobs = jobsData.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  return (
    <div className="text-center mt-10 mb-10  text-gray-600 body-font">
      <h2 className="text-3xl font-bold mb-4">Featured Jobs</h2>
      <p className="text-gray-500 mb-6">Explore our featured job opportunities</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 container px-5 py-20 mx-auto">
        {visibleJobs.map((job, index) => (
          <div key={index} >
            <Link href='/jobs/id'>
            <JobCard key={index} job={job}  />
            </Link>
          </div>
        ))}
      </div>

      {type === 'landing' ? (
        <div className="mt-4 md:mt-8">
          <Link href='/jobs'>
          <Button  className="transition duration-300 text-xs md:text-sm inline-flex items-center bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-700 rounded-md text-white">
            View All Jobs
            <span className='ml-2'><BsArrowRight /></span>
          </Button>
          </Link>
        </div>
      ) : (
        <Pagination onPageChange={handlePageChange} currentPage={currentPage} totalPages={totalPages} />
      )}
    </div>
  );
};

export default FeaturedJobs;

