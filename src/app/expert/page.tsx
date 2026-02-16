'use client'

import {
  Header,
  ExpertHero,
  WhoToRecommend,
  Rewards,
  ExpertForm,
  WhyImportant,
  Footer
} from '@/components'

export default function ExpertPage() {
  return (
    <>
      <Header />
      <main>
        <ExpertHero />
        <WhoToRecommend />
        <Rewards />
        <ExpertForm />
        <WhyImportant />
      </main>
      <Footer />
    </>
  )
}
