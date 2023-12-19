'use client';
import { motion } from 'framer-motion';
import { animationProps } from '../variants';
import {
    SiNextdotjs,
    SiJavascript,
    SiTailwindcss,
    SiTypescript,
    SiReact,
    SiRedux,
    SiHtml5,
    SiCss3,
} from 'react-icons/si';
const Icons = [
    { id: '1', name: 'Html', icon: <SiHtml5 size={50} /> },
    { id: '2', name: 'Css', icon: <SiCss3 size={50} /> },
    { id: '3', name: 'Tailwind css', icon: <SiTailwindcss size={50} /> },
    { id: '4', name: 'Javascript', icon: <SiJavascript size={50} /> },
    { id: '5', name: 'Typescript', icon: <SiTypescript size={50} /> },
    { id: '6', name: 'React.js', icon: <SiReact size={50} /> },
    { id: '7', name: 'Redux', icon: <SiRedux size={50} /> },
    { id: '8', name: 'Next.js', icon: <SiNextdotjs size={50} /> },
];

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
