"use client"

import SessionData from '@src/components/SessionData'
import { signIn, signOut } from 'next-auth/react'

export default function Home() {
  return (
    <div>
      <button onClick={() => signIn("github")} >SignIn Github</button>
      <button onClick={() => signIn("credentials", {
        email: "arthurfelandrade@gmail.com",
        password: "123456",

      })} >SignIn Credentials</button>
      <button onClick={() => signIn()} >SignIn Global</button>
      <button onClick={() => signOut()} >SignOut</button>
    </div>
  )
}
