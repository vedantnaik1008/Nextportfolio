import { projectData } from '@/data/ProjectData';
import React from 'react';
import { MdClose } from 'react-icons/md';
import ReactPlayer from 'react-player';

type Props = {
    isClicked: string;
    setIsClicked: (isClicked: string) => void;
};

const Modal = ({ isClicked, setIsClicked }: Props) => {
    return (
        <>
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
                                        <MdClose size='28px' color='white' />
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
        </>
    );
};

export default Modal;
