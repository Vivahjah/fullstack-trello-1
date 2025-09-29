

import { authOptions } from "@/lib/authOptions"
import { getServerSession } from "next-auth"
import Image from "next/image"
import LogOutButton from "./logOutButton"

export default async function Headers() {
    const session = await getServerSession(authOptions)
    return (
        <header className="flex justify-between items-center bg-gray-200 p-4">
          <a href="" className="text-2xl font-bold text-primary">Trello</a>
            {session?.user && (
                <div>
                    <span className="mr-3">Hello, {session.user.name}</span>
                    <LogOutButton />                   
                </div>
            )}
        </header>
    )
  }