import Companies from '@/components/shared/Companies'
import Content from '@/components/shared/Content'
import Featured from '@/components/shared/Featured'
import Footer from '@/components/shared/Footer'
import Header from '@/components/shared/Header'
import HowItWorks from '@/components/shared/HowItWorks'
import Statistics from '@/components/shared/Statistics'
import Testimonials from '@/components/shared/Testimonials'


export default function Home() {
  return (
    <>
      <Header />
      <Featured />
      <Content />
      <Statistics />
      <HowItWorks />
      <Companies />
      <Testimonials />
      <Footer />
    </>
  )
}
