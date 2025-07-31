'use client';

import { useParams } from 'next/navigation';
import { projects } from '@/data/projects';
import Image from 'next/image';
import Link from 'next/link';

export default function ProjectDetailPage() {
    const { id } = useParams();
    const project = projects.find((p) => p.id.toString() === id);

    if (!project) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center text-center">
                <h1 className="text-3xl font-bold text-red-600">Project not found!</h1>
                <Link href="/projects" className="mt-4 text-primary underline">
                    Go back to Projects
                </Link>
            </div>
        );
    }
    return (
        <div className="min-h-screen py-10 px-4 md:px-8 bg-background text-foreground">
            {/* Project Image */}
            <div className="w-full max-w-4xl mx-auto mb-10 border border-border rounded-2xl shadow-lg overflow-hidden">
                <Image
                    src={project.image}
                    alt={project.title}
                    width={1200}
                    height={800}
                    className="object-cover w-full h-auto"
                    priority
                />
            </div>

            {/* Project Details */}
            <div className="max-w-4xl mx-auto text-center lg:text-left space-y-6">
                <h1 className="text-4xl font-bold text-primary">{project.title}</h1>

                {/* Overview  */}
                {project.overview && (
                    <section className="space-y-3">
                        <h4 className="text-xl font-medium">Overview</h4>
                        <p className="text-muted-foreground leading-relaxed">{project.overview}</p>
                    </section>
                )}

                {/* Deployment  */}
                {project.deployment && (
                    <section className="space-y-2">
                        <h4 className="text-xl font-semibold mb-3">Deployment</h4>
                        <ul className="list-disc list-inside text-muted-foreground">
                            {project.deployment.ios && (
                                <li>
                                    <a className="underline" href={project.deployment.ios} target="_blank">
                                        iOS App Store
                                    </a>
                                </li>
                            )}
                            {project.deployment.android && (
                                <li>
                                    <a className="underline" href={project.deployment.android} target="_blank">
                                        Google Play Store
                                    </a>
                                </li>
                            )}
                            {project.deployment.web && (
                                <li>
                                    <a className="underline" href={project.deployment.web} target="_blank">
                                        Web Version
                                    </a>
                                </li>
                            )}
                        </ul>
                    </section>
                )}

                {/* Tech Stack */}
                <div>
                    <h4 className="text-xl font-medium mb-3">Tech Stack:</h4>
                    <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                        {project.techStack.map((tech, index) => (
                            <div
                                key={index}
                                className="flex items-center gap-2 bg-muted px-3 py-1 rounded-full"
                            >
                                <Image src={tech.icon} alt={tech.name} width={20} height={20} />
                                <span className="text-sm">{tech.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );

}
