import { useEffect, useRef, useState } from 'react'

const useScroll = () => {
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
                behavior: 'smooth'
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
  return { ref, isVisible, handleClick }
}

export default useScroll