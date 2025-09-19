
"use client"

import { signOut } from "next-auth/react"





export default function LogOutButton() {
   
    return (
        <button
        onClick={() => signOut()}
         className="bg-gray-300 py-2 px-4 ml-2 cursor-pointer">Logout</button>                    
    )
}