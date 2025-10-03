"use client"



import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { createBoard } from "../actions/boardActions"
import { redirect } from "next/navigation"





export default function NewBoardPage() {
  async function handleSubmit(formData: FormData) {
    const boardName = formData.get("boardName")
    const {id} = await createBoard(boardName as string)
    redirect(`/board/${id}`)
    // console.log({boardId})

    


  }


  return (
    <div className="max-w-xs ">
      <form action={handleSubmit} className="space-y-2">
        <Label htmlFor="boardName" className="text-lg">Board Name</Label>
        <Input name="boardName" placeholder="Enter board name" />
        <Button type="submit" className="w-full cursor-pointer">Create board</Button>

      </form>
    </div>

  )
}