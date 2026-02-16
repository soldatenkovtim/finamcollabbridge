'use client'

import {
  Header,
  Hero,
  Warning,
  Benefits,
  HowItWorks,
  Criteria,
  InitiativeForm,
  Footer
} from '@/components'

export default function InitiativePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Warning />
        <Benefits />
        <HowItWorks />
        <Criteria />
        <InitiativeForm />
      </main>
      <Footer />
    </>
  )
}
