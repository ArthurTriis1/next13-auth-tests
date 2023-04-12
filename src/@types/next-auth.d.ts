import NextAuth from "next-auth";

declare module "next-auth" {
    interface User {
      login: string
      id: string
      avatar_url: string
      email: string
      name: string
    };

  interface Session {
    user: User
  }

  interface Profile {
    login: string
    id: string
    avatar_url: string
    email: string
    name: string
  }
}