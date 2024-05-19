'use client';
import dynamic from 'next/dynamic';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { animationProps } from '../variants';
import Image from 'next/image';
import { projectData } from '@/data/ProjectData';
import { CardContainer } from './ui/3d-card';
import { dancingScript } from './About';

const Modal = dynamic(() => import('./Modal'), { ssr: false });

const Work = () => {
    const [isClicked, setIsClicked] = useState('');
    return (
        <>
            <section className='py-24 flex items-center' id='work'>
                <div className='w-[90%] mx-auto'>
                    <h2
                        className={`${dancingScript.className} h2 leading-tight text-center text-clip text-transparent bg-clip-text bg-gradient-to-r from-[#7928ca] to-[#ff0080] mt-6`}>
                        My Latest Projects
                    </h2>
                    <motion.div
                        {...animationProps}
                        className='grid grid-cols-1 lg:grid-cols-2 gap-x-5'>
                        {projectData.map((project) => (
                            <CardContainer key={project.id}>
                                <div
                                    className='group relative overflow-hidden border-[2px] border-[#5a5a5a] rounded-xl mt-6'
                                    onClick={() => setIsClicked(project.id)}>
                                    <Image
                                        width={576}
                                        height={400}
                                        sizes='(min-width: 960px) 45vw, 90vw'
                                        className='group-hover:scale-125 md:w-[100%] transition-all duration-500 object-cover bg-cover bg-center'
                                        src={project.image}
                                        alt='project-img'
                                    />
                                    <div className='absolute -top-[50%] left-[40%] md:left-[45%] group-hover:top-[50%] transition-all duration-500 z-40'>
                                        <span
                                            onClick={() =>
                                                setIsClicked(project.id)
                                            }
                                            className='text-3xl text-white text-gradient'>
                                            Click
                                        </span>
                                    </div>
                                </div>
                            </CardContainer>
                        ))}
                    </motion.div>
                </div>
                <Modal isClicked={isClicked} setIsClicked={setIsClicked} />
            </section>
        </>
    );
};

export default Work;