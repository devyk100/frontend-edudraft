import { useSession, signOut } from "next-auth/react"
import { Avatar, AvatarFallback, AvatarImage } from "./avatar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Button } from "./button"

export default function UserInfo() {
  const { data: session } = useSession()

  if (!session?.user) return null

  return (
    <div className="p-2">
      <Popover>
        <PopoverTrigger className="hover:cursor-pointer">
          <Avatar className="w-9 h-9">
            <AvatarImage
              className="w-9 h-9"
              src={session.user.image || ""}
              alt={session.user.name || "User Avatar"}
              onError={() => console.error("Failed to load avatar")}
            />
            <AvatarFallback>{session.user.name?.[0] ?? "U"}</AvatarFallback>
          </Avatar>
        </PopoverTrigger>
        <PopoverContent className="w-fit">
          <div className="flex flex-col gap-1 min-w-[200px]">
            <h3 className="font-light p-2">{session.user.name}</h3>
            <Button
              variant={"secondary"}
              size={"sm"}
              className="p-0 w-full font-normal text-sm"
            >
              More info
            </Button>
            <Button
              variant={"default"}
              size={"sm"}
              className="p-0 w-full text-sm font-normal"
              onClick={() => signOut()}
            >
              Sign Out
            </Button>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  )
}
