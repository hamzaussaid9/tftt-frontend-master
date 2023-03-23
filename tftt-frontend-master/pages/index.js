import styles from "../styles/Home.module.css";
import meatMatrixItems from '../public/testData/test_meatMatrixItems'
import Image from "next/image";
import MeatMatrix from "../components/MeatMatrix";
import Link from "next/link";

export default function Home() {
  return (
	<div>
		<div className="flex flex-col h-screen">
			<div className="flex-1 flex items-center">
				<div className="w-0 sm:w-1/2 lg:w-1/2 h-full bg-cover bg-center" style={{backgroundImage: "url('assets/smoked-tritip.png')"}}>
				</div>
				<div className="w-full sm:w-1/2 lg:w-1/2  h-full bg-cover bg-center" style={{backgroundImage: "url('assets/yosemite-hiking2.png')"}}>
					<div className="flex flex-col justify-center items-center h-full text-center font-bold text-white font-serif ">
						<div className="sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-white font-bold">
							<h1>Welcome to Tip for the Trip!</h1>
							<p className="leading-loose">Sign Up to Keep Track of Your Orders!</p>
							<button className="bg-custom-green hover:bg-green-700 text-white font-bold py-2 px-4 border border-custom-green rounded">
								<Link href="/signup" >
									<a className="text-white">Sign Up</a>
								</Link>
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>

		<div className="flex flex-col justify-center items-center text-center font-bold font-serif" style={{backgroundImage: "url('assets/yosemite.png')"}}>
			<MeatMatrix items={meatMatrixItems} />
			<div className="text-sm text-center text-white font-serif mb-4 w-2/3">
				<div className="object-center">
					<p className="text-center bg-custom-whitegray/80 rounded-lg sm:txt-xl md:text-2xl lg:text-3xl xl:text-4xl">
						Our Mission <br></br>
						We strive to deliver great quality meats and service to ensure
						that you enjoy a piece of our Tri-Tip wherever your next adventure
						takes you.
					</p>
				</div>
 			</div>
		</div>
	</div>

  );
}
