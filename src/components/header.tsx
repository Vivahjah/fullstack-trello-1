

import { authOptions } from "@/lib/authOptions"
import { getServerSession } from "next-auth"
import Image from "next/image"
import LogOutButton from "./logOutButton"
import Link from "next/link"

export default async function Headers() {
    const session = await getServerSession(authOptions)
    return (
        <header className="flex justify-between items-center bg-gray-200 p-4">
          <Link href={"/"} className="text-2xl font-bold text-primary">Trello</Link>
            {session?.user && (
                <div>
                    <span className="mr-3">Hello, {session.user.name}</span>
                    <LogOutButton /> 
                                      
                </div>
            )}
        </header>
    )
  }