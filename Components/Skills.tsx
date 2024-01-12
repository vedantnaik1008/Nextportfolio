'use client';
import { motion } from 'framer-motion';
import { animationProps } from '../variants';

const Skills = () => {
    return (
        <section className='section' id='skills'>
            <motion.div className='w-[95%] mx-auto' {...animationProps}>
                <h2 className='h2 leading-tight text-center text-white'>
                    My Skills
                </h2>
                <div className='grid xs:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xs:gap-[30px] lg:gap-[20px] xl:gap-[30px] mt-[50px]'>

                    <div className='rounded-xl bg-transparent backdrop-blur-3xl border-[2px] border-[#5a5a5a]  mx-auto xl:col-span-2 h-[200px] w-full bg-orange-500'>
                        <p className='text-white text-6xl font-bold align-middle h-full flex justify-center items-center'>
                            HTML5
                        </p>
                    </div>
                    <div className='rounded-xl bg-transparent backdrop-blur-3xl border-[2px] border-[#5a5a5a] mx-auto h-[200px] w-full bg-[#214ce5]'>
                        <p className='text-white text-6xl font-bold align-middle h-full flex justify-center items-center'>
                            CSS3
                        </p>
                    </div>
                    <div className='rounded-xl bg-transparent backdrop-blur-3xl border-[2px] border-[#5a5a5a]  mx-auto h-[200px] w-full bg-[#38bdf8]'>
                        <p className='text-white text-6xl lg:text-5xl text-center font-bold align-middle h-full flex justify-center items-center'>
                            Tailwind css
                        </p>
                    </div>
                    <div className='rounded-xl bg-transparent backdrop-blur-3xl border-[2px] border-[#5a5a5a]  mx-auto h-[200px] w-full bg-yellow-400'>
                        <p className='text-white text-6xl lg:text-5xl font-bold align-middle h-full flex justify-center items-center'>
                            Javascript
                        </p>
                    </div>
                    <div className='rounded-xl bg-transparent backdrop-blur-3xl border-[2px] border-[#5a5a5a]  mx-auto xl:col-span-2 h-[200px] w-full bg-[#2f74c0]'>
                        <p className='text-white text-6xl lg:text-5xl font-bold align-middle h-full flex justify-center items-center'>
                            Typescript
                        </p>
                    </div>
                    <div className='rounded-xl bg-transparent backdrop-blur-3xl border-[2px] border-[#5a5a5a] h-[200px] w-full mx-auto bg-black'>
                        <p className='text-[#00cff4] text-6xl font-bold align-middle h-full flex justify-center items-center'>
                            React.js
                        </p>
                    </div>
                    <div className='rounded-xl bg-transparent backdrop-blur-3xl border-[2px] border-[#5a5a5a] mx-auto xl:col-span-2 h-[200px] w-full bg-purple-700'>
                        <p className='text-white text-6xl  font-bold flex justify-center items-center h-full'>
                            Redux
                        </p>
                    </div>
                    <div className='rounded-xl bg-transparent backdrop-blur-3xl border-[2px] border-[#5a5a5a] mx-auto h-[200px] w-full  lg:col-span-2 xl:col-span-2 bg-white'>
                        <p className='text-black text-6xl font-bold h-full flex justify-center items-center'>
                            Next.js
                        </p>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default Skills;
