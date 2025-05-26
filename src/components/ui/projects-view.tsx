'use client';

import { fetchProjects } from '@/actions/fetch-projects';
import { $Enums } from '@/generated/prisma';
import { dataTagErrorSymbol, useQuery } from '@tanstack/react-query';

export default function ProjectsClient({
    initialProjects,
    email,
    authType,
}: {
    initialProjects: any[];
    email: string;
    authType: 'google' | 'github';
}) {
    const { data: projects, isLoading, error } = useQuery({
        queryKey: ['projects', email, authType],
        queryFn: async () => {
            return await fetchProjects({ authType: authType, email: email })
        },
        initialData: initialProjects,
    });

    console.log(projects, "are the projects")

    return (
        <div className='w-screen'>
            {projects.map((project: {
                id: string;
                title: string;
                institute: string | null;
                class: string | null;
                subject: string | null;
                total_marks: number | null;
                status: $Enums.ProjectStatus;
                version: string | null;
                userId: number;
            }) => (
                <div className='bg-red-500 h-full w-full' key={project.id}>{project.title}</div>
            ))}
        </div>
    );
}
