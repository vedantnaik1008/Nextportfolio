'use client';
import dynamic from 'next/dynamic';
import { useState } from 'react';
import { dancingScript } from './About';
import ImageSlider from './imageSlider';

const Modal = dynamic(()=>import('./Modal'),{ ssr: false });

const Work = () => {
    const [isClicked, setIsClicked] = useState('');
    return (
        <>
            <section className='py-24 flex items-center' id='work'>
                <div className='w-[90%] mx-auto'>
                    <h2 className={`${dancingScript.className} h2 leading-tight text-center text-clip text-transparent bg-clip-text bg-gradient-to-r from-[#7928ca] to-[#ff0080] mt-6`}>
                        My Latest Projects
                    </h2>
                        <ImageSlider setIsClicked={setIsClicked} />
                </div>
                <Modal isClicked={isClicked} setIsClicked={setIsClicked} />
            </section>
        </>
    );
};

export default Work;
