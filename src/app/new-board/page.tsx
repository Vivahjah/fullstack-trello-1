
"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

const FormSchema = z.object({
  boardName: z.string().min(2, "Board name must be at least 2 characters." ),
})

export default  function NewBoardPage() {


  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      boardName: "",
    },
  })

  
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(() => {
        console.log("submit");
      })} className="max-w-xs space-y-2">
        <FormField
          control={form.control}
          name="boardName"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-xl text-primary">Create a board</FormLabel>
              <FormControl>
                <Input placeholder="New board" {...field} />
              </FormControl>            
              <FormMessage />
            </FormItem>
          )}
        />
        <Button className="w-full cursor-pointer">
            Submit
        </Button>
      </form>
    </Form>
  )
}
