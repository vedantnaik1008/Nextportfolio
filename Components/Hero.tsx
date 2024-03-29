'use client';
import Images from '../images/IMG20231130114037-removebg.webp';
import { animationProps } from '../variants';
import { Link } from 'react-scroll';
import Image from 'next/image';

const Hero = () => {
    return (
        <section
            className='min-h-[85vh] md:min-h-[75vh] flex items-center mt-28 container-1'
            id='home'>
            <div className='container mx-auto'>
                <div className='flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12'>
                    <div
                        {...animationProps}
                        className='self-center sm:order-first lg:order-last'>
                        <Image
                            priority={true}
                            placeholder='blur'
                            width={400}
                            height={400}
                            sizes='(min-width: 640px) 400px, (min-width: 380px) 290px, calc(33.33vw + 170px)'
                            src={Images}
                            alt='person-img'
                            className='rounded-xl bg-cover'
                        />
                    </div>
                    <div className='flex-1 text-center font-secondary lg:text-left'>
                        <h1
                            {...animationProps}
                            className='text-[55px] text-white font-bold leading-[0.8] lg:text-[110px] mt-8'>
                            Hi there, welcome
                        </h1>

                        <p
                            {...animationProps}
                            className='my-8 max-w-lg mx-auto lg:mx-[0px] text-white font-medium'>
                            I am a frontend developer with no degree, but I have
                            skills. If you are interested in my skills, please
                            contact me or message me on Twitter.
                        </p>
                            <div
                                {...animationProps}
                                className='flex max-w-max gap-6 flex-wrap items-center justify-center mb-12 mx-auto lg:mx-0'>
                                <Link
                                    href='contact'
                                    to='contact'
                                    offset={-28}
                                    smooth={true}
                                    spy={true}>
                                    <button className='btn-tweet hover:scale-105 bg-[#FFFFFF] shadow-[inset_0_-4px_0_0_rgba(0,0,0,.25)]  btn-lg  transition-all duration-300 ease-out'>
                                        Contact me
                                    </button>
                                </Link>
                                <a
                                    href='/Vedant_Naik_3.pdf'
                                    download
                                    className='py-4 btn-tweet hover:scale-105 bg-[#FFFFFF] shadow-[inset_0_-4px_0_0_rgba(0,0,0,.25)]  btn-lg  transition-all duration-300 ease-out'>
                                    Resume
                                </a>
                            </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
