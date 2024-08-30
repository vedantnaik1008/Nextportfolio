import Html from '@/public/assets/svg/skills/html.svg';
import Css from '@/public/assets/svg/skills/css.svg';
import Tailwind from '@/public/assets/svg/skills/tailwind.svg';
import Js from '@/public/assets/svg/skills/javascript.svg';
import react1888 from '@/public/assets/svg/skills/rrrrr.svg';
import Typescript from '@/public/assets/svg/skills/typescript.svg';
import Nextjs from '@/public/assets/svg/skills/nextjs.svg';
import apolloClient from '@/public/assets/17189275.png';
import Tanstack from '@/public/assets/svg/skills/tanstackquery.svg';
import Redux from '@/public/assets/svg/skills/redux.svg';
import RouterDom from '@/public/assets/svg/skills/reactrouterdom.svg';
import GraphQl from '@/public/assets/svg/skills/garphql.svg';
import Webpack from '@/public/assets/svg/skills/webpack.svg';
import Github from '@/public/assets/svg/skills/github.svg';
import Netlify from '@/public/assets/svg/skills/netlify.svg';
import VsCode from '@/public/assets/svg/skills/vscode.svg';
import Figma from '@/public/assets/svg/skills/figma.svg';
import vercel from '@/public/assets/0_BV1dRBYoYd9jKYW8.png';
import { SkillsType } from '@/types';

export const LanguagesData: SkillsType[] = [
    {
        id: 1,
        height: 100,
        width: 100,
        alt: 'Html',
        src: Html
    },
    { id: 2, src: Css, height: 100, width: 100, alt: 'Css' },
    { id: 3, src: Tailwind, height: 100, width: 100, alt: 'Tailwind' },
    { id: 4, src: Js, height: 100, width: 100, alt: 'Js' },
    { id: 5, src: react1888, height: 100, width: 100, alt: 'React 18' }, // Assuming react1888 is imported correctly
    { id: 6, src: Typescript, height: 100, width: 100, alt: 'Typescript' },
    { id: 7, src: Nextjs, height: 100, width: 100, alt: 'Next.js' },
    { id: 8, src: apolloClient, height: 100, width: 100, alt: 'Apollo Client' },
    { id: 9, src: Tanstack, height: 100, width: 100, alt: 'Tanstack Query' },
    { id: 10, src: Redux, height: 100, width: 100, alt: 'Redux' },
    {
        id: 11,
        src: RouterDom,
        height: 100,
        width: 100,
        alt: 'React Router DOM'
    },
    { id: 12, src: GraphQl, height: 100, width: 100, alt: 'GraphQl' },
    { id: 13, src: Webpack, height: 100, width: 100, alt: 'Webpack' }
];

export const HoistingData = [
    { id: 1, src: Github, height: 100, width: 100, alt: 'GitHub' },
    { id: 2, src: Netlify, height: 100, width: 100, alt: 'Netlify' },
    { id: 3, src: vercel, height: 100, width: 100, alt: 'Vercel' }
];

export const ToolsData = [
    { id: 1, src: VsCode, height: 100, width: 100, alt: 'Visual Studio Code' },
    { id: 2, src: Figma, height: 100, width: 100, alt: 'Figma' }
];