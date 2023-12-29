import Image from 'next/image'
import React from 'react'

const Statistics = () => {
  return (
    <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-20">
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Find Your Dream Job with Ease</h1>
      <p className="lg:w-2/3 mx-auto leading-relaxed text-base"> Explore a world of exciting career opportunities. Whether you're starting your career journey or looking for the next big step, our platform connects you with the right job opportunities that match your skills and aspirations.</p>
    </div>
    <div className="flex flex-wrap -m-4 text-center">
      <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
        <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
          <Image src="/icons/jobs.png" alt="jobs" width={50} height={50} className="text-green-500 w-12 h-12 mb-3 inline-block" />
          <h2 className="title-font font-medium text-3xl text-gray-900">250K +</h2>
          <p className="leading-relaxed">Jobs available</p>
        </div>
      </div>
      <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
        <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
        <Image src="/icons/users.png" alt="users" width={50} height={50} className="text-green-500 w-12 h-12 mb-3 inline-block" />
          <h2 className="title-font font-medium text-3xl text-gray-900">4M</h2>
          <p className="leading-relaxed">Active Users</p>
        </div>
      </div>
      <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
        <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
          <Image src="/icons/company.png" alt="company" width={50} height={50} className="text-green-500 w-12 h-12 mb-3 inline-block" />
          <h2 className="title-font font-medium text-3xl text-gray-900">74K +</h2>
          <p className="leading-relaxed">Companies</p>
        </div>
      </div>
      <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
        <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
          <Image src="/icons/resume.png" alt="resume" width={50} height={50} className="text-green-500 w-12 h-12 mb-3 inline-block" />
          <h2 className="title-font font-medium text-3xl text-gray-900">460</h2>
          <p className="leading-relaxed">Resumes</p>
        </div>
      </div>
    </div>
  </div>
</section>
  )
}

export default Statistics