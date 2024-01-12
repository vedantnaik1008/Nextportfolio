'use client';
import { motion } from 'framer-motion';
import { animationProps } from '../variants';
import Image from 'next/image';
import Html from '@/public/3d/html.png';
import Css from '@/public/3d/css3.png';
import Tailwind from '@/public/3d/tailwind.png';
import js from '@/public/3d/javascript.png';
import Typescript from '@/public/3d/typescript(1).png';
import Reactjs from '@/public/3d/react (1).png';
import Redux from '@/public/iconsImages/redux.webp';
import Nextjs from '@/public/iconsImages/next-js-logo.webp';

const Skills = () => {
    return (
        <section className='section' id='skills'>
            <motion.div className='w-[90%] mx-auto' {...animationProps}>
                <h2 className='h2 leading-tight text-center text-white'>
                    My Skills
                </h2>
                <div className='grid xs:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[30px] mt-[50px]'>
                    <div className='rounded-xl bg-transparent backdrop-blur-3xl border-[2px] border-[#5a5a5a]  mx-auto xl:col-span-2 h-[200px] w-full'>
                        {/* <Image
                            width={200}
                            height={200}
                            sizes='100vw'
                            src={Html}
                            alt={'html-img'}
                            className='' 
                        />*/}
                    </div>
                    <div className='rounded-xl bg-transparent backdrop-blur-3xl border-[2px] border-[#5a5a5a]   mx-auto  h-[200px] w-full'>
                        {/* <Image
                            width={200}
                            height={200}
                            sizes='100vw'
                            src={Css}
                            alt={'css-img'}
                            className=''
                        /> */}
                    </div>
                    <div className='rounded-xl bg-transparent backdrop-blur-3xl border-[2px] border-[#5a5a5a]  mx-auto h-[200px] w-full'>
                        {/* <Image
                            width={200}
                            height={200}
                            sizes='100vw'
                            src={Tailwind}
                            alt={'tailwind-css-img'}
                            className=''
                        /> */}
                    </div>
                    <div className='rounded-xl bg-transparent backdrop-blur-3xl border-[2px] border-[#5a5a5a]  mx-auto h-[200px] w-full'>
                        {/* <Image
                            width={200}
                            height={200}
                            sizes='100vw'
                            src={js}
                            alt={'javascript-img'}
                            className=''
                        /> */}
                    </div>
                    <div className='rounded-xl bg-transparent backdrop-blur-3xl border-[2px] border-[#5a5a5a]  mx-auto xl:col-span-2 h-[200px] w-full'>
                        {/* <Image
                            width={200}
                            height={200}
                            sizes='100vw'
                            src={Typescript}
                            alt={'typescript-img'}
                            className=''
                        /> */}
                    </div>
                    <div className='rounded-xl bg-transparent backdrop-blur-3xl border-[2px] border-[#5a5a5a] h-[200px] w-full  mx-auto'>
                        {/* <Image
                            width={200}
                            height={200}
                            sizes='100vw'
                            src={Reactjs}
                            alt={'reactjs-img'}
                            className=''
                        /> */}
                    </div>
                    <div className='rounded-xl bg-transparent backdrop-blur-3xl border-[2px] border-[#5a5a5a] mx-auto xl:col-span-2 h-[200px] w-full '>
                        {/* <Image
                            width={200}
                            height={200}
                            sizes='100vw'
                            src={Redux}
                            alt={'redux-img'}
                            className=''
                        /> */}
                    </div>
                    <div className='rounded-xl bg-transparent backdrop-blur-3xl border-[2px] border-[#5a5a5a] mx-auto h-[200px] w-full  lg:col-span-2 xl:col-span-2'>
                        {/* <Image
                            width={200}
                            height={200}
                            sizes='100vw'
                            src={Nextjs}
                            alt={'nextjs-img'}
                            className=''
                        /> */}
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default Skills;
