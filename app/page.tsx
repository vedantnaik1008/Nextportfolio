'use client';
import dynamic from 'next/dynamic';
import About from '@/Components/About';
import Banner from '@/Components/Banner';
import Contact from '@/Components/Contact';
import Header from '@/Components/Header';
import Skills from '@/Components/Skills';
const Work = dynamic(() => import('@/Components/Work'), {
    ssr: false,
})

export default function Home() {
    return (
        <main className='bg-[#131313]  overflow-hidden'>
            <Header />
            <Banner />
            <Skills />
            <About />
            <Work />
            <Contact />
        </main>
    );
}
