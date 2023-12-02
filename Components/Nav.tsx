'use client';
import { Link } from 'react-scroll';
import { useState } from 'react';
import { FaBarsStaggered } from "react-icons/fa6";

const Navbar: React.FC = () => {
    const [show, setShow] = useState(false);
    return (
        <nav className=''>
            <div className='xs:hidden md:block  mx-auto'>
                <div className='md:flex md:items-center md:justify-center md:gap-8 md:h-16'>
                    <Link
                        href='home'
                        to='home'
                        activeClass='active-on'
                        smooth={true}
                        spy={true}
                        offset={-200}
                        className='cursor-pointer active text-white'>
                        Home
                    </Link>
                    <Link
                        href='skills'
                        to='skills'
                        activeClass='active-on'
                        smooth={true}
                        spy={true}
                        offset={-10}
                        className='cursor-pointer active text-white'>
                        Skills
                    </Link>
                    <Link
                        href='about'
                        to='about'
                        activeClass='active-on'
                        smooth={true}
                        spy={true}
                        className='cursor-pointer  active text-white'>
                        About
                    </Link>
                    <Link
                        href='work'
                        to='work'
                        activeClass='active-on'
                        smooth={true}
                        spy={true}
                        offset={15}
                        className='cursor-pointer  active text-white'>
                        Projects
                    </Link>
                    <Link
                        href='contact'
                        to='contact'
                        offset={-28}
                        activeClass='active-on'
                        smooth={true}
                        spy={true}
                        className='cursor-pointer  active text-white'>
                        Contact
                    </Link>
                </div>
            </div>
            <div
                className='flex flex-col gap-1 md:hidden absolute top-3 right-5  '
                onClick={() => setShow(!show)}>
                {/* <span className='w-[25px] h-[4px] bg-white rounded-sm'></span>
                <span className='w-[18px] h-[4px] ml-auto bg-white rounded-sm'></span>
                <span className='w-[10px] h-[4px] ml-auto bg-white rounded-sm'></span> */}
                <FaBarsStaggered size="25px" color="white"/>
            </div>
            
                <div className={show ? '-z-10 h-[100vh] xs:transition-all xs:duration-500 xs:ease-out xs:-translate-y-0 md:hidden   xs:p-4 absolute top-[50px] left-0  w-[100%] bg-[#131313] rounded-sm' : '-z-10 h-[100vh] xs:-translate-y-[200%] xs:transition-all xs:duration-500 xs:ease-out  px-2 sm:px-6 absolute top-[50px] left-0  w-[100%] bg-[#131313] rounded-sm md:hidden'}>
                        <div
                            className='flex flex-col items-start sm:items-center justify-center gap-4 p-1'
                            onClick={() => setShow(!show)}>
                            <Link
                                href='home'
                                to='home'
                                smooth={true}
                                spy={true}
                                offset={-200}
                                className='cursor-pointer active text-white'>
                                Home
                            </Link>
                            <Link
                                href='skills'
                                to='skills'
                                smooth={true}
                                spy={true}
                                offset={-20}
                                className='cursor-pointer active text-white'>
                                Skills
                            </Link>
                            <Link
                                href='about'
                                to='about'
                                smooth={true}
                                spy={true}
                                className='cursor-pointer  active text-white'>
                                About
                            </Link>
                            <Link
                                href='work'
                                to='work'
                                smooth={true}
                                spy={true}
                                offset={5}
                                className='cursor-pointer  active text-white'>
                                Projects
                            </Link>
                            <Link
                                href='contact'
                                to='contact'
                                smooth={true}
                                spy={true}
                                offset={-10}
                                className='cursor-pointer  active text-white'>
                                Contact
                            </Link>
                        </div>
                </div>
        </nav>
    );
};

export default Navbar;
