'use client';
import { motion } from 'framer-motion';
import { animationProps } from '../variants';
import Image from 'next/image';
import Html from '@/public/assets/svg/skills/html.svg';
import Css from '@/public/assets/svg/skills/css.svg';
import Tailwind from '@/public/assets/svg/skills/tailwind.svg';
import Js from '@/public/assets/svg/skills/javascript.svg';
// import react18 from '@/public/assets/svg/skills/reactjs.svg';
import Typescript from '@/public/assets/svg/skills/typescript.svg';
import Nextjs from '@/public/assets/svg/skills/nextjs.svg';
import apolloClient from '@/public/assets/17189275.png'
import Tanstack from '@/public/assets/svg/skills/tanstackquery.svg';
import Redux from '@/public/assets/svg/skills/redux.svg';
import RouterDom from '@/public/assets/svg/skills/reactrouterdom.svg';
import GraphQl from '@/public/assets/svg/skills/garphql.svg';
import Webpack from '@/public/assets/svg/skills/webpack.svg';
import Github from '@/public/assets/svg/skills/github.svg';
import Netlify from '@/public/assets/svg/skills/netlify.svg';
import VsCode from '@/public/assets/svg/skills/vscode.svg';
import Figma from '@/public/assets/svg/skills/figma.svg';
import vercel from '@/public/assets/0_BV1dRBYoYd9jKYW8.png';
import { dancingScript } from './About';

