'use client'

import { signIn } from "next-auth/react"
import { Button } from "@/components/ui/button"
import { FaGithub, FaGoogle } from "react-icons/fa"

export default function LoginPage() {
  return (
    <div className="max-h-screen min-h-[500px] flex flex-col items-center justify-center space-y-4">
      <Button onClick={() => signIn("google")}>Sign in with Google <FaGoogle/> </Button> 
      <Button onClick={() => signIn("github")}>Sign in with GitHub <FaGithub /></Button>
    </div>
  )
}
