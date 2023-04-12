import NextAuth, { AuthOptions, User } from "next-auth"
import GithubProvider from "next-auth/providers/github"
import CredentialsProvider from 'next-auth/providers/credentials';
export const authOptions: AuthOptions = {
  // Configure one or more authentication providers
  providers: [
    GithubProvider({
      clientId: String(process.env.GITHUB_ID),
      clientSecret: String(process.env.GITHUB_SECRET),
    }),
    CredentialsProvider({
      id: 'credentials',
      name: 'my-project',
      credentials: {
        email: {
          label: 'email',
          type: 'email',
          placeholder: 'jsmith@example.com',
        },
        password: { label: 'Password', type: 'password' }
      },
      async authorize(credentials) {

        if(
          credentials?.email === "arthurfelandrade@gmail.com" && 
          credentials?.password === "123456"
        ){
          return {
            login: "ArthurTriis1",
            "id": "51174217",
            "avatar_url": "https://avatars.githubusercontent.com/u/51174217?v=4",
            "email": "arthurfelandrade@gmail.com",
            "name": "Arthur Andrade"
          }
        }

        return null;
      },
    }),
  ],
  callbacks: {
    async signIn({ account, profile }) {

      if(account?.provider === "credentials"){
        return true
      }

      if(account?.provider !== "github"){
        return false
      }

      let isAllowedToSignIn = true
      const allowedUser = [
        'ArthurTriis1',
      ];
      if (allowedUser.includes(String(profile?.login))) {
        isAllowedToSignIn = true
      }
      else {
        isAllowedToSignIn = false
      }
      return isAllowedToSignIn
    },
    session: async ({ session, token }) => {
      session.user = token.user as User
      return Promise.resolve(session);
    },
    jwt({ token, profile }) {
        if(profile) {
          token.user = {
            login: profile.login,
            id: profile.id,
            avatar_url: profile.avatar_url,
            email: profile.email,
            name: profile.name,
          }
        }

        return token
    },
  }
}

export default NextAuth(authOptions)
