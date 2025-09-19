
"use client"

import { signIn } from "next-auth/react"

export default function LoginViews() {


    return (
        <div className="w-full pt-8 text-center">
            <button
                onClick={() => signIn("google")}
                type="button" className="cursor-pointer">Login</button>
        </div>
    )
}