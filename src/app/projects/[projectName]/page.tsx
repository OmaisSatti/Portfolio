'use client';

import projects from '@/data/projects.json';
import Image from 'next/image';

export default function ProjectPage() {
    // const params = useParams();

    return (
        <div className='flex flex-col lg:flex-row items-center justify-evenly py-10 px-4 md:px-8 shadow-inner shadow-green-500/15 bg-background'>
            {/* Left Content */}
            <div className='flex flex-col justify-center order-2 lg:order-none max-w-[600px] text-center lg:text-left'>
                <h2 className='text-4xl text-primary font-bold mb-10'>{projects[0].title}</h2>
                <p className='text-foreground'>{projects[0].description}</p>
            </div>

            {/* Right Image */}
            <div className='order-1 lg:order-none mb-10 lg:mb-0 border rounded-2xl border-border'>
                <Image
                    src={projects[0].image}
                    alt={projects[0].title}
                    width={400}
                    height={300}
                    className='rounded-3xl object-cover shadow-lg'
                    priority
                />
            </div>
        </div>
    );
}