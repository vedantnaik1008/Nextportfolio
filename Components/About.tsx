'use client';
import Countup from 'react-countup';
import { motion } from 'framer-motion';
import { animationProps } from '../variants';
import img from '../images/10-Skill-yang-Harus-Dimiliki-Front-End-Developer.webp';
import Image from 'next/image';
import { useInView } from 'react-intersection-observer';

const About = () => {
    const [ref, inView] = useInView({
        threshold: 0.5
    });

    const birthdate = new Date('2002-01-25');
    const currentDate = new Date();
    const age = currentDate.getFullYear() - birthdate.getFullYear();

    return (
        <section className='py-24 ' id='about'>
            <div className='w-[90%] mx-auto relative'>
                {/* <div
                    className='md:bg-[radial-gradient(circle,_rgba(2,0,36,1)_0%,_rgba(255,4,199,1)_25%,_transparent_50%)] absolute top-1/2 left-1/2 z-[1] w-[80%] h-[80%] -translate-x-1/2 -translate-y-1/2'></div> */}
                <h2 className='h2 leading-tight text-center text-white'>
                    About me
                </h2>
                <motion.div
                    {...animationProps}
                    className='grid gap-4 grid-cols-1 md:grid-cols-3 md:grid-rows-2 relative z-[2]'>
                    <div className=' bg-[#131313] border-2 border-[#5a5a5a] rounded-2xl overflow-hidden'>
                        <Image
                            width={545}
                            height={341}
                            loading='lazy'
                            src={img}
                            alt='img'
                            className='rounded-lg w-full object-cover h-full'
                            sizes='(min-width: 1200px) 545px, (min-width: 960px) 425px, (min-width: 840px) 545px, calc(52.88vw + 111px)'
                        />
                    </div>

                    <div className='bg-[#131313] md:col-span-2 w-full border-2 border-[#5a5a5a] rounded-2xl p-4  '>
                        <h3 className='h3 lg:text-[35px] mb-4 text-white'>
                            I&apos;m Self taught frontend developer
                        </h3>
                        <p className='mb-6 text-white font-medium'>
                            My name is vedant naik <br />I am {age} years old{' '}
                            <br />I have only completed my higher secondary
                            education
                            <br />I am from Goa, India
                        </p>
                    </div>

                    <div
                        className='bg-[#131313]  border-2 border-[#5a5a5a] rounded-2xl p-4   w-full h-full place-content-center'
                        ref={ref}>
                        <div className='text-[50px] font-tertiary text-white text-center mb-2'>
                            {inView ? (
                                <Countup start={0} end={2} duration={3} />
                            ) : null}
                        </div>

                        <div className='font-primary text-lg tracking-[2px] text-center text-white'>
                            Years of <br />
                            Experience
                            <br />
                            with Frontend
                        </div>
                    </div>

                    <div
                        className='bg-[#131313]  border-2 border-[#5a5a5a] rounded-2xl p-4   w-full h-full  place-content-center'
                        ref={ref}>
                        <div className='text-[50px] font-tertiary text-center text-white mb-2'>
                            {inView ? (
                                <Countup start={0} end={1} duration={3} />
                            ) : null}
                        </div>
                        <div className='font-primary text-lg tracking-[2px] text-center text-white'>
                            Years of <br />
                            Experience
                            <br />
                            with React.js
                        </div>
                    </div>

                    <div
                        className='bg-[#131313]  border-2 border-[#5a5a5a] rounded-2xl p-4   w-full h-full  place-content-center'
                        ref={ref}>
                        <div className='text-[50px] font-tertiary text-center text-white mb-2'>
                            {inView ? (
                                <Countup start={0} end={50} duration={3} />
                            ) : null}
                            <span className='text-[40px]'>+</span>
                        </div>
                        <div className='font-primary text-lg tracking-[2px] text-center text-white'>
                            Projects
                            <br />
                            Completed
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
