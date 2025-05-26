import GoogleProvider from "next-auth/providers/google"
import GitHubProvider from "next-auth/providers/github"
import NextAuth, { NextAuthOptions } from "next-auth"
import { checkIsRegistered } from "@/actions/check-is-registered"
import { registerUser } from "@/actions/register-user"


declare module "next-auth" {
  interface Session {
    provider?: string;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    provider?: string;
  }
}


export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
    GitHubProvider({
      clientId: process.env.GITHUB_CLIENT_ID!,
      clientSecret: process.env.GITHUB_CLIENT_SECRET!,
    }),
  ],
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/login",
  },
  callbacks: {
    async signIn({ user, account }) {
      try {
        const provider = account?.provider! as "google" | "github"
        const isRegistered = await checkIsRegistered({ email: user.email!, provider: provider! });
        if (isRegistered) {
          return true;
        } else {
          await registerUser({email: user.email!, image: user.image!, name: user.name!, provider});
          return true;
        }
      } catch (error) {
        return false;
      }
    },
    async jwt({ token, account }) {
      if (account) {
        token.provider = account.provider;
      }
      return token;
    },

  }
}
