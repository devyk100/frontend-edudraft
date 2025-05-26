"use server"
import { prisma } from "@/lib/prisma";

export async function createProject({
    email, provider, title
}: {
    email: string;
    provider: "google" | "github",
    title: string;
}) {
    const user = await prisma.user.findFirst({
        where: {
            email: email,
            authType: provider
        }
    })
    const project = await prisma.project.create({
        data: {
            userId: user?.id!,
            title: title,
            status: "draft"
        }
    })
    return true;
}