import { MongoDBAdapter } from "@auth/mongodb-adapter"
import client from "@/lib/db"
import GoogleProvider from "next-auth/providers/google"
import { AuthOptions } from "next-auth"

export const authOptions : AuthOptions ={
  adapter: MongoDBAdapter(client),

    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
        })
    ]

}