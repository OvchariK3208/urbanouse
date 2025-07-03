import { FirstHome } from '@/components/shared/first-home'
import { PropertySearch } from '@/components/shared/property-search'
import { ProjectsImageList } from '@/components/shared/projects-image-list'
import { Statistics } from '@/components/shared/statistics'
import { FeturedProperties } from '@/components/shared/fetured-properties'
import { TopRatedAgents } from '@/components/shared/top-rated-agents'
import { Testimonial } from '@/components/shared/testimonial'
import { FAQ } from '@/components/shared/faq'
import { Footer } from '@/components/shared/footer'

export default function Home() {
  return (
    <>
      <FirstHome />
      <PropertySearch />
      <ProjectsImageList />
      <Statistics />
      <FeturedProperties />
      <TopRatedAgents />
      <Testimonial />
      <FAQ />
      <Footer />
    </>
  )
}
