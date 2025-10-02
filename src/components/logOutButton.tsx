
"use client"

import { signOut } from "next-auth/react"
import { Button } from "./ui/button"
import { LogOut } from "lucide-react"





export default function LogOutButton() {

    return (
        <Button
            onClick={() => signOut()}
            className="cursor-pointer">Logout
            <LogOut  />
        </Button>
    )
}