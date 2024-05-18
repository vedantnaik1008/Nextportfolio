'use client';
import About from '@/Components/About';
import Hero from '@/Components/Hero';
import Contact from '@/Components/Contact';
import Header from '@/Components/Header';
import Skills from '@/Components/Skills';
import Work from '@/Components/Work'
import Footer from '@/Components/Footer';
import ImageSlider from '@/Components/imageSlider';

export default function Home() {
    return (
        <main className='bg-[#131313] overflow-hidden'>
            <Header />
            <Hero />
            <Skills />
            <About />
            <Work />
            <ImageSlider />
            <Contact />
            <Footer />
        </main>
    );
}
