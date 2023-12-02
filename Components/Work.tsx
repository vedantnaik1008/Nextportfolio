'use client';
import { useState } from 'react';
import img1 from '../images/canva-design-movie-min.webp';
import img3 from '../images/QuickKart-min.webp';
import { MdClose } from 'react-icons/md';
import { motion } from 'framer-motion';
import { animationProps } from '../variants';
import ReactPlayer from 'react-player/lazy';
import Image from 'next/image';
const projectData = [
    {
        id: '1',
        image: img3,
        video: 'https://youtu.be/mMW29HKG5LQ',
        teckStack: [
            'TAILWIND',
            'JAVASCRIPT',
            'TYPESCRIPT',
            'REACT.JS',
            'NEXT.JS',
            'REDUX',
            'HANKO AUTH',
            'STRIPE',
        ],
        title: 'QuickKart',
        anchor: 'https://ecommerce-qk.vercel.app/',
        github: 'https://github.com/vedantnaik1008/Ecommerce',
    },
    {
        id: '2',
        image: img1,
        video: 'https://youtu.be/rQBR0Ds_STk',
        teckStack: [
            'HTML',
            'CSS',
            'BOOTSTRAP',
            'JAVASCRIPT',
            'TYPESCRIPT',
            'REACT.JS',
        ],
        title: 'Yeh Movie Web App',
        anchor: 'https://movie-app-yeh.netlify.app/',
        github: 'https://github.com/vedantnaik1008/react-movie-search-app',
    },
];

const Work = () => {
    const [isClicked, setIsClicked] = useState('');
    return (
        <>
            <section className='section' id='work'>
                <div className='w-[90%] mx-auto'>
                    <h2 className='h2 leading-tight text-center text-white mt-6'>
                        My Latest Projects
                    </h2>
                    <motion.div
                        {...animationProps}
                        className='grid grid-cols-1 lg:grid-cols-2 gap-3'>
                        {projectData.map((project) => (
                            <div
                                key={project.id}
                                className='group relative overflow-hidden border-[2px] border-[#5a5a5a] rounded-xl mt-6'>
                                <div
                                    onClick={() => setIsClicked(project.id)}
                                    className='group-hover:bg-black/70 w-full h-full absolute z-30 transition-all duration-100'></div>
                                <Image
                                    width={576}
                                    height={400}
                                    sizes='(min-width: 960px) 45vw, 90vw'
                                    className='group-hover:scale-125 transition-all duration-500 w-[100%] h-[400px] object-cover bg-cover bg-center'
                                    src={project.image}
                                    alt='project-img'
                                />
                                <div className='absolute -top-[50%] left-[40%] group-hover:top-[50%] transition-all duration-500 z-40'>
                                    <span
                                        onClick={() => setIsClicked(project.id)}
                                        className='text-3xl text-white text-gradient'>
                                        Click
                                    </span>
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </div>

                {isClicked &&
                    projectData.map(
                        (Modal) =>
                            Modal.id === isClicked && (
                                <div
                                    key={Modal.id}
                                    className='fixed inset-0 z-50 bg-transparent backdrop-blur-3xl h-[100%] w-[100%] text-white m-auto flex items-center'>
                                    <div className='relative border-[#5a5a5a] border-[2px] bg-[#181818] min-[320px]:w-[90%] min-[500px]:w-[75%]  md:h-[70%] md:w-[75%] text-white mx-auto rounded-lg p-4'>
                                        <button
                                            onClick={() => setIsClicked('')}
                                            className=' drop-shadow-2xl border-[#5a5a5a] border-[2px] rounded-full w-[40px] h-[40px] bg-[#181818] text-xl absolute min-[320px]:right-[40%]  min-[320px]:-top-12 min-[500px]:-right-12 min-[500px]:-top-4 md:-right-20 md:-top-10 flex items-center justify-center'>
                                            <MdClose
                                                size='28px'
                                                color='white'
                                            />
                                        </button>
                                        <div className='grid grid-cols-1 md:grid-cols-2 gap-5 h-full'>
                                            <div className=''>
                                                <ReactPlayer
                                                    controls={true}
                                                    width='100%'
                                                    height='100%'
                                                    url={Modal.video}
                                                />
                                            </div>
                                            <div className='w-[100%] h-full'>
                                                <h1 className='text-center text-white text-2xl underline underline-offset-8'>
                                                    {Modal.title}
                                                </h1>
                                                <div className='mt-[40px]'>
                                                    <p className='mb-[10px]'>
                                                        Tools used:{' '}
                                                        <span className='text-white  font-cursi font-bold text-[15px] md:text-[18px]'>
                                                            {Modal.teckStack.join(
                                                                ', '
                                                            )}
                                                        </span>
                                                    </p>
                                                    <p className=''>
                                                        Project:{' '}
                                                        <a
                                                            href={Modal.anchor}
                                                            className='text-white hover:underline font-cursi font-bold'>
                                                            Watch live
                                                        </a>
                                                    </p>
                                                    <p className=''>
                                                        Code:{' '}
                                                        <a
                                                            href={Modal.github}
                                                            className='text-white hover:underline font-cursi font-bold'>
                                                            Visit
                                                        </a>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                    )}
            </section>
        </>
    );
};

export default Work;
