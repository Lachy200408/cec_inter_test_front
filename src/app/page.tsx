import Header from '@/lib/components/header/Header'
import Promo from '@/lib/components/promo/Promo'
import Calling from '@/lib/components/calling/Calling'
import Companies from '@/lib/components/companies/Companies'
import CoursesFeed from '@/lib/components/coursesfeed/CoursesFeed'
import SchoolInfo from '@/lib/components/schoolinfo/SchoolInfo'
import PopularCourses from '@/lib/components/popularcourses/PopularCourses'
import Footer from '@/lib/components/footer/Footer'
import MasterFeed from '@/lib/components/masterfeed/MasterFeed'
import Testimonies from '@/lib/components/testimonies/Testimonies'

export default function MainPage() {
  return (
    <>
      <Header />
      <section className="bg-white grid gap-14 place-items-center w-full py-14 px-20 overflow-x-hidden">
        <Promo />
        <Calling />
        <Companies />
        <CoursesFeed />
        <SchoolInfo />
        <PopularCourses />
        <MasterFeed />
        <Testimonies />
      </section>
      <Footer />
    </>
  )
}
