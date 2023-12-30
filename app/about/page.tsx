import AboutUs from '@/components/shared/AboutUs'
import Banner from '@/components/shared/Banner'
import Companies from '@/components/shared/Companies'
import Content from '@/components/shared/Content'
import Details from '@/components/shared/Details'
import HowItWorks from '@/components/shared/HowItWorks'
import Statistics from '@/components/shared/Statistics'
import Testimonials from '@/components/shared/Testimonials'

const page = () => {
  return (
    <>
      <AboutUs />
      <Content />
      <Statistics />
      <Details />
      <HowItWorks />
      <Companies />
      <Testimonials />
      <Banner />
    </>
  )
}

export default page