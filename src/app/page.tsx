
import Boards from "@/components/boards";
import { Button } from "@/components/ui/button";
import LoginViews from "@/components/views/loginViews";
import { authOptions } from "@/lib/authOptions";
import { Plus } from "lucide-react";
import { getServerSession } from "next-auth";
import Link from "next/link";

export default async function Home() {

  const session = await getServerSession(authOptions);

  if (!session) {
    return (
      <LoginViews />
    )
  }
  return (
    <div>
      <h1 className="text-4xl mb-4">Your boards</h1>
      <Boards />
      <div className="mt-4">
        <Link href="/new-board">
          <Button className="cursor-pointer">
            New Board <Plus />
          </Button>
        </Link>
      </div>
    </div>
  )
}
