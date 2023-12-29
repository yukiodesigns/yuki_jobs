import React from 'react'
import { Button } from '../ui/button'
import Image from 'next/image'

const Content = () => {
  return (
    <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap w-full mb-20 items-center">
      <div className="sm:w-1/2 w-full sm:pr-4 mb-2 sm:mb-0 text-left">
        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Popular Categories</h1>
        <p className="lg:w-3/4 w-full leading-relaxed text-gray-500">Find the right industry for your career.</p>
      </div>
      <div className="sm:w-1/2 w-full sm:pl-4 text-center">
        <Button className="inline-flex items-center bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-700 rounded-full text-white">All Categories </Button>
      </div>
    </div>

    <div className="flex flex-wrap -m-4">
      <div className="xl:w-1/3 md:w-1/2 p-4">
        <div className="border border-gray-200 p-6 rounded-lg">
          <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-green-100 text-green-500 mb-4">
            <Image src="/icons/marketing.png" alt="marketing" width={50} height={50} className="text-green-500 w-6 h-6  inline-block"/>
          </div>
          <h2 className="text-lg text-gray-900 font-medium title-font mb-2">Marketing</h2>
          <p className="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waist co, subway tile poke farm.</p>
        </div>
      </div>

      <div className="xl:w-1/3 md:w-1/2 p-4">
        <div className="border border-gray-200 p-6 rounded-lg">
          <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-green-100 text-green-500 mb-4">
            <Image src="/icons/development.png" alt="development" width={70} height={70} className="text-green-500 w-6 h-6  inline-block"/>
          </div>
          <h2 className="text-lg text-gray-900 font-medium title-font mb-2">Development</h2>
          <p className="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waist co, subway tile poke farm.</p>
        </div>
      </div>

      <div className="xl:w-1/3 md:w-1/2 p-4">
        <div className="border border-gray-200 p-6 rounded-lg">
          <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-green-100 text-green-500 mb-4">
            <Image src="/icons/accounting.png" alt="accounting" width={70} height={70} className="text-green-500 w-6 h-6  inline-block"/>
          </div>
          <h2 className="text-lg text-gray-900 font-medium title-font mb-2">Accounting/ Finance</h2>
          <p className="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waist co, subway tile poke farm.</p>
        </div>
      </div>
      <div className="xl:w-1/3 md:w-1/2 p-4">
        <div className="border border-gray-200 p-6 rounded-lg">
          <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-green-100 text-green-500 mb-4">
            <Image src="/icons/customer_service.png" alt="customer_service" width={70} height={70} className="text-green-500 w-6 h-6  inline-block"/>
          </div>
          <h2 className="text-lg text-gray-900 font-medium title-font mb-2">Customer Service</h2>
          <p className="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waist co, subway tile poke farm.</p>
        </div>
      </div>
      <div className="xl:w-1/3 md:w-1/2 p-4">
        <div className="border border-gray-200 p-6 rounded-lg">
          <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-green-100 text-green-500 mb-4">
            <Image src="/icons/health.png" alt="health" width={70} height={70} className="text-green-500 w-6 h-6  inline-block"/>
          </div>
          <h2 className="text-lg text-gray-900 font-medium title-font mb-2">Healthcare</h2>
          <p className="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waist co, subway tile poke farm.</p>
        </div>
      </div>
      <div className="xl:w-1/3 md:w-1/2 p-4">
        <div className="border border-gray-200 p-6 rounded-lg">
          <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-green-100 text-green-500 mb-4">
            <Image src="/icons/design.png" alt="design" width={70} height={70} className="text-green-500 w-6 h-6  inline-block"/>
          </div>
          <h2 className="text-lg text-gray-900 font-medium title-font mb-2">Design</h2>
          <p className="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waist co, subway tile poke farm.</p>
        </div>
      </div>
    </div>
  </div>
</section>
  )
}

export default Content