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
import { useEffect, useState } from "react";



export default function CreateProject({ className }: {
    className?: string;
}) {
    const [open, setOpen] = useState<boolean>(false);
    const [mounted, setMounted] = useState(false)
    useEffect(() => {
        setMounted(true)
    }, [])
    
    if (!mounted) return null

    return (<>
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger className="">
                <Button variant={"default"} className={cn("w-full flex", className)}>Create Project <Plus /></Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Project Creation Dialog</DialogTitle>
                    <DialogDescription>
                        Project Creation Section is in development.... Come back here later.
                    </DialogDescription>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    </>)
}