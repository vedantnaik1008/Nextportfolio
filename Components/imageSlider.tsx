import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { animationProps } from '../variants';
import Image from 'next/image';
import { projectData } from '@/data/ProjectData';
import { CardContainer } from './ui/3d-card';

type Props = {
    setIsClicked: (isClicked: string) => void;
};

const ImageSlider = ({ setIsClicked }: Props) => {
    const [currentImage, setCurrentImage] = useState(0);
    const [isInteracting, setIsInteracting] = useState(false);

    // useEffect(() => {
    //     let interval: string | number | NodeJS.Timeout | undefined;
    //     if (!isInteracting) {
    //         interval = setInterval(() => {
    //             setCurrentImage((prev) =>
    //                 prev < projectData.length - 1 ? prev + 1 : 0
    //             );
    //         }, 3000);
    //     }

    //     return () => clearInterval(interval);
    // }, [isInteracting]);
    const Previous = () => {
        setIsInteracting(true);
        setCurrentImage(
            currentImage > 0 ? currentImage - 1 : projectData.length - 1
        );
    };

    const Next = () => {
        setIsInteracting(true);
        setCurrentImage(
            currentImage < projectData.length - 1 ? currentImage + 1 : 0
        );
    };

    const handleClick = (index: number) => {
        setIsInteracting(true);
        setCurrentImage(index);
    };

    const handleMouseEnter = () => {
        setIsInteracting(true);
    };

    const handleMouseLeave = () => {
        setIsInteracting(false);
    };

    return (
        <>
            <div className=''>
                <motion.div
                    {...animationProps}
                    className='md:flex items-center justify-center relative'>
                    <button
                        onClick={Previous}
                        className='Previous top-[103%] left-[20%] sm:left-[30%] md:top-1/2 md:left-[8%] lgmd:left-[10%]'>
                        <svg
                            stroke='currentColor'
                            fill='currentColor'
                            stroke-width='0'
                            viewBox='0 0 256 512'
                            height='20px'
                            width='20px'
                            xmlns='http://www.w3.org/2000/svg'>
                            <path d='M31.7 239l136-136c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9L127.9 256l96.4 96.4c9.4 9.4 9.4 24.6 0 33.9L201.7 409c-9.4 9.4-24.6 9.4-33.9 0l-136-136c-9.5-9.4-9.5-24.6-.1-34z'></path>
                        </svg>
                    </button>
                    {projectData.map((project, i) => (
                        <div
                            key={project.id}
                            className={`${
                                currentImage === i
                                    ? 'block SlideTrue'
                                    : `SlideFalse image-${i}`
                            }`}>
                            <CardContainer>
                                <div
                                    className='group relative overflow-hidden border-[2px] border-[#5a5a5a] rounded-xl mt-6'
                                    onClick={() => setIsClicked(project.id)}
                                    onMouseEnter={handleMouseEnter}
                                    onMouseLeave={handleMouseLeave}>
                                    <Image
                                        width={576}
                                        height={400}
                                        sizes='(min-width: 960px) 45vw, 90vw'
                                        className='group-hover:scale-125 w-[100%] transition-all duration-500 object-cover bg-cover bg-center'
                                        src={project.image}
                                        alt='project-img'
                                    />
                                    <div className='absolute -top-[50%] left-[40%] md:left-[45%] group-hover:top-[50%] transition-all duration-500 z-40'>
                                        <span
                                            onClick={() =>
                                                setIsClicked(project.id)
                                            }
                                            className='text-3xl text-white text-gradient cursor-pointer'>
                                            click
                                        </span>
                                    </div>
                                </div>
                            </CardContainer>
                        </div>
                    ))}
                    <button
                        onClick={Next}
                        className='Next top-[103%] right-[20%] sm:right-[30%] md:top-1/2 md:right-[8%] lgmd:right-[10%]'>
                        <svg
                            stroke='currentColor'
                            fill='currentColor'
                            stroke-width='0'
                            viewBox='0 0 256 512'
                            height='20px'
                            width='20px'
                            xmlns='http://www.w3.org/2000/svg'>
                            <path d='M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z'></path>
                        </svg>
                    </button>
                </motion.div>
            </div>
            <div className='dots mt-[30px] lg:mt-[40px] xl:mt-[60px]'>
                {projectData.map((_, i) => (
                    <span
                        key={i}
                        onClick={() => handleClick(i)}
                        className={currentImage === i ? 'span' : ''}></span>
                ))}
            </div>
        </>
    );
};

export default ImageSlider;