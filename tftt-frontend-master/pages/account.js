import { useEffect, useState } from 'react';
import { getSession } from '../utils/getSession'

// TO DO: Integrate the function to edit and update contacts.

export default function Account({session,orders}) {
  
  const [user, setUser] = useState({})

  useEffect(() => {
    fetch(`${process.env.BACKEND_BASE_URL}/api/users/${session.user_id}`)
      .then((res) => res.json())
      .then(({data}) => {
        console.log(data)
        setUser(data.user)
        // console.log(user)
      })
  }, []);

function handleSubmit(event) {
  event.preventDefault();
  // Send a FETCH request to update the user's subscription status
  fetch(`${process.env.BACKEND_BASE_URL}/api/users/${session.user_id}/`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      is_subscribed: user.is_subscribed // toggle the subscription status
    })
  })
    .then(res => res.json())
    .then(({data}) => {
      console.log(data)
    })
    .catch(error => console.error(error));
}

function handleInfoSave(event) {
  event.preventDefault();

  // Send a FETCH request to update the user's information
  fetch(`${process.env.BACKEND_BASE_URL}/api/users/${session.user_id}/`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      first_name: user.first_name,
      last_name: user.last_name,
      // email: user.email, (Is this a unique identifier?)
    })
  })
    .then(res => res.json())
    .then(({data}) => {
      console.log(data)
    })
    .catch(error => console.error(error));
}

// For account info change
const handleInputChange = (event) => {
  setUser({
    ...user,
    [event.target.name]: event.target.value,
  });
};

// For newsletter subscription
function toggleSubscriptionStatus(subscriptionStatus) {
  console.log(subscriptionStatus)
  var newUserState={
    ...user,
    is_subscribed: subscriptionStatus,
  }
  setUser(newUserState)
  console.log(user)
}

  return (

<div>
    <div className="bg-gray-50">
      <header className="relative bg-white shadow-sm h-72">
        <div className="absolute top-0 w-full h-full bg-center bg-cover" style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1499336315816-097655dcfbda?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=2710&amp;q=80')"
        }}>
          <span id="blackOverlay" className="w-full h-full absolute opacity-50 bg-black"></span>
        </div>
        <div className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px" style={{ transform: "translateZ(0px)" }}>
          <svg className="absolute bottom-0 overflow-hidden" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" version="1.1" viewBox="0 0 2560 100" x="0" y="0">
            <polygon className="text-blueGray-200 fill-current" points="2560 0 2560 100 0 100"></polygon>
          </svg>
        </div>
      </header>
      <section className="relative py-16 bg-blueGray-200">
        <div className="container mx-auto px-4">
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64">
            <div className="px-6">

              <div className="text-center mt-12">
                <h3 className="text-4xl font-semibold leading-normal  text-blueGray-700 mb-2">
                  {user.first_name} {user.last_name}
                </h3>
                <div className="text-sm flex fex-wrap justify-center mt-0 mb-2 text-blueGray-400  uppercase">
                  <span className="mr-2 text-lg text-blueGray-400">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>

                  </span>
                  1000 Userdrive Greenville VA 55844
                </div>

              </div>

              <div className="mt-4 py-4 border-t border-blueGray-200 text-center">
                <div className="flex flex-wrap justify-center">
                  <div className="w-full lg:w-9/12 px-4">

                  </div>
                </div>
              </div>
              <form id="password-reset-form" className="px-4 pb-4">
                <div className="grid grid-cols-8 gap-8 ">
                  <div className="col-span-full md:col-span-2">
                    <h3 className=" text-lg  text-blueGray-700 font-medium text-gray-500">
                      Reset User Password
                    </h3>
                  </div>
                  <div className="col-span-full md:col-span-2 ">
                    <input type="text" name="password" id="password" placeholder="Password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                  </div>

                  <div className="col-span-full md:col-span-2 ">
                    <input type="text" name="password-verify" id="password-verify" placeholder="Re-type password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                  </div>

                  <div className="col-span-full md:col-span-2 ">
                    <button className="mt-1 block w-full  border-gray-300  focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm bg-blue-500 active:bg-blue-600  uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded-full outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150" type="button">
                      Reset password
                    </button>
                  </div>
                </div>
              </form>

            </div>
          </div>
        </div>
      </section>

