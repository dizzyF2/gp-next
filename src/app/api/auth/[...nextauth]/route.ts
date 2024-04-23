import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"

const handler = NextAuth({
    providers: [
        CredentialsProvider({
            credentials: {
            email: {},
            password: {}
            },
            async authorize(credentials, req) {
              /* Video 28:10 */
            console.log({credentials})
            return null
        }
        })
    ]
})

export {handler as GET, handler as POST};