import React, { useState } from 'react';
import ProductCard from './ProductCard';

const FeaturedItemList = ({ products, addProduct }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(3);
  
    // Get current items
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = products.slice(indexOfFirstItem, indexOfLastItem);
  
    const handlePrevClick = () => {
      if (currentPage === 1) {
        setCurrentPage(Math.ceil(products.length / itemsPerPage));
      } else {
        setCurrentPage(currentPage - 1);
      }
    };
  
    const handleNextClick = () => {
      if (currentPage === Math.ceil(products.length / itemsPerPage)) {
        setCurrentPage(1);
      } else {
        setCurrentPage(currentPage + 1);
      }
    };
  
    return (
      <div className="my-8">
        <h2 className="text-2xl font-bold mb-4">Featured Items</h2>
        <div className="flex flex-wrap">
          {currentItems.map((item, index) => (
            <div
              key={item.id}
              className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 mb-4 p-4 m-1"
            >
              <ProductCard product={item} key={Math.floor(Math.random() * (1000 - 0 + 1))} />
            </div>
          ))}
        </div>
        <div className="my-4">
          <button onClick={handlePrevClick} className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l">
            Prev
          </button>
          <button onClick={handleNextClick} className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r">
            Next
          </button>
        </div>
      </div>
    );
  };
  
  export default FeaturedItemList;