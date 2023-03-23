
import { useState, useContext } from 'react'
import SessionContext from '../stores/SessionContext'
import { getSession } from '../utils/getSession'
import { useSession, signIn, signOut } from 'next-auth/react'
import { ValidateEmail } from '../utils/Validation';
import Image from 'next/image'
import Link from 'next/link'
export default function Login({ session}) {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const { login } = useContext(SessionContext)

    const ValidateLoginForm = () => {
        if (email === "" || password === "") {	// Check that all fields are filled out
            setError("Please fill out all fields")
            return false
        }
        if (!ValidateEmail(email)) {	// Check for valid email
            setError("Invalid Email")
            return false
        }
        return true	// All checks passed
    }
    // Validate and submit the Login Form.
    const handleLogin = (event) => {
        event.preventDefault()
        if (!ValidateLoginForm()) {
            return
        }
        fetch(`${process.env.BACKEND_BASE_URL}/api/users/login/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: email,
                password: password
            }),
            credentials: 'include'
        })
            // If response 200, then login was successful. Redirect to account page
            .then((res) => {
                if (res.status === 200) {
                    res.json().then((data) => {
                        // User is logged in.  Redirect to account page
                        login(data.user)	// Set user in context
                        window.location.href = '/account'
                    })
                }
                else {
                    res.json().then((data) => {
                        setError(data.detail)
                        return
                    })
                }
            });
    }
    return (
        <section className="h-screen">
            <div className="px-6 h-full text-gray-800">
                <div className="flex xl:justify-center lg:justify-between justify-center items-center flex-wrap h-full g-6">
                    <div className="">
                        <Image src="/assets/logo.png" height={500} width={500} alt="Sample image" />
                    </div>
                    <div className="xl:ml-20 xl:w-5/12 lg:w-5/12 md:w-8/12 mb-12 md:mb-0">
                        <div className="text-red-500 text-center">
                            {error}
                        </div>
                        <form name="credentialsForm" id="credentialsForm" method="POST" action="/api/auth/callback/credentials">
                            <button type="button" onClick={(event) => signIn('domain-login')} className="w-full px-4 py-2 text-xl font-normal text-white bg-custom-blue rounded transition ease-in-out duration-200 hover:bg-custom-whiteblue focus:outline-none focus:bg-custom-whiteblue hover:text-black my-2">
                                Log in
                            </button>
                            <button type="button" onClick={(event) => signIn('google')} className="w-full px-4 py-2 text-xl font-normal text-white bg-custom-blue rounded transition ease-in-out duration-200 hover:bg-custom-whiteblue focus:outline-none focus:bg-custom-whiteblue hover:text-black my-2">
                                Log in with Google
                            </button>
                            <div className="flex justify-between items-center mt-6">
                                <div className="text-sm leading-5">
                                    <Link href="/forgot-password" >
                                        <a className="font-medium text-custom-blue hover:text-blue-200 focus:outline-none focus:underline transition ease-in-out duration-150">
                                            Forgot your password?
                                        </a>
                                    </Link>
                                </div>
                            </div>
                            <div className="flex justify-center items-center mt-6">
                                <div className="border-b w-1/5 lg:w-1/4"></div>
                                <div className="text-gray-500 uppercase px-2 text-xs lg:text-sm font-medium">or</div>
                                <div className="border-b w-1/5 lg:w-1/4"></div>
                            </div>
                            <div className="text-center mt-6">
                                <span className="text-gray-800">Don&apos;t have an account?</span>
                                <Link href="/signup" >
                                    <a className="text-custom-blue hover:text-blue-200"> Sign up</a>
                                </Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

//Runs on Server before page load.
export async function getServerSideProps(context) {
    // decode JWT and return as user object
    const session = await getSession(context.req)

    if (session) {
        return {
            redirect: {
                destination: '/account',
                permanent: false,
            }
        }
    }
    return {
        props: {
            user: null
        }
    }
}
