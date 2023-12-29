import Link from 'next/link'
import { Button } from "@/components/ui/button"
import Image from 'next/image'



const Header = () => {
  return (
    <>
  <header className="text-gray-600 body-font">
    <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
      <Link className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0" href='/'>
        <Image src="/assets/logo.png" alt="logo" width={150} height={150} />
      </Link>
      <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
      <Link className="mr-5 hover:text-gray-900" href='/'>Home</Link>
        <Link className="mr-5 hover:text-gray-900" href='/about'>About</Link>
        <Link className="mr-5 hover:text-gray-900" href='/employers'>Employers</Link>
        <Link className="mr-5 hover:text-gray-900" href='/jobs'>Find Jobs</Link>
        <Link className="mr-5 hover:text-gray-900" href='/blog'>Blog</Link>
      </nav>
      <Button variant="outline" className='mr-4'>Login</Button>
      <Button variant="outline">SignUp</Button>
    </div>
  </header>
  </>
  )
}

export default Header