const Skills = () => {
    return (
        <section className='section' id='skills'>
            <motion.div className='w-[95%] mx-auto' {...animationProps}>
                <h2
                    className={`${dancingScript.className} h2 leading-tight text-center text-clip text-transparent bg-clip-text bg-gradient-to-r from-[#019ae9] to-[#00dfd8]`}>
                    My Skills
                </h2>
                <div className='mt-12'>
                    <div className='my-4'>
                        <h3 className='h3 leading-tight text-center text-white mb-8'>
                            Languages
                        </h3>
                        <div className='flex flex-wrap gap-5 items-center justify-center'>
                            <Image
                                className='border-2 border-white rounded-lg p-4 bg-white'
                                src={Html}
                                height={100}
                                width={100}
                                alt={'Html'}
                            />

                            <Image
                                className='border-2 border-white rounded-lg p-4 bg-white'
                                src={Css}
                                height={100}
                                width={100}
                                alt={'Css'}
                            />

                            <Image
                                className='border-2 border-white rounded-lg p-4 bg-white'
                                src={Tailwind}
                                height={100}
                                width={100}
                                alt={'Tailwind'}
                            />

                            <Image
                                className='border-2 border-white rounded-lg p-4 bg-white'
                                src={Js}
                                height={100}
                                width={100}
                                alt={'Js'}
                            />

                            {/* <Image
                                className='border-2 border-white rounded-lg p-4 bg-white'
                                src={react18}
                                onError={(e) =>
                                    console.error(
                                        'Error loading React18 image:',
                                        e
                                    )
                                }
                                height={100}
                                width={100}
                                alt={'react18'}
                            /> */}
                            <svg
                                className='border-2 border-white rounded-lg p-4 bg-white'
                                width='101'
                                height='100'
                                viewBox='0 0 101 100'
                                fill='none'
                                xmlns='http://www.w3.org/2000/svg'>
                                <path
                                    d='M50.3067 58.8168C55.1758 58.8168 59.1229 54.8697 59.1229 50.0006C59.1229 45.1315 55.1758 41.1844 50.3067 41.1844C45.4376 41.1844 41.4905 45.1315 41.4905 50.0006C41.4905 54.8697 45.4376 58.8168 50.3067 58.8168Z'
                                    fill='#61DAFB'
                                />
                                <path
                                    d='M50.3066 68.0631C76.4333 68.0631 97.6132 59.9762 97.6132 50.0005C97.6132 40.0249 76.4333 31.938 50.3066 31.938C24.1799 31.938 3 40.0249 3 50.0005C3 59.9762 24.1799 68.0631 50.3066 68.0631Z'
                                    stroke='#61DAFB'
                                    className='border-2 border-white rounded-lg p-4 bg-white'
                                    stroke-
                                    width='5'
                                />
                                <path
                                    d='M34.664 59.0318C47.7274 81.6582 65.3207 95.9571 73.9599 90.9692C82.5991 85.9814 79.0126 63.5957 65.9492 40.9693C52.8858 18.3428 35.2925 4.04395 26.6533 9.03178C18.0141 14.0196 21.6006 36.4054 34.664 59.0318Z'
                                    stroke='#61DAFB'
                                    className='border-2 border-white rounded-lg p-4 bg-white'
                                    stroke-
                                    width='5'
                                />
                                <path
                                    d='M34.664 40.9692C21.6007 63.5956 18.0141 85.9814 26.6533 90.9692C35.2925 95.957 52.8859 81.6582 65.9492 59.0318C79.0126 36.4053 82.5991 14.0196 73.9599 9.03176C65.3208 4.04393 47.7274 18.3428 34.664 40.9692Z'
                                    stroke='#61DAFB'
                                    className='border-2 border-white rounded-lg p-4 bg-white'
                                    stroke-
                                    width='5'
                                />
                            </svg>
                            <Image
                                className='border-2 border-white rounded-lg p-4 bg-white'
                                src={Typescript}
                                height={100}
                                width={100}
                                alt={'Typescript'}
                            />
                            <Image
                                className='border-2 border-white rounded-lg p-4 bg-white'
                                src={Nextjs}
                                height={100}
                                width={100}
                                alt={'next.js'}
                            />
                            <Image
                                className='border-2 border-white rounded-lg p-4 bg-white'
                                src={apolloClient}
                                height={100}
                                width={100}
                                alt={'apollo-client'}
                            />
                        </div>
                        <div className='flex flex-wrap items-center justify-center gap-5 mt-5'>
                            <Image
                                className='border-2 border-white rounded-lg p-4 bg-white'
                                src={Tanstack}
                                height={100}
                                width={100}
                                alt={'Tanstack-query'}
                            />

                            <Image
                                className='border-2 border-white rounded-lg p-4 bg-white'
                                src={Redux}
                                height={100}
                                width={100}
                                alt={'redux'}
                            />
                            <Image
                                className='border-2 border-white rounded-lg p-4 bg-white'
                                src={RouterDom}
                                height={100}
                                width={100}
                                alt={'react-router-dom'}
                            />

                            <Image
                                className='border-2 border-white rounded-lg p-4 bg-white'
                                src={GraphQl}
                                height={100}
                                width={100}
                                alt={'GraphQl'}
                            />
                            <Image
                                className='border-2 border-white rounded-lg p-4 bg-white'
                                src={Webpack}
                                height={100}
                                width={100}
                                alt={'Webpack'}
                            />
                        </div>
                    </div>

                    <div className='mb-4 mt-[54px]'>
                        <h3 className='h3 leading-tight text-center text-white mb-8'>
                            Hoisting Platforms
                        </h3>
                        <div className='flex flex-wrap gap-5 items-center justify-center'>
                            <Image
                                className='border-2 border-white rounded-lg p-4 bg-white'
                                src={Github}
                                height={100}
                                width={100}
                                alt={'vercel'}
                            />

                            <Image
                                className='border-2 border-white rounded-lg p-4 bg-white'
                                src={Netlify}
                                height={100}
                                width={100}
                                alt={'vercel'}
                            />

                            <Image
                                className='border-2 border-white rounded-lg p-4 bg-white'
                                src={vercel}
                                height={100}
                                width={100}
                                alt={'vercel'}
                            />
                        </div>
                    </div>

                    <div className='my-4 mt-[54px]'>
                        <h3 className='h3 leading-tight text-center text-white mb-8'>
                            Tools
                        </h3>
                        <div className='flex flex-wrap gap-5 items-center justify-center'>
                            <Image
                                className='border-2 border-white rounded-lg p-4 bg-white'
                                src={VsCode}
                                height={100}
                                width={100}
                                alt={'apollo-client'}
                            />

                            <Image
                                className='border-2 border-white rounded-lg p-4 bg-white'
                                src={Figma}
                                height={100}
                                width={100}
                                alt={'apollo-client'}
                            />
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default Skills;
