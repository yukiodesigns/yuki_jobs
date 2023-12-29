import Image from 'next/image'
import React from 'react'

const HowItWorks = () => {
  return (
    <section className="text-gray-600 body-font bg-slate-100">
    <div className="container px-5 py-24 mx-auto">
      <div className="flex flex-col text-center w-full mb-10">
        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">How It Works</h1>
        <p className="lg:w-2/3 mx-auto leading-relaxed text-base"> Streamline your hiring process with strategic channels to reach qualified candidates</p>
      </div>
      <div className="flex flex-wrap -m-4 text-center justify-between">
        <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
          <div className="px-4 py-6 rounded-lg">
            <Image src="/icons/jobs.png" alt="jobs" width={50} height={50} className="text-green-500 w-12 h-12 mb-3 inline-block" />
            <h2 className="title-font font-medium text-3xl text-gray-900 mb-4">Post A Job</h2>
            <p className="leading-relaxed">As an employer you can post any job vacancies in your company for people to apply to.</p>
          </div>
        </div>
        <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
          <div className="px-4 py-6 rounded-lg">
          <Image src="/icons/users.png" alt="users" width={50} height={50} className="text-green-500 w-12 h-12 mb-3 inline-block" />
            <h2 className="title-font font-medium text-3xl text-gray-900 mb-4">Find Employers</h2>
            <p className="leading-relaxed">Employers spend an average of 30 seconds scanning resumes to identify potential matches.</p>
          </div>
        </div>
        <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
          <div className=" px-4 py-6 rounded-lg">
            <Image src="/icons/company.png" alt="company" width={50} height={50} className="text-green-500 w-12 h-12 mb-3 inline-block" />
            <h2 className="title-font font-medium text-3xl text-gray-900 mb-4">Help Every Step of the Way</h2>
            <p className="leading-relaxed">Our career advice section is full of information to help you identify the right fit.</p>
          </div>
        </div>
       
      </div>
    </div>
  </section>
  )
}

export default HowItWorks