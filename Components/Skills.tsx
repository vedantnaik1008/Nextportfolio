'use client'
import { motion } from 'framer-motion'
import { animationProps} from '@/variants'
import { SiNextdotjs, SiJavascript, SiTailwindcss, SiTypescript, SiReact, SiRedux, SiHtml5, SiCss3 } from 'react-icons/si'
const Icons = [
  {id: '1', icon: <SiHtml5 size={50}/>},
  {id: '2', icon: <SiCss3 size={50}/>},
  {id: '3', icon: <SiTailwindcss size={50}/>},
  {id: '4', icon: <SiJavascript size={50}/>},
  {id: '5', icon: <SiTypescript size={50}/>},
  {id: '6', icon: <SiReact size={50}/>},
  {id: '7', icon: <SiRedux size={50}/>},
  {id: '8', icon: <SiNextdotjs size={50}/>},
]

const Skills = () => {

  return (
    <section className="section" id="skills">
      <motion.div className="container mx-auto"  {...animationProps}>
        <h2 className="h2 leading-tight text-center text-white">My Skills</h2>
        <div className="flex flex-wrap gap-[60px] justify-center mt-[50px]">
            {Icons.map((icon) => (
               <div key={icon.id} className="text-[#FFFFFF]  hover:opacity-70  transition duration-1500 ease-in">{icon.icon}</div>
            ))}
        </div>
      </motion.div>
    </section>
  )
}

export default Skills
