import Board from "@/components/board";
import LoginViews from "@/components/views/loginViews";
import { authOptions } from "@/lib/authOptions";
import { getServerSession } from "next-auth";

export default async function Home() {

  const session = await getServerSession(authOptions);
  
  console.log(session, "session");
  if(!session){
    return (
      <LoginViews />
    )
  }
  return (
  <div>
    <div className="text-4xl">
      Your Board
    </div>
    <p>goes here ...</p>
    {/* <Board /> */}
  </div>
  )
}
