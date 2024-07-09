import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    })
  ],
  // Optional debug mode
  debug: true,
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      console.log('Sign In:', { user, account, profile, email, credentials });
      return true;
    },
    async redirect({ url, baseUrl }) {
      console.log('Redirect:', { url, baseUrl });
      return baseUrl;
    },
    async session({ session, token, user }) {
      console.log('Session:', { session, token, user });
      return session;
    },
    async jwt({ token, user, account, profile, isNewUser }) {
      console.log('JWT:', { token, user, account, profile, isNewUser });
      return token;
    }
  }
});
