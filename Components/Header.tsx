'use client';
import { useEffect, useRef, useState } from 'react';
import Nav from './Nav';
import { BiSolidUpArrow } from 'react-icons/bi';

const Header = () => {
    const ref = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    const handleScroll = () => {
        if (window.scrollY > 500) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const handleClick = () => {
        if (ref.current) {
            const offset = 100;
            const targetPosition = ref.current?.offsetTop - offset;
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth',
            });
        }
    };

    useEffect(() => {
        const onScroll = () => {
            const scrollPosition = window.scrollY;
            if (scrollPosition > 80) {
                document.getElementById('navbar')?.classList.add('shad');
            } else {
                document.getElementById('navbar')?.classList.remove('shad');
            }
        };

        window.addEventListener('scroll', onScroll);

        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <div
                className='py-2 px-4 fixed z-50 bg-transparent backdrop-blur-3xl w-full'
                ref={ref}
                id='navbar'>
                <div className=''>
                    <div className='flex justify-between items-center'>
                        <a href='#' className=''>
                            <h1 className='text-white font-bold font-cursi'>
                                Vedant.Dev
                            </h1>
                        </a>
                        <Nav />
                    </div>
                </div>
            </div>
            {isVisible && (
                <button
                    onClick={handleClick}
                    className='p-4 border-[#5a5a5a] border-[2px] text-white bg-[#181818]  rounded-md  fixed right-2 bottom-10 z-40 hover:opacity-70 transition-all duration-100'>
                    <BiSolidUpArrow />
                </button>
            )}
        </>
    );
};

export default Header;
