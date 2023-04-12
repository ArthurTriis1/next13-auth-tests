import NextAuth, { AuthOptions, User } from "next-auth"
import GithubProvider from "next-auth/providers/github"
export const authOptions: AuthOptions = {
  // Configure one or more authentication providers
  providers: [
    GithubProvider({
      clientId: String(process.env.GITHUB_ID),
      clientSecret: String(process.env.GITHUB_SECRET),
    }),
  ],
  callbacks: {
    async signIn({ account, profile }) {

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