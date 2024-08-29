'use client';
import { motion } from 'framer-motion';
import { animationProps } from '../variants';
import Image from 'next/image';
import Html from '@/public/assets/svg/skills/html.svg';
import Css from '@/public/assets/svg/skills/css.svg';
import Tailwind from '@/public/assets/svg/skills/tailwind.svg';
import Js from '@/public/assets/svg/skills/javascript.svg';
import react18 from '@/public/assets/svg/skills/reactJs.svg';
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

                            <Image
                                className='border-2 border-white rounded-lg p-4 bg-white'
                                src={react18}
                                height={100}
                                width={100}
                                alt={'react18'}
                            />

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
