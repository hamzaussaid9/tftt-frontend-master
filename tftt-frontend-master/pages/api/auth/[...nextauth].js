import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import CredentialsProvider from "next-auth/providers/credentials"
export const authOptions = (req,res) => {
    return {
        // Configure one or more authentication providers
        providers: [

            CredentialsProvider({
                // The name to display on the sign in form (e.g. "Sign in with...")
                name: "Credentials",
                // `credentials` is used to generate a form on the sign in page.
                // You can specify which fields should be submitted, by adding keys to the `credentials` object.
                // e.g. domain, username, password, 2FA token, etc.
                // You can pass any HTML attribute to the <input> tag through the object.
                credentials: {
                username: { label: "Username", type: "text", placeholder: "jsmith" },
                password: { label: "Password", type: "password" }
                },
                async authorize(credentials) {
                    const response = await fetch(`${process.env.BACKEND_BASE_URL}/api/users/login/`, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({
                            email: credentials.username,
                            password: credentials.password,
                        }),
                    })

                    const json = await response.json()
                    const user = json.user
                    // console.log(user)

                    //retain loginJWT token in cookies
                    if(response.headers.get('Set-Cookie')){
                        const cookie = response.headers.get('Set-Cookie');
                        res.setHeader('Set-Cookie', cookie)
                    }

                    if (user) {
                        // Any object returned will be saved in `user` property of the JWT
                        return user
                    } else {
                        // If you return null then an error will be displayed advising the user to check their details.
                        return null
                        // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
                    }
                }
            }),
            GoogleProvider({
                clientId: process.env.GOOGLE_CLIENT_ID,
                clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            }
            ),
        ],
        secret: process.env.GOOGLE_JWT_SECRET,
        jwt: {
            encryption: true,
            secret: process.env.NEXT_AUTH_JWT_SECRET
          },
        callbacks : {
            //If it is a google login, adjust the user to have first_name and last_name instead of name
            async jwt({token, user, account, profile, isNewUser}) {
                if (account?.provider === "google") {
                    token.accessToken = account.access_token
                    token.user = user
                    token.first_name = profile.given_name
                    token.last_name = profile.family_name
                    // Create an account AND Login
                    const response = await fetch(`${process.env.BACKEND_BASE_URL}/api/users/signup/login/`, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({
                            email: profile.email,
                            first_name: profile.given_name,
                            last_name: profile.family_name,
                            user_role: "0",
                            password: "password",
                        }),
                    })
                    const json = await response.json()
                    //retain loginJWT token in cookies
                    if(response.headers.get('Set-Cookie')){
                        const cookie = response.headers.get('Set-Cookie');
                        res.setHeader('Set-Cookie', cookie)
                    }
                }
                return token
            },
            async session({session, token, user, profile}) {
                session.user.first_name = token.first_name
                session.user.last_name = token.last_name
                session.user.accessToken = token.accessToken
                return session

            }
        },
    }
}
// export default NextAuth(authOptions)
export default (req, res) => {
    return NextAuth(req, res, authOptions(req,res))
}
