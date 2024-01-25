import React from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { HiOutlineBriefcase } from 'react-icons/hi';
import { MdAccessTime } from 'react-icons/md';
import { BsArrowRight } from 'react-icons/bs';
import Image from 'next/image';
import Link from 'next/link';

interface JobCardProps {
  job: {
    title: string;
    type: string;
    location: string;
    datePosted: string;
    image: string;
  };
}


const JobCard: React.FC<JobCardProps> = ({ job }) => {
  return (
    <div className={`bg-white rounded-lg overflow-hidden shadow-md flex items-m-4 flex-wrap`}>
      <div className={` md:h-32 w-24 h-20 inline-flex items-center justify-center rounded-full bg-green-100 text-green-500 mb-4 ml-4`}>
        <img src={job.image} alt={`Job Image`} className={`w-24 h-24 md:w-full md:h-full object-cover `} />
      </div>
      <div className="p-2 md:p-4">
        <Link href={`/jobs/id`}>
        <h3 className={`text-lg md:text-xl font-semibold mb-2 `}>{job.title}</h3>
        </Link>
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
  );
};

export default JobCard;
