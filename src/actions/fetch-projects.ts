import { prisma } from "@/lib/prisma";

export async function fetchProjects({
    email, authType
}: {
    email: string;
    authType: "google" | "github"
}) {
    const user = await prisma.user.findFirst({
        where: {
            email, authType
        }
    })
    const projects = await prisma.project.findMany({
        where: {
            userId: user?.id
        }
    })
    return projects;
}