'use client';
import { motion } from 'framer-motion';
import { animationProps } from '../variants';
import Image from 'next/image';
import Html from '@/public/iconsImages/html.webp';
import Css from '@/public/iconsImages/css.webp';
import Tailwind from '@/public/iconsImages/tailwind-css.webp';
import js from '@/public/iconsImages/java-script.webp';
import Typescript from '@/public/iconsImages/typescript-1.webp';
import Reactjs from '@/public/iconsImages/react.webp';
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
                    <Image
                        width={200}
                        height={200}
                        sizes='100vw'
                        src={Html}
                        alt={'html-img'}
                        className='rounded-xl bg-contain w-full h-[200px]  mx-auto xl:col-span-4'
                    />
                    <Image
                        width={200}
                        height={200}
                        sizes='100vw'
                        src={Css}
                        alt={'css-img'}
                        className='rounded-xl bg-contain w-full mx-auto'
                    />
                    <Image
                        width={200}
                        height={200}
                        sizes='100vw'
                        src={Tailwind}
                        alt={'tailwind-css-img'}
                        className='rounded-xl bg-contain w-full mx-auto'
                    />
                    <Image
                        width={200}
                        height={200}
                        sizes='100vw'
                        src={js}
                        alt={'javascript-img'}
                        className='rounded-xl bg-contain w-full mx-auto'
                    />
                    <Image
                        width={200}
                        height={200}
                        sizes='100vw'
                        src={Typescript}
                        alt={'typescript-img'}
                        className='rounded-xl bg-contain w-full mx-auto'
                    />
                    <Image
                        width={200}
                        height={200}
                        sizes='100vw'
                        src={Reactjs}
                        alt={'reactjs-img'}
                        className='rounded-xl bg-contain h-[200px] w-full mx-auto xl:col-span-2 xl:row-span-2'
                    />
                    <Image
                        width={200}
                        height={200}
                        sizes='100vw'
                        src={Redux}
                        alt={'redux-img'}
                        className='rounded-xl bg-contain  mx-auto xl:col-span-2 h-[200px] w-full'
                    />
                    <Image
                        width={200}
                        height={200}
                        sizes='100vw'
                        src={Nextjs}
                        alt={'nextjs-img'}
                        className='rounded-xl bg-contain  mx-auto h-[200px] w-full xl:col-span-4'
                    />
                </div>
            </motion.div>
        </section>
    );
};

export default Skills;
