import Feature from '@/Components/Feature'
import Hero from '@/Components/Hero'
import Menu from '@/Components/Menu'
import Services from '@/Components/Services'
import Survey from '@/Components/Survey'
import Image from 'next/image'

export default function Home() {
  return (
   <main>
    <Hero />
    <Feature />
    <Services />
    <Menu />
    <Survey />
   </main>
  )
}
