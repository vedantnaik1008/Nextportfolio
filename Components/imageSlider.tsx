import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { animationProps } from '../variants';
import Image from 'next/image';
import { projectData } from '@/data/ProjectData';
import { CardContainer } from './ui/3d-card';


type Props = {
    setIsClicked: (isClicked: string) => void
}

const ImageSlider = ({ setIsClicked }: Props) => {
    const [currentImage, setCurrentImage] = useState(0);
    const [isInteracting, setIsInteracting] = useState(false);

    useEffect(() => {
        let interval: string | number | NodeJS.Timeout | undefined;
        if (!isInteracting) {
            interval = setInterval(() => {
                setCurrentImage((prev) =>
                    prev < projectData.length - 1 ? prev + 1 : 0
                );
            }, 3000);
        }

        return () => clearInterval(interval);
    }, [isInteracting]);
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
                    className='flex items-center justify-center relative'>
                    <button
                        onClick={Previous}
                        className='Previous left-0 md:left-[8%] lgmd:left-[10%]'>
                        {'<'}
                    </button>
                    {projectData.map((project, i) => (
                        <div
                            key={project.id}
                            className={`${
                                currentImage === i
                                    ? 'block SlideTrue opacity-100'
                                    : ` SlideFalse image-${i} opacity-70`
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
                        className='Next right-0 md:right-[8%] lgmd:right-[10%]'>
                        {'>'}
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
