"use client"
import { Plus } from "lucide-react";
import { Button } from "./button";
import { cn } from "@/lib/utils";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { useEffect, useRef, useState } from "react";
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { useSession } from "next-auth/react";
import { redirect, useRouter } from "next/navigation";
import { toast } from "sonner"
import { prisma } from "@/lib/prisma";
import { createProject } from "@/actions/create-project";


export default function CreateProject({ className }: {
    className?: string;
}) {
    const { status, data } = useSession()
    const [open, setOpen] = useState<boolean>(false);
    const inputRef = useRef<HTMLInputElement>(null)
    const router = useRouter()
    const [mounted, setMounted] = useState(false)
    useEffect(() => {
        setMounted(true)
    }, [])

    useEffect(() => {
        if (open == true && status == "unauthenticated") {
            console.log("unauth")
            setOpen(false)
            toast("You must be logged in to create a project")
            router.push("/login");
        }
    }, [open])

    if (!mounted) return null

    return (<>
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger className="">
                <Button variant={"default"} className={cn("w-full flex", className)}>Create Project <Plus /></Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Project Creation Dialog</DialogTitle>
                    <div className="mt-5">
                        <form onSubmit={async (e) => {
                            e.preventDefault()
                            //@ts-ignore
                            await createProject({ email: data?.user?.email!, provider: data?.user?.provider! as "github" | "google", title: inputRef.current?.value as string })
                            setOpen(false)
                        }} className="flex flex-col gap-2">
                            <p className="text-xs text-left font-light">
                                Name your project title
                            </p>
                            <Label htmlFor="projectName">Project Title</Label>
                            <Input id="projectName" placeholder="Science Exam 2" ref={inputRef}/>
                            <Button type="submit">Create</Button>
                        </form>
                    </div>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    </>)
}