
import { useEffect, useState } from 'react'
import { ValidateEmail } from '../utils/Validation';
import { getSession } from '../utils/getSession';
import { getSession as getGoogleSession } from 'next-auth/react'
import Image from 'next/image'
import Link from 'next/link'
export default function SignIn() {
    // Store state for the Signup form
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [error, setError] = useState("");

    const ValidateSignupForm = () => {
        // Check that all fields are filled out
        if (email === "" || password === "" || confirmPassword === "" || firstName === "" || lastName === "") {
            setError("Please fill out all fields")
            return false
        }
        // Check that Name fields are between 2 and 30 characters
        if (firstName.length < 2 || firstName.length > 30 || lastName.length < 2 || lastName.length > 30) {
            setError("First and Last Name must be between 2 and 30 characters")
            return false
        }
        // Check that Passwords Match
        if (password !== confirmPassword) {
            setError("Passwords do not match")
            return false
        }
        // Check for valid email
        if (!ValidateEmail(email)) {
            setError("Invalid Email")
            return false
        }
        // Check that password is between 8 and 30 characters
        if (password.length < 8 || password.length > 30) {
            setError("Password must be between 8 and 30 characters")
            return false
        }
        // All checks passed
        return true
    }

    // Handle the form submission
    const handleSignup = async (e) => {
        e.preventDefault()
        if (!ValidateSignupForm()) {
            return
        }
        const res = await fetch(`${process.env.BACKEND_BASE_URL}/api/users/signup/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                first_name: firstName,
                last_name: lastName,
                email: email,
                password: password,
                user_role: 0,
            }),
        })
        const json = await res.json()
        if (!res.ok) {
            //console.log(json.email)
            setError(json.email)	// This is the error message from the backend
            return
        }
        // Login successful. Redirect to home page
        window.location.href = '/login?account_created=true'
    }



    return (
        <section className="h-screen">
            <div className="px-6 h-full text-gray-800">
                <div className="flex xl:justify-center lg:justify-between justify-center items-center flex-wrap h-full g-6">
                    <div className="grow-0 shrink-1 md:shrink-0 basis-auto xl:w-6/12 lg:w-6/12 md:w-9/12 mb-12 md:mb-0">
                        <Image src="/assets/cow_tri_tip.png" width={300} height={300} className="w-full" alt="Sample image" />
                    </div>
                    <div className="xl:ml-20 xl:w-5/12 lg:w-5/12 md:w-8/12 mb-12 md:mb-0">
                        {/* <form name="credentialsForm" id="credentialsForm" method="POST" action="/api/auth/callback/credentials">  */}
                        {/* Show Error message */}
                        <div className="text-red-500 text-center">
                            {error}
                        </div>

                        <form name="signupForm" id="signupForm" method="POST" action="http://localhost:8000/api/accounts/create-user/" onSubmit={(e) => handleSignup(e)}>
                            <div className="mb-6">
                                <label htmlFor="first_name" className="block mb-2 text-sm text-gray-600">First Name</label>
                                <input type="text" name="first_name" id="first_name" onChange={(event) => setFirstName(event.target.value)} className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="First Name" />
                            </div>
                            <div className="mb-6">
                                <label htmlFor="last_name" className="block mb-2 text-sm text-gray-600">Last Name</label>
                                <input type="text" name="last_name" id="last_name" onChange={(event) => setLastName(event.target.value)} className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Last Name" />
                            </div>

                            <div className="mb-6">
                                <label htmlFor="email" className="block mb-2 text-sm text-gray-600">Email</label>
                                <input type="text" name="email" id="email" onChange={(event) => setEmail(event.target.value)} className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Email address" />
                            </div>

                            <div className="mb-6">
                                <label htmlFor="password" className="block mb-2 text-sm text-gray-600">Password</label>
                                <input type="password" name="password" onChange={(event) => setPassword(event.target.value)} id="password" className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Password" />
                            </div>
                            <div className="mb-6">
                                <label htmlFor="password" className="block mb-2 text-sm text-gray-600">Confirm Password</label>
                                <input type="password" name="confirm-password" onChange={(event) => setConfirmPassword(event.target.value)} id="confirm-password" className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Confirm Password" />
                            </div>


                            <button type="submit" className="w-full px-4 py-2 text-xl font-normal text-white bg-custom-blue rounded transition ease-in-out duration-200 hover:bg-custom-whiteblue focus:outline-none focus:bg-custom-whiteblue hover:text-black">
                                Sign up
                            </button>
                        </form>

                        <div className="flex justify-center mt-6">
                            <Link href="/login" className="text-sm text-gray-600 hover:text-gray-800" >Already have an account?</Link>
                        </div>

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
    const google_session = await getGoogleSession({ req: context.req })

    if (session || google_session) {
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
