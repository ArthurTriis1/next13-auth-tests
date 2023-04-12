"use client"

import SessionData from '@src/components/SessionData'
import { signIn, signOut } from 'next-auth/react'

export default function Home() {
  return (
    <div>
      <button onClick={() => signIn()} >SignIn</button>
      <button onClick={() => signOut()} >SignOut</button>
    </div>
  )
}
