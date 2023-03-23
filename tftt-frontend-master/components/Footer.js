import Link from "next/link";
import {
  FaInstagram,
  FaStripe,
  FaGooglePay,
  FaTwitter,
  FaFacebook,
  FaYoutube,
  FaCcApplePay,
  FaCcVisa,
  FaCcMastercard,
  FaCcAmex,
} from "react-icons/fa";
import { GrAmex } from "react-icons/gr";
import { RiMastercardLine } from "react-icons/ri";
import { SiApplepay, SiVisa, SiDiscover } from "react-icons/si";
import { BsPaypal } from "react-icons/bs";

export default function Footer() {
  return (
    <div className="w-full">
      <div className="bg-custom-whitegray flex flex-col text-center">
        <div className=" h-1/2 w-full flex md:flex-row flex-col p-0 justify-center gap-x-10">
          <div className="m-2 my-auto">
            <Link href="/home">
              <a>
                <span className="text-yellow-500 font-bold text-2xl pb-4">
                  {" "}
                  TIP
                </span>
                <span className="text-blue-500 font-bold text-2xl pb-4">
                  for
                </span>
                <span className="text-red-600 font-bold text-2xl pb-4">
                  The
                </span>
                <span className="text-green-600 font-bold text-2xl pb-4">
                  TRIP
                </span>
              </a>
            </Link>
            <ul className="flex justify-center gap-6 pb-5 ">
              <li>
                <a href="http://www.instagram.com">
                  <FaInstagram className="text-3xl  text-gray-800 hover:opacity-60" />
                </a>
              </li>
              <li>
                <a href="http://www.twitter.com">
                  <FaTwitter className="text-3xl text-blue-500 hover:opacity-60 " />
                </a>
              </li>
              <li>
                <a href="http://www.facebook.com">
                  <FaFacebook className="text-3xl text-blue-600 hover:opacity-60" />
                </a>
              </li>
              <li>
                <a href="https://www.youtube.com">
                  <FaYoutube className="text-3xl text-red-600 hover:opacity-60" />
                </a>
              </li>
            </ul>
          </div>
          <div className="m-2">
            <p className="text-custom- font-bold text-2xl pb-4">
              BBQ Help Center
            </p>
            <ul>
              <Link href="/about">
                <a>
                  <li className="text-black hover:text-custom-navygreen text-md pb-2 font-semibold ">
                    Where to Find Local Farm Fresh Beef
                  </li>
                </a>
              </Link>
              <Link href="/about">
                <a>
                  <li className="text-black hover:text-custom-navygreen text-md pb-2 font-semibold ">
                    Top Smokers 2022
                  </li>
                </a>
              </Link>
              <Link href="/about">
                <a>
                  <li className="text-black hover:text-custom-navygreen text-md pb-2 font-semibold ">
                    Why is My Tri-Tip Chewy?
                  </li>
                </a>
              </Link>
              <Link href="/about">
                <a>
                  <li className="text-black hover:text-custom-navygreen text-md pb-2 font-semibold ">
                    FAQ
                  </li>
                </a>
              </Link>
            </ul>
          </div>
          <div className="m-2">
            <p className="text-custom-navgreen font-bold text-2xl pb-4">
              Products
            </p>
            <ul>
              <Link href="/about">
                <a>
                  <li className="text-black hover:text-custom-navygreen text-md pb-2 font-semibold ">
                    Ready for The Trip!
                  </li>
                </a>
              </Link>
              <Link href="/about">
                <a>
                  <li className="text-black hover:text-custom-navygreen text-md pb-2 font-semibold ">
                    Seasonal Blends
                  </li>
                </a>
              </Link>
              <Link href="/about">
                <a>
                  <li className="text-black hover:text-custom-navygreen text-md pb-2 font-semibold ">
                    Rubs & Seasonings
                  </li>
                </a>
              </Link>
              <Link href="/about">
                <a>
                  <li className="text-black hover:text-custom-navygreen text-md pb-2 font-semibold ">
                    BBQ Accessories
                  </li>
                </a>
              </Link>
            </ul>
          </div>
          <div className="m-2">
            <p className="text-black font-bold text-2xl pb-4">Company</p>
            <ul>
              <Link href="/about">
                <a>
                  <li className="text-black hover:text-custom-navygreen text-md pb-2 font-semibold ">
                    About Us
                  </li>
                </a>
              </Link>
              <Link href="/about">
                <a>
                  <li className="text-black hover:text-custom-navygreen text-md pb-2 font-semibold ">
                    Products
                  </li>
                </a>
              </Link>
              <Link href="/about">
                <a>
                  <li className="text-black hover:text-custom-navygreen text-md pb-2 font-semibold ">
                    Pricing
                  </li>
                </a>
              </Link>
              <Link href="/about">
                <a>
                  <li className="text-black hover:text-custom-navygreen text-md pb-2 font-semibold ">
                    Where is My Order?
                  </li>
                </a>
              </Link>
              <Link href="/about">
                <a>
                  <li className="text-black hover:text-custom-navygreen text-md pb-2 font-semibold ">
                    Media & Legal
                  </li>
                </a>
              </Link>
            </ul>
          </div>
          <div className="m-2">
            <ul>
              <p className="text-black font-bold text-2xl pb-4">
                Contact Information:{" "}
              </p>
              <li className=" text-blue-500 text-md pb-2 font-semibold">
                Jesse Baker
              </li>
              <li className="text-blue-500 text-md pb-2 font-semibold">
                tipforthetrip00@gmail.com
              </li>
              <li className="text-blue-500 text-md pb-2 font-semibold">
                (916) 555-7777
              </li>
              {/* <li className="text-blue-500 text-md pb-2 font-semibold">
									Mailing: PO Box #7 123 Main Street, Roseville, CA 95678
								</li> */}
            </ul>
          </div>
        </div>
        <div className="flex justify-center  text-center">
          <div>© 2022 Copyright TFTT</div>
          <div className="flex flex-row">
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
            <SiApplepay className="text-3xl text-black-600 text-center " />
            <p> &nbsp;&nbsp;</p>
            <GrAmex className="text-3xl text-black-600 text-center " />
            <p> &nbsp;&nbsp;</p>
            <RiMastercardLine className="text-3xl text-black-600 text-center " />
            <p> &nbsp;&nbsp;</p>
            <SiVisa className="text-3xl text-black-600 text-center " />
            <p> &nbsp;&nbsp;</p>
            <BsPaypal className="text-2xl text-black-300 text-center " />
            <p> &nbsp;&nbsp;</p>
            <FaGooglePay className="text-3xl text-black-300 text-center " />
            <p> &nbsp;&nbsp;</p>
            <SiDiscover className="text-3xl text-black-300 text-center " />
            <p> &nbsp;&nbsp;</p>
            <FaStripe className="text-3xl text-black-300 text-center " />
          </div>
        </div>
      </div>
    </div>
  );
}