{/* Newsletter Subscription */} 
<div className="flex justify-center w-full">
  <div className="bg-white text-center shadow-xl rounded-lg p-4">
    <form onSubmit={handleSubmit}>
        <label htmlFor="subscription" className="block text-gray-700 font-bold mb-2">
           Subscribe to our newsletter!
         </label>
        <input
          type="checkbox"
          id="subscription"
          defaultChecked={user.is_subscribed}
          onClick={(event) =>toggleSubscriptionStatus(event.target.checked)}
          className="shadow border rounded w-4 h-4 mr-2 leading-tight focus:outline-none focus:shadow-outline"
        />
        <label htmlFor="subscription" className="text-gray-700 leading-tight">
          Subscribe me to the newsletter!
        </label>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ml-4"
        >
          Update
        </button>
    </form>
  </div>
</div>

{/* Fields to update account information */}
<div className="flex justify-center py-16">
  <div className="w-1/2 bg-white shadow-xl rounded-lg p-8">
    <form onSubmit={handleInfoSave}>
      <h1 className="text-2xl font-bold mb-4">Update Account Profile</h1>
      <div className="mb-4">
        <label htmlFor="firstName" className="block text-gray-700 font-bold mb-2">
          First Name
        </label>
        <input
          type="text"
          name="first_name"
          defaultValue={user.first_name}
          onChange={(event)=> handleInputChange(event)}
          className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="lastName" className="block text-gray-700 font-bold mb-2">
          Last Name
        </label>
        <input
          type="text"
          name="last_name"
          defaultValue={user.last_name}
          onChange={(event)=> handleInputChange(event)}
          className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="streetAddress" className="block text-gray-700 font-bold mb-2">
          Street Address
        </label>
        <input
          type="text"
          name="street_address"
          defaultValue={0}
          onChange={(event)=> handleInputChange(event)}
          className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="zipCode" className="block text-gray-700 font-bold mb-2">
          Zip Code
        </label>
        <input
          type="text"
          name="zip_code"
          defaultValue={0}
          onChange={(event)=> handleInputChange(event)}
          className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
          Email
        </label>
        <input
          type="text"
          name="email"
          defaultValue={user.email}
          onChange={(event)=> handleInputChange(event)}
          className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="phoneNumber" className="block text-gray-700 font-bold mb-2">
          Phone Number
        </label>
        <input
          type="text"
          name="phone_number"
          defaultValue={0}
          onChange={(event)=> handleInputChange(event)}
          className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="flex justify-center">
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Save
        </button>
      </div>
    </form>
  </div>
