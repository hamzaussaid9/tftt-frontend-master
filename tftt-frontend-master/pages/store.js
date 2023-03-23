
import { useState } from 'react'
import { BsFillArrowDownCircleFill } from "react-icons/bs";
import data from '../public/testData/test_products'
import ProductCard from '../components/ProductCard'

export default function Store() {

    const [products, setProducts] = useState(data)
    const [pageNumber, setPageNumber] = useState(1);
    const [flavorFilter, setFlavorFilter] = useState("All");
    const [itemsPerPage, setItemsPerPage] = useState(10);

    const handleFlavorChange = (event) => {
        setFlavorFilter(event.target.value);
        setPageNumber(1); // reset page number when flavor is changed
    }

    /* Next / Previous button handlers */
    const handleNextButtonClick = () => {
        setPageNumber(pageNumber + 1);
    }

    const handlePrevButtonClick = () => {
        setPageNumber(pageNumber - 1);
    }

    /* Filter products by flavor */
    const filteredProducts = products.filter((product) => {
        if (flavorFilter === "All") {
            return true;
        }
        else {
            return product.attributes.includes(flavorFilter);
        }
    });

    const indexOfLastItem = pageNumber * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = filteredProducts.slice(indexOfFirstItem, indexOfLastItem);

    return (
        <div className='bg-[url("/assets/client_photo.jpg")] w-full bg-center bg-cover bg-fixed scroll-smooth'>
            <h2 className="text-black bg-gray-300 rounded-lg text-2xl font-bold text-center bg-opacity-60">Meat Marketplace</h2>

            <div className="ml-8 mt-12 mb-12">
                
				<select className="bg-gray-200 hover:bg-gray-300 border-gray-400 py-4 px-4 pr-8 rounded-lg shadow-sm w-medium sticky"
                    value={flavorFilter}
                    onChange={handleFlavorChange}
                >
                    <option value="All">All Flavor Options</option>
                    <option value="smoky">- Smoky</option>
                    <option value="sweet">- Sweet</option>
                    <option value="tender">- Tender</option>
                    <option value="juicy">- Juicy</option>
                    <option value="roasted">- Roasted</option>
                </select>
            </div>
			<div className="overflow-hidden rounded-lg xl:aspect-w-7 xl:aspect-h-8 grid grid-cols-1 gap-y-16 gap-x-0 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8 scroll-smooth">
                {currentItems.map((product) => (
                    <ProductCard product={product} key={Math.floor(Math.random() * (1000 - 0 + 1))} />
                ))}
            </div>

			<div className="mt-12 pb-12 flex justify-center">
                {pageNumber !== 1 && (
                <button
                    className="py-2 px-4 bg-gray-300 hover:bg-gray-400 rounded-md mr-6"
                    disabled={pageNumber === 1}
                    onClick={handlePrevButtonClick}
                >
                    Back
                </button>
                )}
                <span className="text-black text-2xl font-bold p-2 bg-gray-300 rounded-md">{pageNumber}</span>
                {pageNumber !== Math.ceil(filteredProducts.length / itemsPerPage) && (
                <button
                    className="py-2 px-4 bg-gray-300 hover:bg-gray-400 rounded-md ml-6"
                    disabled={pageNumber === Math.ceil(filteredProducts.length / itemsPerPage)}
                    onClick={handleNextButtonClick}
                >
                    Next
                </button>
                )}
            </div>
 			{<BsFillArrowDownCircleFill className='animate-bounce text-white h-14 w-14 sticky bottom-0 left-10 md:left-30'></BsFillArrowDownCircleFill>}
        </div>
    )
}