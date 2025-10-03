


import { liveblocksClient } from "@/lib/liveblocksClient"


interface PageProps {
    params: {
        boardId: string;
    };

}

//getting room details from liveblocks using roomId from params
export default async function Boards({ params: { boardId } }: PageProps) {






    const boardInfo = await liveblocksClient.getRoom(boardId as string)//get room details from params

    return (
        <div>Boards : {boardInfo.metadata.boardName}</div>
    )
}