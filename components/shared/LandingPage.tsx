import AboutUs from '@/components/shared/AboutUs'
import Banner from '@/components/shared/Banner'
import Companies from '@/components/shared/Companies'
import Content from '@/components/shared/Content'
import Details from '@/components/shared/Details'
import Featured from '@/components/shared/Featured'
import HeroSection from '@/components/shared/Hero'
import HowItWorks from '@/components/shared/HowItWorks'
import Statistics from '@/components/shared/Statistics'
import Testimonials from '@/components/shared/Testimonials'

const LandingPage = () => {
  return (
    <>
      <HeroSection />
      <AboutUs />
      <Featured />
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

export default LandingPage