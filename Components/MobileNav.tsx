import React from 'react'
import { Link } from 'react-scroll';

type Props = {
    show: boolean;
    setShow: (show: boolean) => void;
};

const MobileNav = ({ show, setShow }: Props) => {
  return (
                    <div
                        className={
                            show
                                ? 'md:hidden xs:p-4'
                                : 'px-2 sm:px-6  md:hidden'
                        }>
                        <div
                            className='flex flex-col items-center sm:items-center justify-center gap-6 p-1'
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
               
  )
}

export default MobileNav
