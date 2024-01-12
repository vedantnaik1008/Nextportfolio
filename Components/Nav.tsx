'use client';
import { Link } from 'react-scroll';

type Props = {
    show: boolean;
    setShow: (show: boolean) => void;
};

const Navbar = ({ show, setShow }: Props) => {
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
                className='flex flex-col gap-1 md:hidden absolute top-5 right-5  '
                onClick={() => setShow(!show)}>
                <svg
                    stroke='currentColor'
                    fill='currentColor'
                    stroke-width='0'
                    viewBox='0 0 512 512'
                    color='white'
                    height='25px'
                    width='25px'
                    xmlns='http://www.w3.org/2000/svg'>
                    <path d='M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM64 256c0-17.7 14.3-32 32-32H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H96c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z'></path>
                </svg>
            </div>
        </nav>
    );
};

export default Navbar;
