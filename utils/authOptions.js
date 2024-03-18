import GoogleProvider from "next-auth/providers/google";

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
    }),
  ],
  callbacks: {
    // Called on successful signin
    async signIn({ account, profile }) {
      // 1. Connect to the DB
      // 2. Check if usere already exists
      // 3. if not add to DB
      // 4. Return true to allow sign in
    },
    // Modifies the session object
    async session({ session }) {
      // 1. Get user from DB
      // 2. Assign session id
      // 3. return that session
    },
  },
};
