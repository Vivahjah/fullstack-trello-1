
"use client"

import { signIn } from "next-auth/react"
import { Button } from "../ui/button"

export default function LoginViews() {


    return (
        <div className="w-full pt-8 text-center">
            <Button
                onClick={() => signIn("google")}
                className="cursor-pointer">Login</Button>
        </div>
    )
}