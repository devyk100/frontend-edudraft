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



export default function CreateProject({ className }: {
    className?: string;
}) {
    return (<>
        <Dialog>
            <DialogTrigger>
                <Button variant={"default"} className={cn("w-full flex items-center justify-center", className)}>Create Project <Plus /></Button>
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