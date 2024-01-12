import Html from '@/public/iconsImages/html.webp'
import Css from '@/public/iconsImages/css.webp'
import Tailwind from '@/public/iconsImages/tailwind-css.webp'
import js from '@/public/iconsImages/java-script.webp'
import Typescript from '@/public/iconsImages/typescript-1.webp'
import Reactjs from '@/public/iconsImages/react.webp'
import Redux from '@/public/iconsImages/redux.webp'
import Nextjs from '@/public/iconsImages/next-js-logo.webp';
import { StaticImageData } from 'next/image'

type Props={
    id: number;
    img: StaticImageData,
}

export const iconsImagesdata = [
    { id: 1, img: Html },
    { id: 2, img: Css },
    { id: 3, img: Tailwind },
    { id: 4, img: js },
    { id: 5, img: Typescript },
    {  id: 6, img: Reactjs },
    { id: 7, img: Redux },
    { id: 8, img: Nextjs },
]