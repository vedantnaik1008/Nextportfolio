'use client';
import { motion } from 'framer-motion';
import { animationProps } from '../variants';
import img from '../images/IMG20231130114037-removebg.webp';
import Image from 'next/image';
import { Dancing_Script } from 'next/font/google';
import Link from 'next/link';

export const dancingScript = Dancing_Script({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-family',
    weight: '700'
})

const About = () => {
    const birthdate = new Date('2002-01-25');
    const currentDate = new Date();
    const age = currentDate.getFullYear() - birthdate.getFullYear();

    return (
        <section className='py-24 ' id='about'>
            <div className='w-[90%] mx-auto relative xl:w-[70%]'>
                <h2
                    className={`${dancingScript.className} h2 leading-tight text-center text-clip text-transparent bg-clip-text bg-gradient-to-r from-[#ff4d4d] to-[#f9cb28]`}>
                    About me
                </h2>
                <motion.div
                    {...animationProps}
                    className='grid gap-4 grid-cols-1  md:grid-cols-3 md:grid-rows-2 xl:grid-rows-3 md:gap-4 lg:gap-6 xl:gap-10 relative z-[2]'>
                    <div className='bg-gradient-to-r from-[#019ae9] to-[#00dfd8] hover:bg-gradient-to-l  transition-all ease-in-out duration-300 md:col-span-1 lg:row-span-1 xl:row-span-2 border-2 border-[#5a5a5a] rounded-2xl overflow-hidden p-4 xl:p-0'>
                        <div className='flex flex-col justify-center items-center w-40 h-full mx-auto text-center'>
                            <Image
                                width={100}
                                height={100}
                                loading='lazy'
                                src={img}
                                alt='img'
                                className='rounded-lg w-40 object-cover h-70 mx-auto'
                                sizes='(min-width: 1200px) 545px, (min-width: 960px) 425px, (min-width: 840px) 545px, calc(52.88vw + 111px)'
                            />

                            <p className='font-bold'>vedant.Dev🧑‍💻</p>
                            <p className='mb-1'>@vedantnaik108</p>
                            <Link
                                href='https://twitter.com/vedantnaik108'
                                className='btn-tweet hover:scale-105 bg-[#FFFFFF] shadow-[inset_0_-4px_0_0_rgba(0,0,0,.25)]  btn-lg  transition-all duration-300 ease-out flex items-center justify-center'
                                aria-label='Twitter'>
                                {/* <svg
                                    fill='currentColor'
                                    viewBox='0 0 24 24'
                                    className='h-5 w-5'
                                    aria-hidden='true'>
                                    <path d='M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z'></path>
                                </svg> */}
                                Follow
                            </Link>
                        </div>
                    </div>

                    <div className='bg-gradient-to-r from-[#7928ca] to-[#ff0080] hover:bg-gradient-to-l transition-all ease-in-out duration-300 md:col-span-2  w-full border-2 border-[#5a5a5a] rounded-2xl p-4  '>
                        <h3 className='h3 lg:text-[35px] mb-4 text-white'>
                            I&apos;m Self taught frontend developer
                        </h3>
                        <p className='mb-6 text-white font-medium'>
                            My name is vedant naik <br />I am {age} years old{' '}
                            <br />I have only completed my higher secondary
                            education
                            <br />I am from Goa, India
                            <br /> Email: vedunaik777@gmail.com
                        </p>
                    </div>

                    <div className='bg-gradient-to-r from-[#ff4d4d] to-[#f9cb28] hover:bg-gradient-to-l  transition-all ease-in-out duration-300  border-2 border-[#5a5a5a] rounded-2xl p-4   w-full h-full place-content-center'>
                        <div className='text-[50px] font-tertiary text-white text-center mb-2'>
                            2
                        </div>

                        <div className='font-primary text-lg tracking-[2px] text-center text-white'>
                            Years of <br />
                            Experience
                            <br />
                            with Frontend
                        </div>
                    </div>

                    <div className='bg-gradient-to-r from-[#019ae9] to-[#00dfd8] hover:bg-gradient-to-l  transition-all ease-in-out duration-300 md:row-span-1 xl:row-span-2 border-2 border-[#5a5a5a] rounded-2xl p-4   w-full h-full  place-content-center'>
                        <div className='text-[50px] font-tertiary text-center text-white mb-2'>
                            1
                        </div>
                        <div className='font-primary text-lg tracking-[2px] text-center text-white'>
                            Years of <br />
                            Experience
                            <br />
                            with React.js
                        </div>
                    </div>

                    <div className='bg-gradient-to-r from-[#7928ca] to-[#ff0080] hover:bg-gradient-to-l  transition-all ease-in-out duration-300 md:col-span-1 xl:col-span-2  border-2 border-[#5a5a5a] rounded-2xl p-4   w-full h-full  place-content-center'>
                        <div className='text-[50px] font-tertiary text-center text-white mb-2'>
                            50
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
