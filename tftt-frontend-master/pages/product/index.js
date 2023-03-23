import React, { useEffect, useState } from "react";
import { randomId } from "utils/Helper";
import { useRouter } from "next/router";
import ViewImage from "@/components/ViewImage";
import Head from "next/head";
import Image from 'next/image'
// icons
import { BsSearch } from "react-icons/bs";
import { FiArrowRight, FiArrowLeft } from "react-icons/fi";
import { RxDot, RxDotFilled } from "react-icons/rx";

const mobileView = window.innerWidth <= 480 ? true : false;

const ProductView = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [toggleSearch, setToggleSearch] = useState(false);
  const [frameImg, setFrameImg] = useState("/assets/product/product.jpg");
  const imgArr = [
    "/assets/product/product.jpg",
    "/assets/product/product2.jpg",
    "/assets/product/product3.jpg",
    "/assets/product/product4.jpg",
    "/assets/product/product5.jpg",
  ];
  const [navbar, setNavbar] = useState(false);
  const [imagePath, setImagePath] = useState("");
  const [show, setShow] = useState(false);

  const reviews = [
    {
      name: "Virendra Arekar",
      designation: "Full Stack Developer",
      image: "/assets/product/avatar5.jpg",
      description: "Awesome test with delicious memory.",
    },
    {
      name: "Tia Rodritch",
      designation: "Assistant Manager",
      image: "/assets/product/avatar1.jpg",
      description: "Awesome test with delicious memory.",
    },
    {
      name: "Kane Williams",
      designation: "Food Distributer",
      image: "/assets/product/avatar4.png",
      description: "Awesome test with delicious memory.",
    },
    {
      name: "John Doe",
      designation: "Food Lover",
      image: "/assets/product/avatar3.jpg",
      description: "Awesome test with delicious memory.",
    },
    {
      name: "Mandell Brick",
      designation: "Food Lover",
      image: "/assets/product/avatar2.png",
      description: "Awesome test with delicious memory.",
    },
  ];

  const [review, setReview] = useState([0, 1, 2]);
  const [mobileReviewIndex, setMobileReviewIndex] = useState(0);

  let router = useRouter();

  const [screenSize, setScreenSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    function handleResize() {
      setScreenSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
      mobileView = window.innerWidth <= 480 ? true : false;
    }

    handleResize();
    

    window.addEventListener("resize", handleResize);

    return () => {

      window.removeEventListener("resize", handleResize);
    };
  }, [window.innerWidth]);

  const showProduct = () => {
    router.push(`/product/${randomId(10)}`);
  };

  const mobileNext = () => {
    let length = reviews.length - 1;
    if (mobileReviewIndex < length) {
      setMobileReviewIndex(mobileReviewIndex + 1);
    } else {
      setMobileReviewIndex(0);
    }
  };

  const mobilePrevious = () => {
    let length = reviews.length - 1;
    if (mobileReviewIndex !== 0) {
      setMobileReviewIndex(mobileReviewIndex - 1);
    } else {
      setMobileReviewIndex(length);
    }
  };

  const slide = [
    [0, 1, 2],
    [1, 2, 3],
    [2, 3, 4],
    [3, 4, 0],
    [4, 0, 1],
  ];
  const desktopNext = () => {
    for (var i = 0; i < slide.length; i++) {
      if (JSON.stringify(slide[i]) === JSON.stringify(review)) {
        if (JSON.stringify(review) === "[4,0,1]") {
          setReview([0, 1, 2]);
        } else {
          setReview(slide[i + 1]);
        }
      } else {
      }
    }
  };

  const desktopPrevious = () => {
    for (var i = 0; i < slide.length; i++) {
      if (JSON.stringify(slide[i]) === JSON.stringify(review)) {
        if (JSON.stringify(review) === "[0,1,2]") {
          setReview([4, 0, 1]);
        } else {
          setReview(slide[i - 1]);
        }
      } else {
      }
    }
  };

  const zoomImage = (url) => {
    setImagePath(url);
    setShow(true);
  };

  return (
    <>
      <Head>
        <title>Product</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {show && (
        <ViewImage imagePath={imagePath} show={show} setShow={setShow} />
      )}

      {screenSize?.width <= 480 ? (
        <div
          className="pb-14"
          style={{
            backgroundImage: `url(/assets/product/bg-image.jpg)`,
            backgroundSize: "cover",
            backgroundAttachment: "fixed",
            backgroundPosition: "center",
          }}
        >
          <nav className="w-full bg-[#8E7E7E] text-white shadow">
              <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
                  <div>
                      <div className="flex items-center justify-between py-3 md:py-5 md:block">
                          <Link to="#">
                              <h2 className="text-2xl font-bold">TIP FOR THE TRIP</h2>
                          </Link>
                          <div className="md:hidden">
                              <button
                                  className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                                  onClick={() => setNavbar(!navbar)}
                              >
                                  {navbar ? (
                                      <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          className="w-6 h-6"
                                          viewBox="0 0 20 20"
                                          fill="white"
                                      >
                                          <path
                                              fillRule="evenodd"
                                              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                              clipRule="evenodd"
                                          />
                                      </svg>
                                  ) : (
                                      <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          className="w-6 h-6"
                                          fill="white"
                                          viewBox="0 0 24 24"
                                          stroke="white"
                                          strokeWidth={2}
                                      >
                                          <path
                                              strokeLinecap="round"
                                              strokeLinejoin="round"
                                              d="M4 6h16M4 12h16M4 18h16"
                                          />
                                      </svg>
                                  )}
                              </button>
                          </div>
                      </div>
                  </div>
                  <div>
                      <div
                          className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                              navbar ? "block" : "hidden"
                          }`}
                      >
                          <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                              <li className="text-white hover:text-blue-600">
                                  <Link to="#">ABOUT</Link>
                              </li>
                              <li className="text-white hover:text-blue-600">
                                  <Link to="#">HISTORY</Link>
                              </li>
                              <li className="text-white hover:text-blue-600">
                                  <Link to="#">STORE</Link>
                              </li>
                              <li className="text-white hover:text-blue-600">
                                  <Link to="#">NEWS</Link>
                              </li>
                              <li className="text-white hover:text-blue-600">
                                  <Link to="#">LOGIN</Link>
                              </li>
                              <li className="text-white hover:text-blue-600">
                                  
                                <form className="flex items-center">   
                                    <label htmlFor="simple-search" className="sr-only">Search</label>
                                    <div className="relative w-full">
                                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                            <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path></svg>
                                        </div>
                                        <input type="text" id="simple-search" className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full pl-10 p-2.5 placeholder-black" placeholder="Search" required />
                                    </div>
                                    <button type="submit" className="p-2.5 ml-2 text-sm font-medium text-white bg-gray-700 rounded-lg border border-gray-800">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                                        <span className="sr-only">Search</span>
                                    </button>
                                </form>

                              </li>
                          </ul>
                      </div>
                  </div>
              </div>
          </nav> 
          <div className="bg-[#D9D9D9] p-5 rounded-md h-96">
            <Image
              src={frameImg}
              className="w-full h-full object-cover"
              style={{ width: "100%" }}
              onClick={() => zoomImage(frameImg)}
              alt="detail product"
              width={300}
              height={350}
            />
          </div>
          <div className="flex justify-center items-center space-x-6 bg-[#D9D9D9] rounded-md h-fit p-3 mt-3">
            <div
              className="h-9 rounded w-9 cursor-pointer border-2 p-0.5 border-gray-600"
              onClick={() => setFrameImg("/assets/product/product.jpg")}
            >
              <Image
                src={"/assets/product/product.jpg"}
                style={{ height: "100%", width: "100%" }}
                alt="detail product"
                width={300}
              height={350}
              />
            </div>
            <div
              className="h-9 rounded w-9 cursor-pointer border-2 p-0.5 border-gray-600"
              onClick={() => setFrameImg("/assets/product/product2.jpg")}
            >
              <Image
                src={"/assets/product/product2.jpg"}
                style={{ height: "100%", width: "100%" }}
                alt="detail product"
                width={300}
              height={350}
              />
            </div>
            <div
              className="h-9 rounded w-9 cursor-pointer border-2 p-0.5 border-gray-600"
              onClick={() => setFrameImg("/assets/product/product3.jpg")}
            >
              <Image
                src={"/assets/product/product3.jpg"}
                style={{ height: "100%", width: "100%" }}
                alt="detail product"
                width={300}
              height={350}
              />
            </div>
            <div
              className="h-9 rounded w-9 cursor-pointer border-2 p-0.5 border-gray-600"
              onClick={() => setFrameImg("/assets/product/product4.jpg")}
            >
              <Image
                src={"/assets/product/product4.jpg"}
                style={{ height: "100%", width: "100%" }}
                alt="detail product"
                width={300}
              height={350}
              />
            </div>
            <div
              className="h-9 rounded w-9 cursor-pointer border-2 p-0.5 border-gray-600"
              onClick={() => setFrameImg("/assets/product/product5.jpg")}
            >
              <Image
                src={"/assets/product/product5.jpg"}
                style={{ height: "100%", width: "100%" }}
                alt="detail product"
                width={300}
              height={350}
              />
            </div>
            <div className="flex justify-end items-center">
              <FiArrowRight
                className="text-[#00000070] cursor-pointer h-7 w-auto"
                onClick={() => {
                  setFrameImg(
                    imgArr[Math.floor(Math.random() * imgArr.length)]
                  );
                }}
              />
            </div>
          </div>
          <div className="grid grid-cols-1 gap-8 my-4">
            <div className="">
              <div className="bg-[#D9D9D9] rounded-md py-4 px-3">
                <h4 className="font-bold px-4">Description :</h4>
                <p className="text-sm px-4 pb-2">
                  {"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.".slice(
                    0,
                    400
                  )}{" "}
                  ...
                </p>
              </div>

              <div className="">
                <div className="text-white font-bold py-2 px-4">$19.99</div>
                <div className="py-2 px-4">
                  <button className="bg-yellow-50 hover:bg-yellow-100 text-black py-1 px-4 rounded-lg text-xs">
                    Add To Cart
                  </button>

                  <button className="bg-yellow-50 hover:bg-yellow-100 text-black py-1 px-4 rounded-lg text-xs mx-4">
                    Add To Favorite
                  </button>
                </div>
                <div className="bg-[#D9D9D9] py-4 px-3 rounded-md mt-10">
                  <h4 className="font-bold px-4">More info :</h4>
                  <p className="text-sm px-4">
                    {"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.".slice(
                      0,
                      screenSize.width > 1024 ? 400 : 200
                    )}{" "}
                    ...
                  </p>
                </div>
              </div>

              {/* <div className="bg-[#D9D9D9] h-28"></div> */}
            </div>
            <div className="bg-[#D9D9D9] px-8 p-4 rounded-md">
              <h1 className="text-center font-bold">Related Items</h1>
              <div className="bg-[#C7B4B4] mt-2" onClick={showProduct}>
                <Image
                  src={"/assets/product/product.jpg"}
                  className="h-20 w-full cursor-pointer"
                  alt="detail product"
                  width={330}
              height={90}
                />
                <h3 className="bg-[#505050]">Product1: $19.19</h3>
              </div>

              <div className="bg-[#C7B4B4] mt-6" onClick={showProduct}>
                <Image
                  src={"/assets/product/product4.jpg"}
                  className="h-20 w-full cursor-pointer"
                  alt="detail product"
                  width={330}
                  height={90}
                />
                <h3 className="bg-[#505050]">Product2: $39.22</h3>
              </div>

              <div className="h-20 bg-[#C7B4B4] my-6" onClick={showProduct}>
                <Image
                  src={"/assets/product/product2.jpg"}
                  className="h-20 w-full cursor-pointer"
                  alt="detail product"
                  width={330}
                  height={90}
                />
                <h3 className="bg-[#505050]">Product3: $16.39</h3>
              </div>
            </div>
          </div>
          <div className="bg-[#D9D9D9]  px-8 p-6">
            <h1 className="text-center font-bold">Reviews</h1>
            <div className="relative bg-[#C7B4B4] mt-6 p-4 mb-2">
              <FiArrowLeft
                className="absolute text-2xl text-white cursor-pointer"
                style={{ left: -25, top: "45%" }}
                onClick={mobilePrevious}
              />
              <Image
                src={reviews[mobileReviewIndex].image}
                className="w-14 h-14 rounded-full mx-auto"
                alt="detail product"
                width={100}
                  height={100}
              />
              <h3 className="text-left my-1 font-bold">
                {reviews[mobileReviewIndex].name}
              </h3>
              <p className="text-left">
                {reviews[mobileReviewIndex].designation}
              </p>
              <p className="text-left">
                {`"${reviews[mobileReviewIndex].description}"`}
              </p>
              <FiArrowRight
                className="absolute text-2xl text-white cursor-pointer"
                style={{ right: -25, top: "45%" }}
                onClick={mobileNext}
              />
            </div>
            <div className="text-center">
              {reviews.map((item, index) => {
                return (
                  <>
                    {index === mobileReviewIndex ? (
                      <RxDotFilled className="inline-block" key={index} />
                    ) : (
                      <RxDot className="inline-block" key={index} />
                    )}
                  </>
                );
              })}
            </div>

            {/* <div className="h-20 bg-[#C7B4B4] my-6" onClick={showProduct}>
                          
                </div>

                <div className="h-20 bg-[#C7B4B4] my-6" onClick={showProduct}>
                          
                </div> */}
          </div>
        </div>
      ) : (
        <div>
          <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-[#8E7E7E] bg-[url('../../public/assets/product/nav image.png')]">
          <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
            <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start px-24 pt-1">
              <Link
                className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white"
                to="#"
              >
                Tip For the Trip
              </Link>
              <button
                className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                type="button"
                onClick={() => setNavbarOpen(!navbarOpen)}
              >
                <i className="fas fa-bars"></i>
              </button>
            </div>
            <div
              className={
                "lg:flex flex-grow items-center" +
                (navbarOpen ? " flex" : " hidden")
              }
              id="example-navbar-danger"
            >
              <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
                <li className="nav-item">
                  <button
                    className="px-8 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                    onClick={() => { setToggleSearch(!toggleSearch)}}
                  >
                    <BsSearch className="text-lg" />
                  </button>
                </li>
                <li className="nav-item">
                  <Link
                    className="px-8 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                    to="#"
                  >
                    <i className="fab fa-facebook-square text-lg leading-lg text-white opacity-75"></i><span className="ml-2">About</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="px-8 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                    to="#"
                  >
                    <i className="fab fa-twitter text-lg leading-lg text-white opacity-75"></i><span className="ml-2">History</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="px-8 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                    href="#"
                  >
                    <i className="fab fa-pinterest text-lg leading-lg text-white opacity-75"></i><span className="ml-2">Store</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="px-8 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                    to="#"
                  >
                    <i className="fab fa-pinterest text-lg leading-lg text-white opacity-75"></i><span className="ml-2">News</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="px-8 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                    href="#"
                  >
                    <i className="fab fa-pinterest text-lg leading-lg text-white opacity-75"></i><span className="ml-2">Login</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="w-full">
            <ul className="flex float-right flex-col lg:flex-row list-none lg:ml-auto">
                <li className="nav-item mx-16 my-1">
                  {
                      toggleSearch &&
                      <input type="text" placeholder="Search" className="px-2 placeholder-black" />
                  }
                </li>
              </ul>
              
          </div>
        </nav>

          <div
            className="pt-16 pb-10 px-8"
            style={{
              backgroundImage: `url(/assets/product/bg-image.jpg)`,
              backgroundSize: "cover",
              backgroundAttachment: "fixed",
              backgroundPosition: "center",
            }}
          >
            <div className="grid grid-cols-4 gap-8">
              <div className="bg-[#D9D9D9] p-5 rounded-md">
                <Image
                  src={frameImg}
                  className="w-full h-full object-cover"
                  onClick={() => zoomImage(frameImg)}
                  alt="detail product"
                  width={550}
                  height={750}
                />
              </div>
              <div className="col-span-2">
                <div className="bg-[#D9D9D9] rounded-md py-4 px-3">
                  <h4 className="font-bold px-4">Description :</h4>
                  <p className="text-sm px-4">
                    {"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.".slice(
                      0,
                      screenSize.width > 1024 ? 400 : 200
                    )}{" "}
                    ...
                  </p>
                </div>

                <div className="mt-4">
                  <div className="text-white font-bold py-2 px-4">$19.99</div>
                  <div className="py-2 px-4">
                    <button className="bg-yellow-50 hover:bg-yellow-100 text-black py-1 px-4 rounded-lg text-xs">
                      Add To Cart
                    </button>

                    <button className="bg-yellow-50 hover:bg-yellow-100 text-black py-1 px-4 rounded-lg text-xs mx-4">
                      Add To Favorite
                    </button>
                  </div>
                </div>

                <div className="bg-[#D9D9D9] py-4 px-3 rounded-md mt-10">
                  <h4 className="font-bold px-4">More info :</h4>
                  <p className="text-sm px-4">
                    {"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.".slice(
                      0,
                      screenSize.width > 1024 ? 400 : 200
                    )}{" "}
                    ...
                  </p>
                </div>
              </div>
              <div className="bg-[#D9D9D9] px-8 p-6 rounded-md">
                <h1 className="text-center font-bold">Related Items</h1>
                <div className="bg-[#C7B4B4] mt-2" onClick={showProduct}>
                  <Image
                    src={"/assets/product/product.jpg"}
                    className="h-20 w-full cursor-pointer"
                    alt="detail product"
                    width={350}
                    height={100}
                  />
                  <h3 className="bg-[#505050] text-white">Product1: $19.19</h3>
                </div>

                <div className="bg-[#C7B4B4] mt-6" onClick={showProduct}>
                  <Image
                    src={"/assets/product/product4.jpg"}
                    className="h-20 w-full cursor-pointer"
                    alt="detail product"
                    width={350}
                    height={100}
                  />
                  <h3 className="bg-[#505050] text-white">Product2: $39.22</h3>
                </div>

                <div className="h-20 bg-[#C7B4B4] my-6" onClick={showProduct}>
                  <Image
                    src={"/assets/product/product2.jpg"}
                    className="h-20 w-full cursor-pointer"
                    alt="detail product"
                    width={350}
                    height={100}
                  />
                  <h3 className="bg-[#505050] text-white">Product3: $16.39</h3>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-4 gap-8 my-4">
              <div className="flex justify-center items-center space-x-6  rounded-md h-fit p-3">
              {/* <div className="flex justify-center items-center space-x-6 bg-[#D9D9D9] rounded-md h-fit p-3"> */}
                <div
                  className="h-9 rounded w-9 cursor-pointer border-2 p-0.5 border-gray-600 bg-[#D9D9D9]"
                  onClick={() => setFrameImg("/assets/product/product.jpg")}
                >
                  <Image
                    src={"/assets/product/product.jpg"}
                    style={{ height: "100%", width: "100%" }}
                    alt="detail product"
                    width={50}
                    height={53}
                  />
                </div>
                <div
                  className="h-9 rounded w-9 cursor-pointer border-2 p-0.5 border-gray-600 bg-[#D9D9D9]"
                  onClick={() => setFrameImg("/assets/product/product2.jpg")}
                >
                  <Image
                    src={"/assets/product/product2.jpg"}
                    style={{ height: "100%", width: "100%" }}
                    alt="detail product"
                    width={50}
                    height={53}
                  />
                </div>
                <div
                  className="h-9 rounded w-9 cursor-pointer border-2 p-0.5 border-gray-600 bg-[#D9D9D9]"
                  onClick={() => setFrameImg("/assets/product/product3.jpg")}
                >
                  <Image
                    src={"/assets/product/product3.jpg"}
                    style={{ height: "100%", width: "100%" }}
                    alt="detail product"
                    width={50}
                    height={53}
                  />
                </div>
                <div
                  className="h-9 rounded w-9 cursor-pointer border-2 p-0.5 border-gray-600 bg-[#D9D9D9]"
                  onClick={() => setFrameImg("/assets/product/product4.jpg")}
                >
                  <Image
                    src={"/assets/product/product4.jpg"}
                    style={{ height: "100%", width: "100%" }}
                    alt="detail product"
                    width={50}
                    height={53}
                  />
                </div>
                <div
                  className="h-9 rounded w-9 cursor-pointer border-2 p-0.5 border-gray-600 bg-[#D9D9D9]"
                  onClick={() => setFrameImg("/assets/product/product5.jpg")}
                >
                  <Image
                    src={"/assets/product/product5.jpg"}
                    style={{ height: "100%", width: "100%" }}
                    alt="detail product"
                    width={50}
                    height={53}
                  />
                </div>
                <div className="flex justify-end items-center">
                  <FiArrowRight
                    className="text-[#00000070] cursor-pointer h-7 w-auto"
                    onClick={() => {
                      setFrameImg(
                        imgArr[Math.floor(Math.random() * imgArr.length)]
                      );
                    }}
                  />
                </div>
              </div>

              <div className="bg-[#D9D9D9] rounded-md grid place-items-center col-span-3 pb-4">
                <h1 className="text-center font-bold mt-4">Reviews</h1>
                <div className="relative grid grid-cols-3 gap-24">
                  <FiArrowLeft
                    className="absolute text-2xl text-white cursor-pointer"
                    style={{ left: -25, top: "45%" }}
                    onClick={desktopPrevious}
                  />
                  {review.map((item, index) => {
                    return (
                      <div
                        className="bg-[#C7B4B4] mx-2 my-4  mb-2 p-2"
                        key={index}
                      >
                        <Image
                          src={reviews[item].image}
                          className="w-12 h-12 rounded-full mx-auto"
                          alt="detail product"
                          width={50}
                          height={50}
                        />
                        <h3 className="text-left  font-bold leading-none">
                          {reviews[item].name}
                        </h3>
                        <p className="text-left  leading-none text-sm">
                          {reviews[item].designation}
                        </p>
                        <p className="text-left  leading-none text-xs">
                          {`"${reviews[item].description}"`}
                        </p>
                      </div>
                    );
                  })}

                  <FiArrowRight
                    className="absolute text-2xl text-white cursor-pointer"
                    style={{ right: -25, top: "45%" }}
                    onClick={desktopNext}
                  />
                </div>
                <div className="text-center">
                  {reviews.map((item, index) => {
                    return (
                      <>
                        {review.includes(index) ? (
                          <RxDotFilled className="inline-block" key={index} />
                        ) : (
                          <RxDot className="inline-block" />
                        )}
                      </>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
          {/* <div className="w-screen bg-[#8E7E7E] h-12">
            <div className="grid grid-cols-3 gap-8">
              <div className="text-center text-white my-3 text-xs">TipForTheTrip</div>
              <div className="text-center text-white my-3 mx-40">
                  <div className="grid grid-cols-3 gap-2">
                    <div className="w-6 h-6 bg-[#DEDF94] rounded-full" ></div>
                    <div className="w-6 h-6 bg-[#DEDF94] rounded-full"></div>
                    <div className="w-6 h-6 bg-[#DEDF94] rounded-full"></div>
                  </div>
              </div>
              <div className="text-center text-white my-3 text-xs">Contact Us Here</div>
            </div>
        </div> */}
        </div>
      )}
    </>
  );
};

export default ProductView;
