'use client';
import { motion } from 'framer-motion';
import { animationProps } from '../variants';
import Image from 'next/image';
import { dancingScript } from './About';
import { HoistingData, LanguagesData, ToolsData } from '@/data/skillsData';

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
                            {LanguagesData.slice(0, 8).map((data) => (
                                <Image
                                    key={data.id}
                                    className='border-2 border-white rounded-lg p-4 bg-white'
                                    src={data.src}
                                    height={data.height}
                                    width={data.width}
                                    alt={data.alt}
                                />
                            ))}
                        </div>
                    </div>

                    <div className='flex flex-wrap gap-5 items-center justify-center'>
                        {LanguagesData.slice(8).map((data) => (
                            <Image
                                key={data.id}
                                className='border-2 border-white rounded-lg p-4 bg-white'
                                src={data.src}
                                height={data.height}
                                width={data.width}
                                alt={data.alt}
                            />
                        ))}
                    </div>

                    <div className='mb-4 mt-[54px]'>
                        <h3 className='h3 leading-tight text-center text-white mb-8'>
                            Hoisting Platforms
                        </h3>
                        <div className='flex flex-wrap gap-5 items-center justify-center'>
                            {HoistingData.map((data) => (
                                <Image
                                    key={data.id}
                                    className='border-2 border-white rounded-lg p-4 bg-white'
                                    src={data.src}
                                    height={data.height}
                                    width={data.width}
                                    alt={data.alt}
                                />
                            ))}
                        </div>
                    </div>

                    <div className='my-4 mt-[54px]'>
                        <h3 className='h3 leading-tight text-center text-white mb-8'>
                            Tools
                        </h3>
                        <div className='flex flex-wrap gap-5 items-center justify-center'>
                            {ToolsData.map((data) => (
                                <Image
                                    key={data.id}
                                    className='border-2 border-white rounded-lg p-4 bg-white'
                                    src={data.src}
                                    height={data.height}
                                    width={data.width}
                                    alt={data.alt}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default Skills;
