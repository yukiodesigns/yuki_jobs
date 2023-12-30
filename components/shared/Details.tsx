import React from 'react'
import { FaCheck, FaCheckCircle } from 'react-icons/fa';

const Details = () => {
  
    return (
        <div className="flex flex-col lg:flex-row items-center lg:items-start lg:justify-center max-w-screen-xl mx-auto p-8">
        {/* Image on the left */}
        <div className="lg:w-1/3 mb-8 lg:mb-0">
          <img
            src="/assets/h31.png"
            alt="Image Description"
            className="w-full h-auto rounded-lg"
          />
        </div>
  
        {/* Text content on the right */}
        <div className="lg:w-2/3 lg:ml-8">
          <h2 className="text-3xl font-bold mb-4">Get the job that's right for you</h2>
          <p className="text-lg mb-4">
          Search millions of jobs and get the inside scoop on companies with employee reviews, personalized salary tools, and more.
          </p>
          
          <ul className="list-none mb-4 pl-6">
            <li className="flex items-center mb-2">
                <FaCheck className="text-green-500 mr-2" />
                <span>Access to millions of job seekers</span>
            </li>
            <li className="flex items-center mb-2">
                <FaCheck className="text-green-500 mr-2" />
                <span>Post unlimited jobs for free—all from one place</span>
            </li>
            <li className="flex items-center">
                <FaCheck  className="text-green-500 mr-2" />
                <span>Premium job placement on SimplyHired, Indeed, & over 100 job sites</span>
            </li>
          </ul>
  
          <p className="text-lg">
          Job Searching Just Got Easy. Use Yuki jobs to run a hiring site and earn money in the process!
          </p>
        </div>
      </div>
    );
    
}
  

export default Details