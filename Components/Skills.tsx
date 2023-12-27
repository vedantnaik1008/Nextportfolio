'use client';
import { motion } from 'framer-motion';
import { animationProps } from '../variants';
import { Icons } from '@/lib/ReactIcons';

const Skills = () => {
    return (
        <section className='section lg:h-screen' id='skills'>
            <motion.div className='w-[90%] mx-auto' {...animationProps}>
                <h2 className='h2 leading-tight text-center text-white'>
                    My Skills
                </h2>
                <div className='flex flex-wrap gap-[60px] justify-center mt-[50px]'>
                    {Icons.map((icon) => (
                        <div
                            key={icon.id}
                            className='flex flex-col gap-y-4 items-center justify-center'>
                            <span className='text-[#FFFFFF] hover:opacity-70  transition duration-1500 ease-in'>
                                {icon.icon}
                            </span>
                            <p className='text-[#FFFFFF]'>{icon.name}</p>
                        </div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
};

export default Skills;
