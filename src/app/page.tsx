
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
      <div className="text-4xl mb-4">Your boards</div>
      <div className="">
        <Link href="/new-board">
          <Button className="cursor-pointer">
            New Board <Plus />
          </Button>
        </Link>
      </div>
    </div>
  )
}
