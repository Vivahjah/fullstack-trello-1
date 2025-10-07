import { authOptions } from "@/lib/authOptions";
import { liveblocksClient } from "@/lib/liveblocksClient";
import { getServerSession } from "next-auth";

export async function POST(request: Request) {
  const session = await getServerSession(authOptions)
  const user = session?.user

  if (!user) {
    return new Response("Unauthorized", { status: 401 });
  }
    

  // Identify the user and return the result
  const { status, body } = await liveblocksClient.identifyUser(
    {
      userId: user.email as string,
      groupIds : [], // Optional
    },
    { 
      userInfo: {
        name: user.name as string,
        email: user.email as string,
        image : user.image as string,
      }
    },
  );

  return new Response(body, { status });
}