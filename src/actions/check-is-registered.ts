"use server"

import { AuthType } from "@/generated/prisma";
import { prisma } from "@/lib/prisma";

export async function checkIsRegistered({provider, email}: {
    provider: string;
    email: string;
}) {
    const existingUser = await prisma.user.findFirst({
        where: {
            email: email,
            authType: provider as AuthType
        }
    })
    if(existingUser == null) {
        return false;
    }
    return true;
}