import {
  GetServerSidePropsContext,
  NextApiRequest,
  NextApiResponse,
} from "next";
import { NextAuthOptions } from "next-auth";
import { getServerSession } from "next-auth/next";

export const authOptions: NextAuthOptions = {
  // Secret for Next-auth, without this JWT encryption/decryption won't work
  secret: process.env.NEXTAUTH_SECRET,
  debug: false,
  // Configure one or more authentication providers
  pages: {
    signIn: "/login",
  },
  providers: [
    {
      id: "unidy",
      name: "Unidy",
      type: "oauth",
      version: "2.0",
      wellKnown: `${process.env.NEXT_PUBLIC_UNIDY_BASE_URL}/.well-known/openid-configuration`,
      accessTokenUrl: `${process.env.NEXT_PUBLIC_UNIDY_BASE_URL}/oauth/token`,
      requestTokenUrl: `${process.env.NEXT_PUBLIC_UNIDY_BASE_URL}/oauth/authorize`,
      profileUrl: `${process.env.NEXT_PUBLIC_UNIDY_BASE_URL}/oauth/userinfo`,
      token: {
        url: `${process.env.NEXT_PUBLIC_UNIDY_BASE_URL}/oauth/token`,
      },
      authorization: {
        params: {
          scope: "openid profile email address phone",
          client_id: process.env.NEXT_PUBLIC_UNIDY_CLIENT_ID,
        },
        url: `${process.env.NEXT_PUBLIC_UNIDY_BASE_URL}/oauth/authorize`,
      },

      async profile(profile, tokens) {
        // You can use the tokens, in case you want to fetch more profile information
        // For example several OAuth providers do not return email by default.
        // Depending on your provider, will have tokens like `access_token`, `id_token` and or `refresh_token`
        return {
          id: profile.sub,
          name: profile.name,
          email: profile.email,
        };
      },

      clientId: process.env.NEXT_PUBLIC_UNIDY_CLIENT_ID,
      clientSecret: process.env.UNIDY_CLIENT_SECRET,
    },
  ],
};

export function auth(
  ...args:
    | [GetServerSidePropsContext["req"], GetServerSidePropsContext["res"]]
    | [NextApiRequest, NextApiResponse]
    | []
) {
  return getServerSession(...args, authOptions);
}
