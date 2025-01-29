'use client';
import { Link } from 'react-scroll';
import MenuSvg from './MenuSvg';

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
                        href='experience'
                        to='experience'
                        activeClass='active-on'
                        smooth={true}
                        spy={true}
                        offset={-10}
                        className='cursor-pointer active text-white'>
                        Experience
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
                        offset={20}
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
                className='flex flex-col gap-1 md:hidden absolute top-[26px] right-5  '
                onClick={() => setShow(!show)}>
                <MenuSvg show={show} />
            </div>
        </nav>
    );
};

export default Navbar;
