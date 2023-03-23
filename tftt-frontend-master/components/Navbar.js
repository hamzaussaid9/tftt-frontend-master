import Image from "next/image";
import { useContext } from "react";
import SessionContext from "../stores/SessionContext";
import logo from "../public/assets/cow_tri_tip.png";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";
export default function Navbar() {
  const { user, logout } = useContext(SessionContext);
  const { data: google_session } = useSession();

  const handleLogout = () => {
    fetch("/api/logout").then((res) => {
      if (res.status === 200) {
        logout();
        window.location.href = "/";
      }
    });
  };

  return (
    <nav className="font-serif border-gray-200 bg-custom-whitegray px-2 sm:px-4 py-2.5 rounded bg-navwhitegraysecondary shadow opacity-95 z-50 top-0 fixed w-screen m-0 flex h-20 max-h-20">
      <div className="container mx-auto flex justify-between items-center ">
        <Link href="/" className="flex items-center">
          <span className="self-center text-xl font-semibold whitespace-nowrap text-black">
            Tip For The Trip
          </span>
        </Link>
        <Link href="/" className="flex items-center">
          <Image
            src={logo}
            height={75}
            width={125}
            className="position-relative top-50 left-50"
            alt="Company Logo"
          />
        </Link>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 "
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              filerule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
        <div className="hidden md:flex md:items-center md:justify-between ">
          <ul className="flex flex-col md:flex-row md:items-center md:justify-between md:space-x-6">
            {/* <li>
              <Link href="/product">
                <a className="nav-link hover:text-white">Product</a>
              </Link>
            </li> */}
            <li>
              <Link href="/history">
                <a className="nav-link hover:text-white">History</a>
              </Link>
            </li>
            <li>
              <Link href="/store">
                <a className="nav-link hover:text-white">Store</a>
              </Link>
            </li>
            <li>
              <Link href="/news">
                <a className="nav-link hover:text-white">News</a>
              </Link>
            </li>
            <li>
              {(user || google_session) && (
                <Link href="" className="nav-link hover:text-white">
                  <a
                    onClick={() => handleLogout()}
                    className="nav-link hover:text-white"
                  >
                    Logout
                  </a>
                </Link>
              )}
              {!user && !google_session && (
                <Link href="/login" className="nav-link hover:text-white">
                  <a className="nav-link hover:text-white">Login</a>
                </Link>
              )}
            </li>
            {/* {
                                (google_session && !user) &&
                                    <li>
                                        <Link href="/account" className=" px-3 py-2">
                                            <Image src={google_session.user.image} width={50} height={50} alt="User Image" className="rounded-3xl hover:opacity-75 transition-opacity duration-300 hover:cursor-pointer" />
                                        </Link>
                                    </li>
                            } */}
          </ul>
        </div>
      </div>
    </nav>
  );
}
