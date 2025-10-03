
"use server"


import getUserEmail from "@/lib/userClient";
import { Liveblocks, RoomData } from "@liveblocks/node";
import uniqid from "uniqid";




export async function createBoard(name: string): Promise<boolean | RoomData> {

    const liveblocksClient = new Liveblocks({
        secret: process.env.LIVEBLOCKS_SECRET_KEY as string,
    });

  
    const email = await getUserEmail()

    if (email) {
        const roomId = uniqid.time()
       return await liveblocksClient.createRoom(roomId, {
            defaultAccesses: [],
            usersAccesses: {
                [email]: ["room:write"], // give the current user write access
            },
            metadata : {boardName : name}
        })

    }







    return false;
}

