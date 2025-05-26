"use server"

import { prisma } from "@/lib/prisma"

export async function registerUser({ email, image, name, provider }: {
    email: string;
    name: string;
    image: string;
    provider: "google" | "github"
}) {
    try {
        const date = new Date();
        const user = await prisma.user.create({
            data: {
                email,
                name, image,
                authType: provider,
            }
        })
        if(user == null) {
            throw Error("User creation error")
        }
        return true;
    } catch(err) {
        return false;
    }
}