


import Board from "@/components/board";
import { liveblocksClient } from "@/lib/liveblocksClient"
import getUserEmail from "@/lib/userClient";


interface PageProps {
    params: {
        boardId: string;
    };

}

//getting room details from liveblocks using roomId from params
export default async function Boards({ params: { boardId } }: PageProps) {

    const userEmail = await getUserEmail() // get user email to verify access
    const boardInfo = await liveblocksClient.getRoom(boardId as string)//get room details from params

    //check if user has access to the room
    if (!boardInfo || !boardInfo.usersAccesses[userEmail]) {
        return <div>You do not have access to this board</div>
    }


    return (
        <div>

            <div>Boards : {boardInfo.metadata.boardName}</div>
            <Board />
        </div>
    )
}