import { socials } from "@/data/Socials";
import  Link  from "next/link";

const Footer = () => {
    return (
        <div className='py-5 border-t-[#5a5a5a] border-t-2 mx-auto w-[90%]'>
            <div className=' flex sm:justify-between justify-center items-center gap-10 max-sm:flex-col py-5'>
                <p className='caption text-white lg:block'>
                    © {new Date().getFullYear()}. All rights reserved.
                </p>
                <ul className='flex gap-5 flex-wrap'>
                    {socials.map((link)=> (
                        <li key={link.id}>
                            <Link href={link.url}>{link.iconUrl}</Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Footer;
