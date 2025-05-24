"use client"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
    NavigationMenuViewport,
} from "@/components/ui/navigation-menu"
import { Hamburger, Menu, Plus } from "lucide-react"
import Link from "next/link"
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer"
import { Button } from "./button"
import CreateProject from "./create-project"
import { useState } from "react"


export default function NavBar() {
    const [open, setOpen] = useState<boolean>(false)
    return (<>
        <Drawer open={open} onOpenChange={setOpen}>
            <DrawerTrigger className="block sm:hidden p-2">
                <Menu className="w-10 h-10"/>
            </DrawerTrigger>
            <DrawerContent>
                <DrawerHeader>
                    <DrawerTitle>Navigation Menu</DrawerTitle>
                </DrawerHeader>
                <div className="flex flex-col p-2 gap-2">
                    <Link href={"/projects"}>
                        <Button variant={"outline"} className="w-full" onClick={() => setOpen(false)}>My Projects</Button>
                    </Link>
                    <Link href={"/login"}>
                        <Button variant={"outline"} className="w-full" onClick={() => setOpen(false)}>Login</Button>
                    </Link>
                    <CreateProject />
                </div>
                <DrawerFooter>
                    <DrawerClose>
                        <Button variant="ghost">Cancel</Button>
                    </DrawerClose>
                </DrawerFooter>
            </DrawerContent>
        </Drawer>

        <div className="border-b-2 fixed sm:flex px-10 hidden top-0 left-0 min-w-screen">
            <NavigationMenu className="w-[500px] justify-start">
                <NavigationMenuList className="items-center">
                    <NavigationMenuItem className="hover:cursor-pointer">
                        <Link href="/" legacyBehavior passHref>
                            <h1 className="w-full h-full text-center p-3 text-xl font-bold select-none">
                                EduDraft
                            </h1>
                        </Link>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <Link href="/dashboard" legacyBehavior passHref>
                            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                My Projects
                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <Link href="/login" legacyBehavior passHref>
                            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                Login
                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <CreateProject className="p-0" />
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>
        </div>

    </>)
}