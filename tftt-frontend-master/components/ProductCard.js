import React from 'react'
import Image from 'next/image'

export default function ProductCard({product}) {
  return (
    <div className="bg-gray-200 rounded-md shadow-md p-4 hover:bg-gray-300 ml-8 mr-8" >

        {/* Div to hold the image in upper portion of the card. */}
        <div className="relative w-full h-64 object-cover object-center rounded-md">
            <Image src={product.image_url} layout="fill" objectFit="cover" className="rounded-md" alt='Product Image' />
        </div>
        <div className="mt-4">
            <h3 className="text-xl">{product.name}</h3>
            {/* if discount exists for this product, show discounted price and banner */}
            {product.discount ? (
                <div className="flex items-center">
                    <span className="text-xl font-bold">${(product.discount * product.price).toFixed(2)}</span>
                    <span className="text-sm text-gray-400 line-through ml-2">${product.price.toFixed(2)}</span>
                    <span className="text-sm bg-green-500 text-white rounded-md px-2 ml-2">{(product.discount * 100).toFixed(0)}% Off</span>
                </div>
            ) : (
                <span className="text-lg font-bold">${product.price.toFixed(2)}</span>
            )}

        </div>
    </div>
  )
}