</div>

      <main className="container mx-auto px-4">
        <div className="mt-16 mx-auto px-8">
          <h1 className="text-2xl font-extrabold tracking-tight text-slate-700 sm:text-3xl">Order History</h1>
          <p className="mt-2 text-sm text-gray-500">Check the status of recent orders and track shipping.</p>
        </div>

        <section className="mt-16">

          <div className="container mx-auto px-4">
            <div className="mx-auto space-y-4 px-4">
              <div className="relative bg-slate-50 rounded-xl overflow-hidden dark:bg-slate-800/25">
                <div className="relative rounded-xl overflow-auto">
                  <div className="shadow-sm overflow-hidden my-8">
                    <table className="border-collapse table-fixed w-full text-sm">
                      <thead>
                        <tr>
                          <th className="border-b dark:border-slate-600 font-medium p-4 pl-8 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left">Order</th>
                          <th className="border-b dark:border-slate-600 font-medium p-4 pl-8 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left">Date</th>

                          <th className="border-b dark:border-slate-600 font-medium p-4 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left">Payment Status</th>
                          <th className="border-b dark:border-slate-600 font-medium p-4 pr-8 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left">Fulfillment Status</th>
                          <th className="border-b dark:border-slate-600 font-medium p-4 pr-8 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left">Track Order</th>
                          <th className="border-b dark:border-slate-600 font-medium p-4 pr-8 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left">Total Cost</th>


                        </tr>
                      </thead>
                      <tbody className="bg-white dark:bg-slate-800">
                        {
                          orders.map(order => (
                            <tr key={order.orderId}>
                              <td className="border-b border-slate-200 dark:border-slate-600 p-4 pl-8 text-slate-500 dark:text-slate-400">{order.orderId}</td>
                              <td className="border-b border-slate-200 dark:border-slate-600 p-4 text-slate-500 dark:text-slate-400">{order.orderDate}</td>
                              <td className="border-b border-slate-200 dark:border-slate-600 p-4 pr-8 text-slate-500 dark:text-slate-400">{order.paymentStatus}</td>
                              <td className="border-b border-slate-200 dark:border-slate-600 p-4 pr-8 text-slate-500 dark:text-slate-400">{order.fulfillmentStatus}</td>
                              <td className="border-b border-slate-200 dark:border-slate-600 p-4 pr-8 text-slate-500 dark:text-slate-400">
                                <a href="#" className="group relative  underline hover:text-blue-500 duration-300 flex items-center justify-center bg-white py-2 px-2.5 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                  <span> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                                    <path fillRule="evenodd" d="M15.312 11.424a5.5 5.5 0 01-9.201 2.466l-.312-.311h2.433a.75.75 0 000-1.5H3.989a.75.75 0 00-.75.75v4.242a.75.75 0 001.5 0v-2.43l.31.31a7 7 0 0011.712-3.138.75.75 0 00-1.449-.39zm1.23-3.723a.75.75 0 00.219-.53V2.929a.75.75 0 00-1.5 0V5.36l-.31-.31A7 7 0 003.239 8.188a.75.75 0 101.448.389A5.5 5.5 0 0113.89 6.11l.311.31h-2.432a.75.75 0 000 1.5h4.243a.75.75 0 00.53-.219z" clipRule="evenodd" />
                                  </svg>
                                    <span
                                      className="absolute hidden group-hover:block -left-1/4 bottom-2 -translate-y-full w-48 px-2 py-1 bg-gray-700 text-center text-white text-sm">
                                      Click here to get shipping updated</span>
                                  </span>
                                </a>
                              </td>
                              <td className="border-b border-slate-200 dark:border-slate-600 p-4 pr-8 text-slate-500 dark:text-slate-400">${order.totalCost.toFixed(2)}</td>

                            </tr>
                          ))}
                      </tbody>
                    </table>
                  </div>
                </div><div className="absolute inset-0 pointer-events-none border border-black/5 rounded-xl dark:border-white/5">
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* this sets the footer down below */}
      <footer className="relative bg-black text-white pt-0 pb-0 mt-72">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center md:justify-between justify-center">
            <div className="w-full md:w-6/12 px-4 mx-auto text-center">
        
            </div>
          </div>
        </div>
      </footer>
    
    </div>
    </div>
  )
}


// Runs on Server before page load.
export async function getServerSideProps(context) {
	// decode JWT and return as user object
	const session = await getSession(context.req)
	if(!session ){ // User is NOT logged in
		return {
			redirect: {
				destination: '/login',
				permanent: false,
			}
		}
	}
  return { // User is logged in
    props: {
      session: session,
      orders:[
        {
          orderId: "#1003",
          orderDate: "Jun 25, 2022",
          paymentStatus: "Authorized",
          fulfillmentStatus: "Jun 25, 2022",
          totalCost: 85.66
        },
        {
          orderId: "#1004",
          orderDate: "Jun 29, 2022",
          paymentStatus: "Authorized",
          fulfillmentStatus: "Jun 29, 2022",
          totalCost: 57.87
        }
      ]
    }
  }
}