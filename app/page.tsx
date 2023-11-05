import About from '@/components/About'
import Banner from '@/components/Banner'
import Contact from '@/components/Contact'
import Header from '@/components/Header'
import Skills from '@/components/Skills'
import Work from '@/components/Work'

export default function Home() {
  return (
    <main className="bg-[#131313]  overflow-hidden">
        <Header />
        <Banner />
        <Skills />
        <About />
        <Work />
        <Contact />
    </main>
  )
}
