import LeanPT from '@/images/leanPTImage.jpg';
import Image from 'next/image';

const experienceData = [
    {
        id: 1,
        companyName: 'Lean Platform Technologies',
        companyLogo: LeanPT,
        link: 'https://khambee.com/',
        linkName: 'Khambee',
        date: '3/Nov/2024',
        role: 'Frontend Developer Intern',
        project: [
            {
                id: 1,
                link: 'https://khambee.com/',
                linkName: 'Khambee',
                date: '3/Nov/2024',
                bulletPoints: [
                    {
                        id: 1,
                        description:
                            'Build multiple sections for Khambee product, build multiple themes for a multi page feature, and implement a Call-to-Action (CTA) feature.'
                    },
                    {
                        id: 2,
                        description:
                            'The optimization of image handling and display, and the development of a solution for creating multiple themes within the same project, which results in a smaller bundle size and less time spent on theme development.'
                    }
                ]
            },
        ]
    }
];

const Experience = () => {
    return (
        <>
            <section className='py-24 flex items-center' id='experience'>
                <div className='w-[95%] md:w-[90%] mx-auto'>
                    <h2
                        className={` h2 leading-tight text-center text-white mt-6`}>
                        Experience
                    </h2>

                    <article className='w-full max-w-[1440px] mx-auto'>
                        {experienceData.map((res) => (
                            <div
                                className='border-2 border-white rounded- p-2 flex flex-col justify-center md:justify-between md:flex-row md:items-start bg-white text-black w-full md:gap-2'
                                key={res.id}>
                                <figure className=''>
                                    <Image
                                        alt={res.companyName}
                                        height={100}
                                        width={100}
                                        src={res.companyLogo}
                                        className='rounded-xl'
                                        loading='lazy'
                                    />
                                    <figcaption>{res.companyName}</figcaption>
                                    <div className='flex flex-col'>
                                        <span className=''>{res.role}</span>
                                    </div>
                                </figure>

                                <div className='w-full md:w-1/2'>
                                    {res.project.map((proj) => (
                                        <>
                                            <div
                                                key={proj.id}
                                                className='flex flex-col md:flex-row items-start md:gap-2 md:items-center md:justify-between'>
                                                <a href={res.link} className=''>
                                                    {proj.id}{')'} Website:{' '}
                                                    <span className='underline'>
                                                        {res.linkName}
                                                    </span>
                                                </a>
                                                <span>date: {res.date}</span>
                                            </div>
                                            <div className='flex flex-col items-center gap-2 text-black w-full'>
                                                {proj.bulletPoints.map(
                                                    (point) => (
                                                        <div
                                                            key={point.id}
                                                            className='flex gap-2'>
                                                            <span className='bg-black w-2 h-2 rounded-full px-1 py-1 mt-3'></span>
                                                            <p className=''>
                                                                {
                                                                    point.description
                                                                }
                                                            </p>
                                                        </div>
                                                    )
                                                )}
                                            </div>
                                        </>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </article>
                </div>
            </section>
        </>
    );
};

export default Experience;
